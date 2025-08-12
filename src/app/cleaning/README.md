# Cleaning page notes

- Update copy in `src/content/cleaning.ts`. Types enforce safe edits.
- Swap the calendar embed by setting `NEXT_PUBLIC_GHL_CALENDAR_EMBED` or pass `src` to `CalendarEmbed`.
- All CTAs use `TrackedLink` to fire `track('cta_click', { location })`.
- JSON‑LD is generated from `src/lib/schema.ts` and injected via `next/script`.


