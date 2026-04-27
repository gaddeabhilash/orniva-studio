# Orniva Website Redesign TODO

## Plan
Transform the existing interior design website into a premium dark-themed startup conversion site. No fake testimonials or projects.

## Steps

- [x] Step 1: Update `index.html` — Add Google Fonts (Playfair Display, Inter)
- [x] Step 2: Update `src/index.css` — Dark theme CSS variables (`#0f0f0f`, `#ffffff`, `#c9a96e`)
- [x] Step 3: Rewrite `src/App.jsx` — New component structure:
  - Navbar (updated links)
  - Hero (new headline, 2 CTAs, dark overlay, startup subtext)
  - Launch Offer Banner
  - Services section
  - Design Concepts (filtered: All/Living/Kitchen/Bedroom, "Concept Design | Not Executed" badge)
  - Why Choose Us (4 startup advantages)
  - Process (5 steps: Consultation → Design → 3D → Execution → Delivery)
  - Beliefs (keep, restyle)
  - FAQ (keep, restyle)
  - Contact (strong CTA, improved form UI)
  - Footer (updated links)
  - WhatsApp Float (keep)
- [x] Step 4: Rewrite `src/App.css` — Complete dark premium theme:
  - All backgrounds to `#0f0f0f` / `#141414`
  - Gold accent `#c9a96e` for CTAs, borders, hover
  - Hover effects and transitions
  - Smooth fade-in animations via IntersectionObserver
  - Mobile responsiveness
- [x] Step 5: Verify build (`npm run dev` or `npm run build`)

## Design Notes
- Colors: `#0f0f0f` (black), `#ffffff` (white), `#c9a96e` (gold accent)
- No fake testimonials → removed Reviews section entirely
- No fake projects → renamed to Design Concepts with clear labels
- Startup focus: personalized, affordable, direct, flexible

