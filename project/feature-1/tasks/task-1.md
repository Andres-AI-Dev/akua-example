# Task: Project Setup - Vite + React + TypeScript + Tailwind + Shadcn

**1. Description**

Initialize the complete project foundation using Vite as the build tool, React 18+ with TypeScript for the UI framework, Tailwind CSS for styling, and Shadcn UI for the component library. This includes setting up the proper folder structure, configuring all build tools, installing dependencies, and ensuring the development environment is ready for feature development.

**2. Parent Feature**

*   [project/feature-1/PRD.md](../PRD.md)

**3. Acceptance Criteria**

*   `npm run dev` starts the development server without errors
*   TypeScript compilation works without errors
*   Tailwind CSS is properly configured and working
*   Shadcn UI is installed and configured with the required components
*   Project folder structure follows PAD.md conventions
*   ESLint and Prettier are configured
*   Vitest and React Testing Library are set up for testing
*   All configuration files are properly set up (vite.config.ts, tailwind.config.js, tsconfig.json)

**4. Files to be Modified/Created**

*   `package.json` - Project dependencies and scripts
*   `vite.config.ts` - Vite configuration with path aliases
*   `tsconfig.json` - TypeScript configuration
*   `tailwind.config.js` - Tailwind configuration with custom theme
*   `postcss.config.js` - PostCSS configuration for Tailwind
*   `src/main.tsx` - Application entry point
*   `src/App.tsx` - Root application component
*   `src/index.css` - Global styles with Tailwind directives
*   `src/lib/utils.ts` - Utility functions (cn helper for Shadcn)
*   `components.json` - Shadcn UI configuration
*   `.eslintrc.cjs` - ESLint configuration
*   `.prettierrc` - Prettier configuration
*   `vitest.config.ts` - Vitest test configuration
*   `src/test/setup.ts` - Test setup file
*   Directory structure: `src/components/ui/`, `src/components/layout/`, `src/components/features/`, `src/pages/`, `src/hooks/`, `src/types/`, `src/lib/`, `src/data/`

**5. Dependencies**

*   None - this is the foundation task

**6. Low-Level Steps (Ordered, information-dense)**

1.  **Initialize Vite + React + TypeScript project**
    - File(s) involved: Root directory
    - Command: `npm create vite@latest . -- --template react-ts`
    - Accept defaults and install dependencies
    - Verify `npm run dev` starts successfully

2.  **Install and configure Tailwind CSS**
    - File(s) involved: `tailwind.config.js`, `postcss.config.js`, `src/index.css`
    - Commands:
        ```bash
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
        ```
    - Update `tailwind.config.js`:
        ```js
        export default {
          content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
          theme: {
            extend: {
              colors: {
                primary: '#3B82F6',
                accent: '#8B5CF6',
              },
            },
          },
          plugins: [],
        }
        ```
    - Update `src/index.css`:
        ```css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```

3.  **Install and configure Shadcn UI**
    - File(s) involved: `components.json`, `src/lib/utils.ts`
    - Commands:
        ```bash
        npm install -D @types/node
        npx shadcn@latest init
        ```
    - Configuration choices:
        - Style: Default
        - Base color: Slate
        - CSS variables: Yes
    - Install required components:
        ```bash
        npx shadcn@latest add button card badge
        ```
    - Verify `src/components/ui/` directory is created with components

4.  **Configure path aliases**
    - File(s) involved: `vite.config.ts`, `tsconfig.json`
    - Update `vite.config.ts`:
        ```ts
        import path from 'path'
        import react from '@vitejs/plugin-react'
        import { defineConfig } from 'vite'

        export default defineConfig({
          plugins: [react()],
          resolve: {
            alias: {
              '@': path.resolve(__dirname, './src'),
            },
          },
        })
        ```
    - Update `tsconfig.json` paths:
        ```json
        {
          "compilerOptions": {
            "baseUrl": ".",
            "paths": {
              "@/*": ["./src/*"]
            }
          }
        }
        ```

