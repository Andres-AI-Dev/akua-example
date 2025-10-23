# Akua AI Services Platform - CSCI 6370 Project Submission

**Student:** Andres Gonzales
**Course:** CSCI 6370 Applied LLM - Fall 2025
**Assignment:** Week 5-7 AI Coding Project

---

## 📚 START HERE - For Grading

This project demonstrates the use of **AI agents** and **context engineering** to build a production SaaS application through three feature iterations.

### 🎯 What to Review

| Artifact | Location | What It Shows |
|----------|----------|---------------|
| **AI Agent Workflow** | `.claude/commands/` | Slash commands for design, plan, implement, validate phases |
| **Context Engineering** | `project/` | PRDs, PAD, tasks, templates - the "memory" for AI collaboration |
| **Process Summary** | `submission/PROCESS_SUMMARY.md` | How I used AI agents and evolved workflow across 3 features |
| **Application Code** | `src/` | Production React/TypeScript code |
| **Live Demo** | [Vercel Deployment](https://akua-example-git-feature-3-andres-gonzales-projects.vercel.app) | Working application |

---

## 🤖 AI-Assisted Development Workflow

### Context Engineering Framework

Located in `project/` directory:

- **`PAD.md`** - Project Architecture Document (source of truth for tech stack, patterns)
- **`feature-1/`** - Landing Page & Foundation (PRD + 8 tasks)
- **`feature-2/`** - Multi-Page Interactive Website (PRD + 10 tasks)
- **`feature-3/`** - Firebase Authentication & Backend (PRD + 12 tasks)
- **`templates/`** - Evolving PRD and task templates
- **`commands/`** - Backup of workflow phase instructions

### AI Agent Commands

Located in `.claude/commands/` directory:

**Individual Phases:**
- `design.md` - Generate PRD from feature request
- `plan.md` - Break PRD into actionable tasks
- `implement.md` - TDD implementation (tests first)
- `validate.md` - Quality assessment and testing

**Complete Workflows:**
- `start-feature-1.md` - Full workflow for Feature 1 (8.6KB)
- `start-feature-2.md` - Full workflow for Feature 2 (18KB)
- `start-feature-3.md` - Full workflow for Feature 3 (30KB)

**Pattern:** Each workflow command grew larger and more detailed as I learned to specify requirements better.

---

## 📈 Three-Feature Evolution

### Feature 1: Landing Page & Foundation (Week 1)
**Built:** React + Vite + TypeScript setup, landing page, responsive design, Vercel deployment
**AI Usage:** Established basic slash commands and component patterns
**Artifacts:** `project/feature-1/` - 12KB PRD, 8 tasks
**Code:** ~1,500 lines, 37 passing tests

### Feature 2: Multi-Page Interactive Website (Week 2)
**Built:** 5 new pages, React Router, Framer Motion animations, dark mode, interactive charts
**AI Usage:** Refined PRD template, used iterative design (AI suggested modern design trends)
**Artifacts:** `project/feature-2/` - 29KB PRD (much more detailed), 10 tasks
**Code:** +2,500 lines, multi-page SPA with routing

### Feature 3: Firebase Authentication & Backend (Week 3)
**Built:** Firebase Auth (email/password + Google OAuth), protected routes, Firestore, security rules
**AI Usage:** Commands evolved to include Firebase patterns, automated deployment via Playwright MCP
**Artifacts:** `project/feature-3/` - 42KB PRD (most comprehensive), 12 tasks
**Code:** +3,000 lines, full auth system, production deployment

**Total:** ~7,000 lines production code, 50+ test files, 40+ components

---

## 🏗️ Project Structure

```
akua-example/
├── README.md                          # This file (grading guide)
├── .claude/commands/                  # AI workflow slash commands ⭐
├── project/                           # Context engineering artifacts ⭐
│   ├── PAD.md                        # Architecture document
│   ├── README.md                     # Workflow documentation
│   ├── feature-1/ (PRD + tasks)      # Feature 1 iteration
│   ├── feature-2/ (PRD + tasks)      # Feature 2 iteration
│   ├── feature-3/ (PRD + tasks)      # Feature 3 iteration
│   ├── templates/                    # Evolving templates
│   └── commands/                     # Backup commands
├── submission/                        # Grading-specific docs ⭐
│   ├── PROCESS_SUMMARY.md           # How I used AI agents
│   └── SUBMISSION_NOTE.md           # Additional context
├── docs/                             # Feature reports
│   ├── BROWSER_TEST_REPORT.md
│   ├── DEPLOYMENT.md
│   ├── FEATURE-2-REPORT.md
│   ├── FINAL_REPORT.md
│   └── VALIDATION_REPORT.md
├── src/                              # Application code ⭐
│   ├── components/                  # React components
│   ├── pages/                       # Route pages
│   ├── config/                      # Firebase config
│   ├── contexts/                    # Auth context
│   ├── services/                    # API services
│   └── types/                       # TypeScript types
└── tests/                            # Test files
```

⭐ = Most important for grading

---

## 🔑 Key Takeaways

### What I Demonstrated

1. **Systematic AI Workflow:** Design → Plan → Implement → Validate phases
2. **Context Engineering:** PAD.md + PRDs + tasks = AI "memory" across sessions
3. **Iterative Improvement:** Each feature taught better prompt engineering
4. **Automation:** Slash commands made workflow repeatable
5. **TDD with AI:** AI-written tests improved code quality
6. **Production Deployment:** Live app with Firebase backend

### Context Engineering Techniques

- **Incremental Context Building:** Each feature builds on previous learnings
- **Structured Task Decomposition:** Large features → PRD → Tasks → Code
- **Reusable Patterns:** Component structure and coding standards enforced
- **Automated Workflows:** Slash commands reduce cognitive load

See `submission/PROCESS_SUMMARY.md` for detailed analysis.

---

## 🚀 Technical Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, Shadcn UI
- **Backend:** Firebase (Firestore, Auth)
- **Routing:** React Router v6
- **Animation:** Framer Motion
- **Charts:** Recharts
- **Testing:** Vitest, React Testing Library
- **Deployment:** Vercel
- **AI Tools:** Claude Code with custom slash commands

---

## 🎮 Running the Application

### Prerequisites
- Node.js 18+
- Firebase account (credentials in `.env`)

### Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → Opens at http://localhost:5173

# Run tests
npm run test

# Build for production
npm run build
```

### Live Demo

**Production URL:** https://akua-example-git-feature-3-andres-gonzales-projects.vercel.app

Features to test:
- Browse landing page and all navigation pages
- Sign up with email/password
- Login with Google OAuth
- Access protected Dashboard, Profile, Settings
- Test dark mode toggle
- Try password reset flow

---

## 📋 Assignment Requirements Met

✅ **Three-week coding project** - Features 1, 2, 3 completed
✅ **AI-assisted workflow** - Systematic design → plan → implement → validate
✅ **Context engineering** - PAD, PRDs, tasks, templates
✅ **Iterative improvement** - Templates and commands evolved
✅ **Agent usage** - Custom slash commands in `.claude/commands/`
✅ **Production deployment** - Live on Vercel with Firebase
✅ **Code quality** - TypeScript strict mode, 50+ tests, TDD approach
✅ **Documentation** - Comprehensive process summary and reports

---

## 📧 Questions?

For questions about this submission, please refer to:
- `submission/PROCESS_SUMMARY.md` - Detailed process explanation
- `submission/SUBMISSION_NOTE.md` - Additional grading context
- `project/README.md` - Workflow documentation

---

**Built with Claude Code using systematic AI-assisted development workflow.**
