'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { initI18n, getConsent, saveConsent } from '@/lib/i18n';

type Toggles = {
  preferences: boolean;
  statistics: boolean;
  marketing: boolean;
};

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [toggles, setToggles] = useState<Toggles>({
    preferences: false,
    statistics: false,
    marketing: false,
  });

  useEffect(() => {
    const existing = getConsent();
    if (!existing) {
      setVisible(true);
    } else {
      setToggles({
        preferences: !!existing.preferences,
        statistics: !!existing.statistics,
        marketing: !!existing.marketing,
      });
    }
    initI18n();
    const handler = () => setVisible(true);
    window.addEventListener('open-cookie-settings', handler as EventListener);
    return () => {
      window.removeEventListener('open-cookie-settings', handler as EventListener);
    };
  }, []);

  function setToggle(name: keyof Toggles, value: boolean) {
    setToggles((prev) => ({ ...prev, [name]: value }));
  }

  function acceptAll() {
    saveConsent({ preferences: true, statistics: true, marketing: true });
    finalize();
  }

  function rejectAll() {
    saveConsent({ preferences: false, statistics: false, marketing: false });
    finalize();
  }

  function saveSelection() {
    saveConsent({ ...toggles });
    finalize();
  }

  function finalize() {
    setVisible(false);
    const i18n = initI18n();
    i18n.services?.languageDetector?.cacheUserLanguage(i18n.language);
  }

  return (
    <>
      {visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/[.025] backdrop-blur-sm" />
          <div className="relative mx-4 w-full max-w-xl rounded-xl border border-border bg-card p-5 shadow-xl">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-base font-semibold">Cookies</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Vi bruger cookies for at få siden til at fungere og forbedre oplevelsen. Du kan vælge hvilke kategorier du accepterer.
                  Læs mere i vores{' '}
                  <Link href="#" className="underline underline-offset-4">
                    privatlivspolitik
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-lg border border-border p-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="necessary" className="text-sm font-medium">Nødvendige</Label>
                    <p className="text-xs text-muted-foreground">Altid aktiveret – krævet for at websitet fungerer.</p>
                  </div>
                  <Switch id="necessary" checked disabled />
                </div>
              </div>

              <div className="rounded-lg border border-border p-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="pref" className="text-sm font-medium">
                      Præferencer
                    </Label>
                    <p className="text-xs text-muted-foreground">Husker sprogindstillinger (i18next sprog‑cookie).</p>
                  </div>
                  <Switch id="pref" checked={toggles.preferences} onCheckedChange={(v) => setToggle('preferences', v)} />
                </div>
              </div>

              <div className="rounded-lg border border-border p-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="stats" className="text-sm font-medium">
                      Statistik
                    </Label>
                    <p className="text-xs text-muted-foreground">Anonym statistik og ydeevne (ikke i brug lige nu).</p>
                  </div>
                  <Switch id="stats" checked={toggles.statistics} onCheckedChange={(v) => setToggle('statistics', v)} />
                </div>
              </div>

              <div className="rounded-lg border border-border p-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="mkt" className="text-sm font-medium">
                      Marketing
                    </Label>
                    <p className="text-xs text-muted-foreground">Personaliseret indhold/annoncer (ikke i brug lige nu).</p>
                  </div>
                  <Switch id="mkt" checked={toggles.marketing} onCheckedChange={(v) => setToggle('marketing', v)} />
                </div>
              </div>

              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:justify-end">
                <Button variant="outline" onClick={rejectAll}>
                  Afvis alle
                </Button>
                <Button variant="outline" onClick={saveSelection}>
                  Gem valg
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={acceptAll}>
                  Acceptér alle
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


