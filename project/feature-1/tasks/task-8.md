# Task: Vercel Deployment Setup

**1. Description**

Configure the project for deployment on Vercel, including creating the necessary configuration files, setting up build commands, and preparing deployment instructions. This task ensures the landing page can be successfully deployed to production and is accessible via a public URL. The deployment should be automated through Git integration.

**2. Parent Feature**

*   [project/feature-1/PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   `vercel.json` configuration file is created (if needed)
*   Build command successfully builds the project
*   Build output is optimized for production
*   Deployment instructions are documented
*   Environment variables are properly configured (if needed)
*   Project is ready for Vercel deployment
*   README includes deployment instructions
*   Vercel-specific optimizations are implemented

**4. Files to be Modified/Created**

*   `vercel.json` - Vercel configuration (optional, as Vite is auto-detected)
*   `README.md` - Deployment documentation
*   `.gitignore` - Ensure proper files are ignored
*   `package.json` - Verify build scripts are correct

**5. Dependencies**

*   Task 1: Project setup must be completed
*   Task 6: Landing page composition must be completed
*   Task 7: Responsive design and polish must be completed

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Verify build configuration**
    - File(s) involved: `package.json`, `vite.config.ts`
    - React specifics:
        - Ensure build script exists in package.json
        - Verify output directory is `dist`
    - Algorithm:
        - Check package.json scripts:
            ```json
            {
              "scripts": {
                "dev": "vite",
                "build": "tsc && vite build",
                "preview": "vite preview",
                "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
              }
            }
            ```
        - Test build locally: `npm run build`
        - Verify `dist/` folder is created
        - Test preview: `npm run preview`

2.  **Create vercel.json (optional)**
    - File(s) involved: `vercel.json`
    - React specifics:
        - Vercel auto-detects Vite projects, but can add config for customization
        - Configure SPA routing (redirect all routes to index.html)
    - Algorithm:
        - Create minimal vercel.json:
            ```json
            {
              "buildCommand": "npm run build",
              "outputDirectory": "dist",
              "devCommand": "npm run dev",
              "installCommand": "npm install",
              "framework": "vite",
              "rewrites": [
                {
                  "source": "/(.*)",
                  "destination": "/index.html"
                }
              ]
            }
            ```
        - Note: This file is optional as Vercel auto-detects Vite, but useful for explicit control

3.  **Update .gitignore**
    - File(s) involved: `.gitignore`
    - Algorithm:
        - Ensure the following are ignored:
            ```
            # dependencies
            node_modules/

            # production build
            dist/
            dist-ssr/

            # local env files
            .env
            .env.local
            .env.*.local

            # Vercel
            .vercel

            # OS files
            .DS_Store
            Thumbs.db

            # IDE
            .vscode/
            .idea/

            # Test coverage
            coverage/
            ```

4.  **Create comprehensive README.md**
    - File(s) involved: `README.md`
    - Content structure:
        ```markdown
        # Akua - AI Services Platform

        A modern SaaS landing page for AI-powered services, built with React, TypeScript, Tailwind CSS, and Vite.

        ## Features

        - 🚀 Built with Vite for lightning-fast development
        - ⚛️ React 18 with TypeScript
        - 🎨 Tailwind CSS for styling
        - 🧩 Shadcn UI component library
        - 📱 Fully responsive design
        - ♿ Accessible (WCAG AA compliant)
        - ✅ Comprehensive test coverage with Vitest

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

        ## License

        MIT
        ```

5.  **Optimize production build**
    - File(s) involved: `vite.config.ts`
    - React specifics:
        - Add build optimizations
    - Algorithm:
        - Update vite.config.ts with production optimizations:
            ```typescript
            import { defineConfig } from 'vite'
            import react from '@vitejs/plugin-react'
            import path from 'path'

            export default defineConfig({
              plugins: [react()],
              resolve: {
                alias: {
                  '@': path.resolve(__dirname, './src'),
                },
              },
              build: {
                outDir: 'dist',
                sourcemap: false, // Disable sourcemaps for smaller bundle
                rollupOptions: {
                  output: {
                    manualChunks: {
                      'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                    },
                  },
                },
              },
            })
            ```

6.  **Create deployment checklist**
    - File(s) involved: `DEPLOYMENT.md` (new file)
    - Content:
        ```markdown
        # Deployment Checklist

        ## Pre-Deployment

        - [ ] All tests pass (`npm run test`)
        - [ ] TypeScript compiles without errors (`tsc --noEmit`)
        - [ ] ESLint passes (`npm run lint`)
        - [ ] Production build succeeds (`npm run build`)
        - [ ] Preview build locally (`npm run preview`)
        - [ ] Lighthouse audit scores > 90 (Performance, Accessibility, Best Practices)

        ## Vercel Deployment

        - [ ] Create Vercel account (if not already done)
        - [ ] Connect GitHub repository to Vercel
        - [ ] Verify build settings in Vercel dashboard
        - [ ] Configure custom domain (optional)
        - [ ] Set up environment variables (if needed)
        - [ ] Enable Vercel Analytics (optional)

        ## Post-Deployment

        - [ ] Verify deployment is live and accessible
        - [ ] Test all sections on production URL
        - [ ] Check responsive design on real devices
        - [ ] Verify all links work
        - [ ] Check browser console for errors
        - [ ] Run Lighthouse audit on production URL
        - [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)

        ## Rollback Plan

        If issues are found after deployment:
        1. In Vercel dashboard, go to Deployments
        2. Find the previous working deployment
        3. Click "Promote to Production"
        ```

7.  **Test local production build**
    - File(s) involved: N/A (testing step)
    - Algorithm:
        - Run full build process:
            1. Clean previous builds: `rm -rf dist`
            2. Run TypeScript check: `tsc --noEmit`
            3. Run build: `npm run build`
            4. Check build output size
            5. Run preview: `npm run preview`
            6. Test preview in browser
            7. Verify all functionality works in production mode
            8. Check browser console for errors

8.  **Document environment variables (if needed)**
    - File(s) involved: `.env.example`, `README.md`
    - Algorithm:
        - Create `.env.example` template:
            ```
            # Future environment variables
            # VITE_API_URL=https://api.example.com
            # VITE_FIREBASE_API_KEY=your_api_key_here
            ```
        - Add to README:
            ```markdown
            ## Environment Variables

            For local development, create a `.env.local` file based on `.env.example`.

            For Vercel deployment, set environment variables in the Vercel dashboard under Settings > Environment Variables.

            **Note:** Feature-1 does not require any environment variables.
            ```

9.  **Verify package.json metadata**
    - File(s) involved: `package.json`
    - Algorithm:
        - Ensure package.json has proper metadata:
            ```json
            {
              "name": "akua-ai-services",
              "private": true,
              "version": "1.0.0",
              "type": "module",
              "description": "AI-powered services platform landing page",
              "author": "",
              "license": "MIT"
            }
            ```

**7. Test Plan**

*   **7.1. Build Tests:**
    *   Test case 1: Clean build succeeds
        - Delete `dist/` folder
        - Run `npm run build`
        - Assert build completes without errors
        - Assert `dist/` folder is created
        - Assert index.html exists in dist/
    *   Test case 2: TypeScript compilation passes
        - Run `tsc --noEmit`
        - Assert no TypeScript errors
    *   Test case 3: Production preview works
        - Run `npm run preview`
        - Open preview URL
        - Verify landing page loads correctly

*   **7.2. Configuration Tests:**
    *   Test case 1: vercel.json is valid JSON
        - Parse vercel.json
        - Assert no syntax errors
    *   Test case 2: .gitignore excludes build artifacts
        - Verify dist/ is in .gitignore
        - Verify node_modules/ is in .gitignore

*   **7.3. Documentation Tests:**
    *   Test case 1: README includes all required sections
        - Assert README has installation instructions
        - Assert README has deployment instructions
        - Assert README has project structure
    *   Test case 2: DEPLOYMENT.md checklist is comprehensive
        - Verify all pre-deployment steps are listed
        - Verify post-deployment steps are listed

*   **7.4. Production Build Quality:**
    *   Test case 1: Bundle size is reasonable
        - Check dist/ folder size
        - Ensure total size < 1MB (compressed)
    *   Test case 2: Assets are optimized
        - Verify JavaScript is minified
        - Verify CSS is minified
    *   Test case 3: Lighthouse audit on preview
        - Run Lighthouse on `npm run preview`
        - Assert Performance > 90
        - Assert Accessibility > 90
        - Assert Best Practices > 90

*   **7.5. Integration Tests (Manual):**
    *   Test case 1: Actual Vercel deployment
        - Deploy to Vercel (staging)
        - Verify deployment succeeds
        - Test deployed site
        - Verify all functionality works
    *   Test case 2: Vercel auto-detection
        - Verify Vercel correctly detects Vite framework
        - Verify build settings are correct
