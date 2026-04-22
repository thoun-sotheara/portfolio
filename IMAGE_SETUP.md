# Image & Asset Setup Instructions

## Portrait Image (About Section)

**Where to upload:**
1. Create a folder: `public/images/`
2. Place your portrait image there with the name: `portrait.jpg` or `portrait.png`
3. The website will automatically use it at: `/images/portrait.jpg`

**Image specifications:**
- Recommended: 400×500px (4:5 aspect ratio)
- Format: JPG or PNG
- File size: < 200KB (compress for web)
- Style: Low-key atmospheric portrait with strong lighting/shadows (matches your design system)

**Upload method:**
- Add the file directly to `public/images/portrait.jpg`
- Or use your preferred image hosting (Vercel, Cloudinary, etc.) and update the path in `lib/portfolio-data.ts`

---

## UI Screenshots (Featured Work Section)

**Where to upload:**
1. Create a folder: `public/images/screenshots/`
2. Add your project screenshots:
   - `pos-dashboard.png` — POS system dashboard
   - `ecommerce-flow.png` — E-commerce checkout/product flow
   - `design-system.png` — Design system components

**Image specifications:**
- Recommended: 1200×800px (3:2 aspect ratio)
- Format: PNG or WebP
- File size: < 300KB per image (compress for web)
- Content: Show the actual UI at full quality

**Upload method:**
- Add files directly to `public/images/screenshots/`
- Or host externally and update URLs in `components/sections/FeaturedWork.tsx`

---

## Open Graph Image (Metadata/Social Sharing)

**Where to upload:**
1. Place at: `public/og-image.png`
2. Used when your portfolio is shared on social media

**Image specifications:**
- Size: 1200×630px
- Format: PNG
- File size: < 100KB
- Content: Your name, tagline, and professional photo

---

## How to Test Locally

After uploading images to `public/`:
1. Restart dev server: `npm run dev`
2. Visit `http://localhost:3000`
3. Images should load automatically

---

## Deployment

When deploying to Vercel or your hosting:
1. Make sure `public/` folder is included
2. Images will be automatically optimized for production
3. Update `lib/portfolio-data.ts` with your actual domain for canonical URLs and OG image URLs

---

## Need Help?

- For Next.js Image optimization: use `<Image>` component instead of `<img>`
- For external URLs: use full URLs in `lib/portfolio-data.ts`
- For local paths: ensure images are in `public/` folder
