---
description: Complete autonomous workflow for feature-1 (Landing Page & Foundation)
---

You are running the **FULLY AUTONOMOUS FEATURE-1 IMPLEMENTATION WORKFLOW**.

**IMPORTANT: You will execute ALL phases without stopping for approval. Complete the entire feature from start to finish.**

Feature-1: Landing Page & Project Foundation for Akua AI Services Platform

## Context Files to Read:
1. `project/PAD.md` - Project architecture and tech stack
2. `project/feature-1/PRD.md` - Feature-1 PRD (already completed)
3. `project/templates/task_template.md` - Task template
4. `project/commands/plan.md` - Planning instructions
5. `project/commands/implement.md` - Implementation instructions
6. `project/commands/validate.md` - Validation instructions

## What This Command Does:

This command will **AUTONOMOUSLY** complete the entire feature-1 implementation:
- Plan all tasks
- Implement ALL code and tests
- Validate quality
- Set up deployment
- Report final status

**You have full authority to make all technical decisions and proceed through all phases.**

## Workflow Steps:

### PHASE 1: PLAN 📋 (Execute Automatically)
1. Read `project/feature-1/PRD.md` thoroughly
2. Follow instructions from `project/commands/plan.md`
3. Break down the PRD into specific tasks
4. Create task files in `project/feature-1/tasks/`:
   - `task-1.md` - Project setup (Vite + React + TypeScript + Tailwind + Shadcn)
   - `task-2.md` - Hero section component
   - `task-3.md` - Features section component
   - `task-4.md` - Pricing section component
   - `task-5.md` - Footer component
   - `task-6.md` - Landing page composition & routing
   - `task-7.md` - Responsive design & polish
   - `task-8.md` - Vercel deployment setup
5. For each task, use the `project/templates/task_template.md` structure
6. Include React-specific details:
   - Components to create with TypeScript interfaces
   - Hooks needed (useState, useEffect, custom hooks)
   - Shadcn components to use
   - Tailwind styling approach
   - Test plans (Vitest + React Testing Library)
7. **Immediately proceed to implementation phase (no approval needed)**

### PHASE 2: IMPLEMENT 💻 (Execute Automatically)
8. For each task (in order of dependencies):
   - Read `project/commands/implement.md` for detailed instructions
   - **TDD Approach:**
     - Create tests FIRST based on the task's test plan
     - Tests should initially fail
   - **Write ALL the code:**
     - Initialize the entire Vite + React + TypeScript project
     - Install and configure Tailwind CSS
     - Install and configure Shadcn UI components
     - Create ALL components with TypeScript interfaces
     - Implement all sections: Hero, Features, Pricing, Footer
     - Set up React Router
     - Create landing page composition
     - Add responsive styling with Tailwind
     - Follow React + TypeScript best practices from PAD.md
     - Use functional components with hooks
     - Leverage Shadcn UI components
     - Keep components small and focused
   - **Run tests and validate:**
     - Ensure all tests pass
     - Check TypeScript compilation
     - Run the dev server to verify it works
   - **Continue to next task automatically**

### PHASE 3: VALIDATE ✅
9. After all tasks are implemented:
   - Read `project/commands/validate.md` for detailed instructions
   - **Run automated checks:**
     - Execute all unit tests
     - Execute all component tests
     - Run TypeScript type checking (`tsc --noEmit`)
     - Check for linting errors
     - Run the dev server and verify it starts
   - **Code quality assessment:**
     - Evaluate modularity (1-5 score)
     - Evaluate testability (1-5 score)
     - Check React best practices adherence
     - Verify Tailwind/Shadcn usage
     - Assess TypeScript coverage
   - **Generate human testing script:**
     - Based on acceptance criteria from PRD
     - Step-by-step manual testing instructions
     - Visual checks (responsive design, UI polish)
     - Browser compatibility checks
   - **Compile evaluation report:**
     - Test results summary
     - Code quality scores
     - Human testing script
     - Recommendations for deployment

