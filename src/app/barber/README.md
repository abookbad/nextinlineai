# Barber page notes

- Update content in `src/content/barber.ts`. Types ensure safe edits.
- Swap the calendar embed by setting `NEXT_PUBLIC_GHL_CALENDAR_EMBED` or pass a `src` prop to `CalendarEmbed`.
- Sticky CTA, hero, pricing, and final CTAs all route to `/book` and use `track('cta_click', { location })`.
- JSON‑LD is generated in `src/lib/schema.ts` and injected via `next/script`.


