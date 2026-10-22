# The Pharmacist

The Pharmacist is a healthcare and pharmacy storefront built with Next.js 16, React 19, TypeScript, and Sanity. It includes product browsing, condition and treatment pages, patient reviews, an about page, a contact form, and an embedded Sanity Studio.

Live website: [the-pharmacist.vercel.app](https://the-pharmacist.vercel.app/)

## Requirements

- Node.js compatible with the installed Next.js version
- npm
- A Sanity project for managing site content

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio).

## Environment variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-10-16
SANITY_API_WRITE_TOKEN=your-sanity-write-token
```

The Sanity project ID and dataset have fallback values in `sanity/env.ts`, but set them explicitly for your project. The API version is optional. `SANITY_API_WRITE_TOKEN` is needed to save contact form submissions. Create a Sanity API token with document write access and keep it server-side: do not add the `NEXT_PUBLIC_` prefix or commit the token.

## Sanity content

Manage published content in the Studio at `/studio`. The project defines schemas for products, categories, brands, health conditions, treatments, specialists, export sections and cards, articles, patient reviews, and contact submissions. The contact form creates a `contactSubmission` document when it is submitted successfully.

Schema definitions live in `sanity/schemaTypes/`, and GROQ queries live in `sanity/lib/queries.ts`.

## Useful commands

```bash
npm run dev     # Start the development server
npm run build   # Create a production build
npm run start   # Serve the production build
npm run lint    # Run ESLint
```

The site fonts are stored locally in `public/fonts/`, so the build does not need to fetch fonts from Google Fonts.
