# Therapy Website - CMS-Driven with Next.js & Sanity

A fully CMS-driven therapy website built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS.

## Features

- **Fully CMS-Driven**: All content managed through Sanity CMS
- **Single Page Design**: Beautiful scrolling homepage with all sections
- **Responsive**: Mobile-first design that works on all devices
- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Custom Fonts**: Magnolia Script for headings, Anaktoria for body text
- **Welcome Popup**: First-time visitor modal
- **Rich Content**: Support for rich text, images, and structured data

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Sanity

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

To get your Sanity credentials:

1. Go to [sanity.io](https://www.sanity.io/)
2. Create a new project or use an existing one
3. Copy the Project ID from your project settings

### 3. Initialize Sanity Studio

```bash
npm run dev
```

Visit `http://localhost:3000/studio` to access the Sanity Studio.

### 4. Add Content in Sanity

In the Sanity Studio, create documents for:

1. **Settings** - Website name, tagline, logo, popup content
2. **About** - About section with profile image
3. **Approach** - Your therapy approach
4. **Why Choose** - Why choose your services
5. **Services** - Add multiple service offerings
6. **Myths & Facts** - Common myths and facts
7. **Packages** - Pricing packages
8. **Contact Info** - Email, phone, address

### 5. View Your Website

Once content is added, visit `http://localhost:3000` to see your website!

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage (fetches all Sanity data)
│   └── studio/             # Sanity Studio route
├── components/             # React components for each section
│   ├── WelcomePopup.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ApproachSection.tsx
│   ├── WhyChooseSection.tsx
│   ├── ServicesGrid.tsx
│   ├── MythsFactsSection.tsx
│   ├── PackagesSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── schemas/                # Sanity schema definitions
│   ├── settings.ts
│   ├── about.ts
│   ├── approach.ts
│   ├── whyChoose.ts
│   ├── service.ts
│   ├── mythFact.ts
│   ├── package.ts
│   └── contactInfo.ts
├── lib/
│   └── sanity.ts          # Sanity client configuration
└── types/
    └── sanity.ts          # TypeScript types
```

## Sections Included

1. **Welcome Popup** - Modal shown on first visit
2. **Hero Section** - Main header with logo and tagline
3. **About Section** - Text and image layout
4. **Approach Section** - Your therapeutic approach
5. **Why Choose Section** - Reasons to choose you
6. **Services Grid** - All service offerings
7. **Myths & Facts** - Educational content
8. **Packages Section** - Pricing plans
9. **Contact Section** - Contact information
10. **Footer** - Website footer

## Customization

### Colors

The primary color is set to `#00137a` in `tailwind.config.ts`. The background uses a soft gradient of yellow, blue, and purple.

### Fonts

- **Headings**: Magnolia Script (loaded from CDN Fonts)
- **Body**: Anaktoria (loaded from Google Fonts)

### Content

All content is managed in Sanity. No hardcoded content exists in the frontend.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

##Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy Sanity Studio

The Sanity Studio is included at `/studio` route and will deploy with your Next.js app.

## Admin Access

Access the CMS at: `https://yourdomain.com/studio`

From there, you can:
- Edit all website content
- Add/remove services
- Manage packages
- Update contact information
- Change images and text
- Modify the welcome popup

## Support

For issues or questions:
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)
- Sanity: [sanity.io/docs](https://www.sanity.io/docs)
- Tailwind CSS: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## License

MIT

<!-- ci-smoke-test -->