5.  **Set up project folder structure**
    - Create directories:
        ```bash
        mkdir -p src/components/{ui,layout,features,shared}
        mkdir -p src/pages
        mkdir -p src/hooks
        mkdir -p src/types
        mkdir -p src/lib
        mkdir -p src/data
        mkdir -p src/test
        ```

6.  **Install and configure testing tools**
    - File(s) involved: `vitest.config.ts`, `src/test/setup.ts`, `package.json`
    - Install dependencies:
        ```bash
        npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
        ```
    - Create `vitest.config.ts`:
        ```ts
        import { defineConfig } from 'vitest/config'
        import react from '@vitejs/plugin-react'
        import path from 'path'

        export default defineConfig({
          plugins: [react()],
          test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './src/test/setup.ts',
          },
          resolve: {
            alias: {
              '@': path.resolve(__dirname, './src'),
            },
          },
        })
        ```
    - Create `src/test/setup.ts`:
        ```ts
        import '@testing-library/jest-dom'
        ```
    - Add test script to `package.json`:
        ```json
        "scripts": {
          "test": "vitest",
          "test:ui": "vitest --ui",
          "coverage": "vitest --coverage"
        }
        ```

7.  **Configure ESLint and Prettier**
    - File(s) involved: `.eslintrc.cjs`, `.prettierrc`
    - Install dependencies:
        ```bash
        npm install -D prettier eslint-config-prettier
        ```
    - Update `.eslintrc.cjs` to extend prettier:
        ```js
        module.exports = {
          extends: [
            // ... existing config
            'prettier'
          ],
        }
        ```
    - Create `.prettierrc`:
        ```json
        {
          "semi": false,
          "singleQuote": true,
          "tabWidth": 2,
          "trailingComma": "es5"
        }
        ```

8.  **Install React Router**
    - File(s) involved: `package.json`
    - Command:
        ```bash
        npm install react-router-dom
        npm install -D @types/react-router-dom
        ```

9.  **Install Lucide React for icons**
    - File(s) involved: `package.json`
    - Command:
        ```bash
        npm install lucide-react
        ```

10. **Create basic App structure**
    - File(s) involved: `src/App.tsx`, `src/main.tsx`
    - Update `src/main.tsx`:
        ```tsx
        import React from 'react'
        import ReactDOM from 'react-dom/client'
        import App from './App'
        import './index.css'

        ReactDOM.createRoot(document.getElementById('root')!).render(
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        )
        ```
    - Create basic `src/App.tsx`:
        ```tsx
        import { BrowserRouter as Router } from 'react-router-dom'

        function App() {
          return (
            <Router>
              <div className="min-h-screen bg-background">
                <h1 className="text-4xl font-bold text-primary">Akua AI Services</h1>
              </div>
            </Router>
          )
        }

        export default App
        ```

11. **Verify setup**
    - Run `npm run dev` and verify the app loads
    - Run `npm run build` and verify TypeScript compilation
    - Run `npm run test` and verify Vitest is configured (no tests yet)
    - Check that Tailwind classes are applied

**7. Test Plan**

*   **7.1. Unit Tests:**
    *   Test case 1: Verify `cn` utility function correctly merges class names
        - File: `src/lib/utils.test.ts`
        - Test that `cn('text-red-500', 'text-blue-500')` returns the correct merged classes
    *   Tools: Vitest

*   **7.2. Component Tests:**
    *   Test case 1: Verify App component renders without crashing
        - File: `src/App.test.tsx`
        - Test that `<App />` renders successfully
    *   Test case 2: Verify Shadcn Button component works
        - File: `src/components/ui/button.test.tsx`
        - Test that Button renders with correct variant classes

*   **7.3. Build Tests:**
    *   Test case 1: `npm run dev` starts without errors
    *   Test case 2: `npm run build` completes successfully
    *   Test case 3: `npm run test` runs without configuration errors
    *   Test case 4: TypeScript compilation (`tsc --noEmit`) passes

*   **7.4. Manual Testing:**
    *   Verify Tailwind classes render correctly in browser
    *   Verify hot module replacement works during development
    *   Check that path aliases (`@/`) resolve correctly
    *   Confirm Shadcn components render with proper styling
