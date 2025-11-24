'use client';

export function CookieSettingsLink() {
  function open() {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-cookie-settings'));
    }
  }
  return (
    <button type="button" onClick={open} className="text-sm cursor-pointer font-medium text-muted-foreground hover:text-emerald-500 transition-colors">
      Cookieindstillinger
    </button>
  );
}
