# ProGrade Roof Coatings

William Gorman's roof coating site. Next.js 15 (pages router) on the SummitRoof
HTML template (`~/Desktop/Main Files/summitroof`), recoloured to his black and
gold logo. Copy follows `Prograde_Roof_Coating_Website_Plan.docx`.

- `npm run dev` → http://localhost:5250
- All copy and business data: `data/site.js` (open items at the bottom)
- Template CSS untouched in `public/assets/css/`; brand layer is `prograde.css`
- Template motion scripts bundled in `public/assets/js/motion.js`, loaded after
  hydration from `pages/_app.js`. Links are plain `<a>` so each page is a full
  load and the scripts initialise as the template intends.
- Photos and reels in `public/media/` are from his Facebook page, used with permission.
- Lead form: set `NEXT_PUBLIC_LEAD_ENDPOINT`. Without it the form shows a
  call/text panel and sends nothing.
