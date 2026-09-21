# Z8phyR website

Standalone Next.js App Router + TypeScript website prepared for Vercel. This is the Z8phyR-only version of draft three. No Cool Breeze route, Sites account, Cloudflare configuration, database, or payment credentials are required.

## Start locally

Install Node.js 22 LTS, then open a terminal in this folder:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Stop with Ctrl+C.

Before publishing:

```sh
npm run build
```

To check that production build locally, run `npm start`.

## What to edit

| File | Purpose |
| --- | --- |
| `app/artist-content.ts` | Latest release/player, socials, Patreon, creator playlist/terms, guestbook link |
| `app/content.ts` | Releases, external merchandise links, journal entries |
| `app/integrations.ts` | Kit signup, Tally form, Payhip storefront and free project destinations |
| `app/newsletter-signup.tsx`, `app/inquiry-form.tsx` | Embedded forms and direct-link fallbacks |
| `app/artist-shell.tsx` | Shared navigation and social footer |
| `app/work-with-me/page.tsx` | Services, project inquiry copy, and Tally form |
| `app/artist-home.tsx` | Homepage sections and copy |
| `app/artist.css`, `app/artist-draft3.css`, `app/integrations.css` | Brand styling and responsive layout |
| `public/brand/` | Artist photos and brand artwork |
| `app/page.tsx`, `app/layout.tsx` | Page titles and metadata |

Newsletter signup embeds the existing Kit form. Work With Me embeds Tally. The navigation links to the Payhip storefront, and the homepage features the approved free project. See [INTEGRATIONS.md](INTEGRATIONS.md) for account-side checks and the preview workflow. Guestbook and detailed creator licensing remain deferred. The release player uses YouTube; playback remains subject to the video's embedding availability.

Merchandise and project-file buttons send visitors to external services such as Bandcamp, Spring, Printful, Patreon, or hosted Stripe payment links. This site does not process payments or deliver paid files. Do not put paid downloads or secret keys in `public/`.

## GitHub → Vercel

See [DEPLOYMENT.md](DEPLOYMENT.md) for the guided first deployment and future update workflow. No environment variables are needed for the current version. Commit source and `package-lock.json`; never upload `node_modules` or `.next`.

Brand artwork and photos belong to their respective rights holders. Social icons are from Simple Icons (https://simpleicons.org/); brand trademarks remain with their owners. This project does not grant redistribution rights to the music, photos, or branding.
