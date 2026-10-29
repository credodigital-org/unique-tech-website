# Unique Tech General Maintenance LLC

React + Vite website: Home, About, Services, Projects (with category filter) and Contact.

## Run
```sh
npm install
npm run dev       # development server
npm run build     # production build -> dist/
npm run preview   # preview the build
npm run lint      # ESLint
```

## Deploy (Vercel)
Import the repo. Framework preset **Vite**, build command `npm run build`, output directory `dist`.
`vercel.json` sends every non-asset path to `index.html` so client-side routes work on refresh.

## Structure
```text
unique-tech/
├── index.html              # fallback SEO tags, fonts
├── vite.config.js
├── eslint.config.js
├── vercel.json
├── public/                 # favicon.png, robots.txt, sitemap.xml
└── src/
    ├── main.jsx            # entry: providers + global CSS
    ├── App.jsx             # routes
    ├── index.css           # design tokens, reset, typography, shared button/eyebrow/layout styles
    ├── App.css             # scroll-reveal motion
    ├── assets/images/      # every image, imported from JSX/data files
    ├── components/         # Navbar, Footer, SocialLinks, Icons, ScrollToTop, ScrollReveal, TouchHover (+ .css beside each)
    ├── data/               # company, navigation, services, serviceCatalog, projects, about, home
    └── pages/              # HomePage, AboutPage, ServicesPage, ProjectsPage, ContactPage, NotFound (+ .css)
```

Contact details (email, phones, address, map and WhatsApp links) live in `src/data/company.js`; change them there once.

## Styling notes
- Colours, radii, shadows and spacing are CSS variables at the top of `src/index.css`.
- Headings use Raleway and body text Poppins (loaded in `index.html`), as in the design PDFs.
- Cards on Services, Projects, Contact and Home turn blue on hover, keyboard focus and tap; their icon tiles turn white. On touch devices (no real hover) `components/TouchHover.jsx` also applies the same look to the card passing through the middle of the screen.
- Service icons are the supplied PNGs (`icon-wrench/brush/gear.png`), recoloured with a CSS mask (`.glyph` in `index.css`): white on blue normally, blue on white on hover.
- The home hero uses `hero-reference.webp` on tablets/desktops and a dedicated crop, `hero-mobile.webp`, on phones so the worker and logo are always visible.
- Motion lives in `src/App.css` and is disabled automatically for visitors who prefer reduced motion.
- Photos are WebP (about 1 MB in total). Keep new photos under ~150 KB each.
- Breakpoints: 1100px (tablet landscape), 960px (hamburger menu, 2-column grids), 700px and 560px (phones).

## Before going live
- Replace the example domain in `public/robots.txt` and `public/sitemap.xml`.
- The enquiry form opens a prefilled email to the address in `src/data/company.js`; connect Formspree or a serverless endpoint for direct submissions.
- Instagram, Facebook and TikTok links in `company.js` are placeholders.
