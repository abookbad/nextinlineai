Next In Line AI — Futuristic Liquid‑Glass Landing Page

Tech stack
- Next.js App Router + TypeScript (strict)
- Tailwind CSS v4 (tokens via CSS variables)
- Framer Motion (client-only effects)
- Absolute imports via `@/`

Setup
1) Install dependencies
   - npm install
2) Run dev server
   - npm run dev
3) Build
   - npm run build && npm start

Structure
- `src/styles/tokens.css` — design tokens (colors, radii, shadows, motion) and glass utilities
- `src/lib/*` — copy, animations, seo metadata, utils, analytics stub
- `src/components/*` — ui primitives, core layout, effects, and sections
- `src/app/*` — App Router routes, layout, metadata, robots/sitemap
- `public/images/*` — noise/specular textures, blobs, hero mockup, og

Content management
- All copy in `src/lib/copy.ts` (no hardcoded strings in components)

Accessibility
- Respects `prefers-reduced-motion`: disables parallax, cursor light, sheen sweeps
- Proper semantics, focus rings, and high contrast on glass (text uses subtle backplate/shadows)
- Skip to content link present

Performance
- GPU-friendly transforms only; low intensity blurs; minimal filters
- `next/image` with explicit sizes to avoid CLS
- Decorative assets are lightweight; heavy client-only effects are dynamically imported

Testing (scaffold only)
- Unit (suggested): React Testing Library + Vitest for `Navbar` and `Reveal`
- E2E (suggested): Playwright smoke (home loads, nav links scroll)

Reduced motion features
- Cursor light, sheen sweeps, and blob movement are disabled when users prefer reduced motion.

Assets
- `noise.png`: tiling micro-grain overlay (~2% opacity)
- `specular-streak.png`: angled highlight
- `blob-*.svg`: gradient blobs
- `hero-phone.png`: placeholder mockup