### PHASE 4: BROWSER TESTING WITH PLAYWRIGHT 🌐 (Execute Automatically)
10. After validation passes, test in real browser:
    - **Start dev server in background:**
      - Use Bash tool with `run_in_background: true`
      - Run `npm run dev` in the project directory
      - Wait 5 seconds for server to start
    - **Open Playwright MCP and navigate:**
      - Use `mcp__playwright__browser_navigate` to `http://localhost:5173` (or appropriate Vite port)
      - Use `mcp__playwright__browser_snapshot` to capture page state
    - **Test all sections:**
      - Verify Hero section is visible and renders correctly
      - Scroll and verify Features section displays all services
      - Scroll and verify Pricing section shows all 3 tiers
      - Scroll and verify Footer is present
      - Check for proper responsive layout
    - **Check for errors:**
      - Use `mcp__playwright__browser_console_messages` with `onlyErrors: true`
      - Verify NO JavaScript errors in console
      - If errors found, fix them before proceeding
    - **Test responsiveness:**
      - Use `mcp__playwright__browser_resize` to test mobile (375x667)
      - Take screenshot with `mcp__playwright__browser_take_screenshot`
      - Resize to tablet (768x1024)
      - Take screenshot
      - Resize to desktop (1440x900)
      - Take screenshot
      - Verify no layout breaks at any size
    - **Verify interactions:**
      - Test CTA button clicks work (even if they don't navigate yet)
      - Ensure all hover states work
      - Check that all Shadcn components render properly
    - **Close browser and stop dev server:**
      - Use `mcp__playwright__browser_close`
      - Kill the background dev server process
    - **Only proceed to deployment if ALL browser tests pass**

### PHASE 5: DEPLOYMENT 🚀 (Execute Automatically)
11. After browser testing passes:
    - Ensure Vercel configuration is correct
    - Verify build command works (`npm run build`)
    - Provide instructions for Vercel deployment
    - Generate deployment checklist

## Important Notes:

- **AUTONOMOUS EXECUTION:** Execute all phases without stopping for approval
- **Use TodoWrite** to track progress through all tasks
- **Don't skip TDD** - tests must be written first for each component
- **Follow PAD.md** for all technical decisions
- **Refer to feature-1/PRD.md** for acceptance criteria
- **Complete ALL tasks** - write all code, all tests, all configuration
- **Make decisions independently** - you have full authority to implement best practices
- **Only report to user when FULLY COMPLETE**

## Feature-1 Scope Reminder:

**In Scope:**
- React + Vite + TypeScript + Tailwind + Shadcn setup
- Landing page: Hero, Features, Pricing, Footer
- Fully responsive design
- Vercel deployment configuration

**Out of Scope:**
- Authentication
- Firebase backend
- Actual AI functionality
- Payment processing

## Tech Stack:
- **Frontend:** React 18+ with TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS v3
- **Components:** Shadcn UI
- **Routing:** React Router v6
- **Testing:** Vitest + React Testing Library
- **Deployment:** Vercel

## Success Criteria:

By the end of this workflow, you should have:
- ✅ Complete task breakdown in `project/feature-1/tasks/`
- ✅ All components implemented with TypeScript
- ✅ Comprehensive tests (all passing)
- ✅ Fully responsive landing page
- ✅ Browser tested with Playwright MCP (no console errors)
- ✅ Screenshots at mobile, tablet, desktop sizes
- ✅ Ready for Vercel deployment
- ✅ Validation report with quality scores
- ✅ Human testing script for manual QA

---

## Execution Instructions:

**YOU MUST:**
1. Create all 8 task files in `project/feature-1/tasks/`
2. Initialize the complete Vite + React + TypeScript project in `src/`
3. Write ALL components, pages, hooks, types, and utilities
4. Write comprehensive tests for everything
5. Configure Tailwind, Shadcn, React Router, Vite, Vercel
6. Ensure everything builds and runs successfully
7. Generate final validation report
8. **Run dev server in background and test with Playwright MCP**
9. Verify NO console errors and proper rendering at all viewport sizes
10. Only proceed to deployment after browser testing passes

**DO NOT:**
- Ask for approval between phases
- Stop and wait for user input (except if critical errors occur)
- Skip any tasks or components
- Leave placeholders or TODOs

**COMPLETE EVERYTHING, THEN REPORT FINAL STATUS.**

---

**Executing feature-1 autonomous workflow now...**
