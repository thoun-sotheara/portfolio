# SEO & Metadata Configuration Guide

## What You Need to Update

### 1. Domain Name
Your portfolio needs a real domain. Update in two places:

**File: `app/layout.tsx`**
- Change `"https://sotheara-portfolio.dev"` to your actual domain
- Example: `"https://sotheara.dev"` or `"https://sotheara-portfolio.com"`

**File: `lib/portfolio-data.ts`**
- Update `siteUrl` field with your domain
- Update `metadataBase` in layout.tsx

### 2. Open Graph Image
When someone shares your portfolio on Twitter, Facebook, LinkedIn, etc., this image appears.

**File: `app/layout.tsx` → `openGraph.images[0].url`**
- Change `"/og-image.png"` to your image path
- Recommended: Create `public/og-image.png` (1200×630px)
- Or use external URL: `"https://your-cdn.com/og-image.png"`

### 3. Canonical URL
Tells search engines your preferred URL.

**File: `app/layout.tsx` → `canonical`**
- Set to your actual domain
- Example: `"https://sotheara.dev"`

### 4. Title & Description
What appears in Google search results and browser tabs.

**File: `app/layout.tsx`**
Currently set to:
```javascript
title: "Sotheara Thoun — Full-Stack Developer & Problem Solver"
description: "Full-stack developer with 6+ years of experience..."
```

Feel free to customize, but these are already personalized for you.

### 5. Social Links (Twitter/X Card)
When shared on Twitter, this image and description appear.

**File: `app/layout.tsx` → `twitter` section**
- Already configured with your name and stats
- Image pulls from `openGraph.images`

## Quick Checklist

- [ ] Domain name finalized
- [ ] OG image created and placed in `public/og-image.png`
- [ ] `app/layout.tsx` updated with your real domain (replace both instances)
- [ ] Portrait image added to `public/images/portrait.jpg`
- [ ] UI screenshots added to `public/images/screenshots/`
- [ ] Run `npm run build` to test

## Files to Update

1. `app/layout.tsx` — Main metadata location
2. `lib/portfolio-data.ts` — Configuration constants
3. `public/og-image.png` — Social sharing image

## Example: After You Update

When someone shares your portfolio, they'll see:
- **Title:** "Sotheara Thoun — Full-Stack Developer & Problem Solver"
- **Description:** "6+ years building high-stakes digital infrastructure..."
- **Image:** Your custom OG image
- **URL:** Your actual domain

## Hosting & Deployment

After updating everything, deploy to Vercel:
```bash
npm run build
git add .
git commit -m "Add real portfolio data and images"
git push
```

Vercel will automatically deploy. Test the OG image by:
1. Sharing your domain on Twitter
2. Using: https://www.opengraph.xyz/

## Keywords for SEO

Already included in metadata:
- Sotheara Thoun
- Full-stack Developer
- SaaS Developer
- E-commerce
- Next.js, React
- Cambodia Developer

These will help you rank for relevant searches.
