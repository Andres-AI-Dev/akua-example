# Akua - AI Services Platform

A modern SaaS landing page for AI-powered services, built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- 🚀 Built with Vite for lightning-fast development
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 🧩 Shadcn UI component library
- 📱 Fully responsive design
- ♿ Accessible (WCAG AA compliant)
- ✅ Comprehensive test coverage with Vitest (37 passing tests)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd akua-example
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel

#### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

#### Method 2: Git Integration (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel dashboard
3. Vercel will auto-detect Vite and configure build settings
4. Deploy automatically on every push to main branch

#### Build Settings (Auto-detected by Vercel)

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Manual Build

To build locally:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
src/
├── components/
│   ├── ui/              # Shadcn UI components
│   ├── layout/          # Layout components (Header, Footer)
│   ├── features/        # Feature-specific components
│   └── shared/          # Reusable components
├── pages/               # Route-level page components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── types/               # TypeScript type definitions
├── data/                # Static data
└── test/                # Test setup files
```

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Components:** Shadcn UI
- **Routing:** React Router v6
- **Testing:** Vitest, React Testing Library
- **Deployment:** Vercel

## Environment Variables

For local development, create a `.env.local` file based on `.env.example`.

For Vercel deployment, set environment variables in the Vercel dashboard under Settings > Environment Variables.

**Note:** Feature-1 does not require any environment variables.

## Testing

Run tests with:

```bash
npm run test
```

Current test coverage:
- 37 passing tests
- All major components tested
- Integration tests for landing page

## License

MIT
