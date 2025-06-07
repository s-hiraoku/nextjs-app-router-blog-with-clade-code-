# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- **Development**: `pnpm dev` (starts development server on http://localhost:3000)
- **Build**: `pnpm build` (builds the production application)
- **Start**: `pnpm start` (starts the production server)
- **Lint**: `pnpm lint` (runs ESLint with Next.js configuration)

## Architecture

This is a Next.js 15.3.3 application using the App Router architecture with TypeScript and Tailwind CSS.

### Key Technologies

- **Framework**: Next.js 15.3.3 with App Router
- **Runtime**: React 19
- **Styling**: Tailwind CSS v4
- **Type Safety**: TypeScript with strict mode
- **Linting**: ESLint with Next.js config
- **Fonts**: Geist and Geist Mono from Google Fonts

### Project Structure

- `app/` - App Router directory containing pages and layouts
- `app/layout.tsx` - Root layout with font configuration and metadata
- `app/page.tsx` - Home page component
- `app/globals.css` - Global Tailwind CSS styles
- `public/` - Static assets (SVG icons)

### TypeScript Configuration

- Path alias: `@components/*` maps to root directory
- Strict mode enabled
- Next.js plugin configured for optimal development experience

### Styling Approach

- Uses Tailwind CSS with CSS custom properties for font families
- Dark mode support via Tailwind's dark: prefix
- Responsive design with sm: breakpoints

When adding new features, follow the established patterns of using TypeScript interfaces, Tailwind classes, and Next.js App Router conventions.
`
