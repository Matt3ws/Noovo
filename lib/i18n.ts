'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

type Consent = {
  necessary: true;
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const CONSENT_KEY = 'cookie-consent-v1';

export function getConsent(): Consent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Consent;
    // Ensure necessary is always true
    if (parsed && typeof parsed === 'object') {
      return {
        necessary: true,
        preferences: !!parsed.preferences,
        statistics: !!parsed.statistics,
        marketing: !!parsed.marketing,
        updatedAt: parsed.updatedAt || new Date().toISOString(),
      };
    }
    return null;
  } catch {
    return null;
  }
}

export function saveConsent(consent: Partial<Omit<Consent, 'necessary' | 'updatedAt'>>) {
  if (typeof window === 'undefined') return;
  const current = getConsent();
  const next: Consent = {
    necessary: true,
    preferences: consent.preferences ?? current?.preferences ?? false,
    statistics: consent.statistics ?? current?.statistics ?? false,
    marketing: consent.marketing ?? current?.marketing ?? false,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
}

export function hasAnyConsent(): boolean {
  return getConsent() !== null;
}

export function preferencesEnabled(): boolean {
  const c = getConsent();
  return !!c?.preferences;
}

export function initI18n() {
  const detection = preferencesEnabled()
    ? {
        order: ['querystring', 'cookie', 'localStorage', 'navigator'],
        caches: ['cookie', 'localStorage'],
        cookieSameSite: 'lax' as const,
      }
    : {
        order: ['querystring', 'localStorage', 'navigator'],
        caches: [] as string[],
      };

  if (!i18n.isInitialized) {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        fallbackLng: 'da',
        resources: {
          da: { translation: { hello: 'Hej' } },
          en: { translation: { hello: 'Hello' } },
        },
        detection,
        interpolation: { escapeValue: false },
      });
  } else {
    i18n.services?.languageDetector?.init(detection);
  }

  return i18n;
}


