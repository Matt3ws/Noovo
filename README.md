## Noovo – Website

This repository contains the Noovo website built with Next.js App Router, TypeScript, Tailwind CSS (v4), and a small set of reusable UI components. It includes a contact form that sends emails via Resend, dark/light theme support, a cookie banner, and SEO primitives (metadata, robots, sitemap).

## Quick start

1. Install prerequisites

- **Node**: 18+ (recommended)
- **Package manager**: npm (default) or pnpm/yarn

2. Install dependencies

```bash
npm install
```

3. Set environment variables (for the contact form)

Create a `.env.local` in the project root:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=recipient@example.com
# Optional
CONTACT_FROM_EMAIL=no-reply@example.com
```

4. Start the dev server

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Scripts

```bash
# Start local dev server
npm run dev

# Build production bundle
npm run build

# Start production server (after build)
npm run start

# Lint the codebase
npm run lint
```

## Tech stack

- **Framework**: Next.js (App Router) with React and TypeScript
- **Styling**: Tailwind CSS v4, utility-first styling
- **UI**: Radix primitives and a local `components/ui` library (shadcn-style)
- **Theming**: `next-themes` with a theme toggle and provider
- **Forms/UX**: `react-hook-form` (available), `useToast` to show toasts
- **Email**: Resend for contact form delivery
- **SEO**: Metadata, `robots.ts`, `sitemap.ts`

## Project structure

```
app/
  api/
    contact/
      route.ts        # POST /api/contact → sends email via Resend
  layout.tsx          # Root layout with metadata, fonts, providers
  page.tsx            # Landing/home page
  globals.css         # Global styles (Tailwind)
  robots.ts           # Robots.txt via Next.js route file
  sitemap.ts          # Sitemap via Next.js route file

components/
  contact-form.tsx    # Client contact form (posts to /api/contact)
  cookie-banner.tsx   # Cookie consent banner
  cookie-settings-link.tsx
  mobile-menu.tsx, theme-toggle.tsx, ...
  ui/                 # Reusable UI components (buttons, inputs, etc.)

hooks/
  use-toast.ts        # Toast helper
  use-mobile.tsx      # Small responsive helper

lib/
  i18n.ts             # i18n initialization helpers
  utils.ts            # Common utilities (e.g., cn/class helpers)

providers/
  theme-provider.tsx  # Theme provider using next-themes

public/
  ...                 # Static assets (images, logos)
```

## Architecture overview

- **App Router**: Pages and API routes live under `app/`. The root layout (`app/layout.tsx`) sets global metadata, fonts, and wraps the app with providers like the theme and toast.
- **Styling**: Tailwind v4 powers styling. Global styles are in `app/globals.css`. Most components use Tailwind class utilities.
- **UI components**: Common primitives exist in `components/ui/` (shadcn-style). Build new pages by composing these.
- **Theming**: Dark/light mode via `next-themes`. The provider is in `providers/theme-provider.tsx`, with a toggle in `components/theme-toggle.tsx`.
- **Cookies**: A simple cookie banner is provided by `components/cookie-banner.tsx`.
- **i18n**: `lib/i18n.ts` initializes i18n and exposes helpers. You can expand locales and usage as needed.
- **SEO**: App-wide metadata lives in `app/layout.tsx`. `app/robots.ts` and `app/sitemap.ts` generate SEO artifacts dynamically.

## Contact form flow

- **Client**: `components/contact-form.tsx` collects user inputs and posts to `/api/contact`.
- **Server**: `app/api/contact/route.ts` validates inputs and sends an email using Resend.
- **Required env**: `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (and optional `CONTACT_FROM_EMAIL`).
- **No reCAPTCHA**: The form is currently configured without reCAPTCHA.

## Working with UI components

- **Location**: `components/ui/` holds buttons, inputs, dialogs, and other primitives (built on Radix).
- **Composition**: Prefer reusing these building blocks rather than creating bespoke styles per page.
- **Conventions**:
  - Keep components stateless when possible; lift state to parent where needed.
  - Use descriptive prop names and keep components small and focused.

## Code quality

- **TypeScript**: Use clear names and explicit types for public APIs.
- **ESLint**: `npm run lint` uses Next’s ESLint config to enforce consistent code quality.
- **Formatting**: Follow the code style: readable variable names, minimal nesting, early returns.
- **Folder hygiene**: Keep page-specific components near their usage or in a feature folder; keep reusable elements in `components/ui/` or a shared `components/` subfolder.

## Deployment

- **Recommended**: Vercel (optimized for Next.js).
- **Build**: `npm run build` → `npm run start`.
- **Environment**: Ensure `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and (optional) `CONTACT_FROM_EMAIL` are set in your hosting provider.

## Troubleshooting

- **Emails not sending**
  - Ensure `RESEND_API_KEY` is valid.
  - Ensure `CONTACT_TO_EMAIL` is set and is a permitted recipient per your Resend account settings.
- **Build errors**
  - Make sure Node 18+ is used locally and in CI/deployment.
  - Run `npm run lint` to catch common issues.
- **Styling doesn’t apply**
  - Ensure Tailwind is correctly installed and `app/globals.css` is included in `app/layout.tsx`.

## Contributing and extending

- Add new UI primitives to `components/ui/` or compose existing ones.
- Extend pages under `app/` following the App Router conventions.
- Keep business logic in server routes (`app/api/...`) and reusable utilities in `lib/`.

If you have questions or want to propose improvements, feel free to open an issue or PR.
