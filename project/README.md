# Akua AI Services Platform - Development Workflow

This directory contains the context engineering framework for AI-assisted development of the Akua platform.

## 📁 Directory Structure

```
project/
├── PAD.md                    # Project Architecture Document (source of truth)
├── templates/                # Reusable templates (evolve with project)
│   ├── PRD_template.md      # Product Requirements Document template
│   └── task_template.md     # Task file template
├── commands/                 # Workflow phase instructions (evolve with project)
│   ├── design.md            # Design phase instructions
│   ├── plan.md              # Planning phase instructions
│   ├── implement.md         # Implementation phase instructions
│   └── validate.md          # Validation phase instructions
├── feature-1/               # Feature 1 iteration
│   ├── PRD.md              # Feature-specific PRD
│   └── tasks/              # Generated tasks for this feature
│       ├── task-1.md
│       ├── task-2.md
│       └── ...
├── feature-2/               # Future features...
└── README.md               # This file
```

## 🚀 Quick Start

### Using Slash Commands

In Claude Code, you can run these slash commands to execute the workflow:

#### Individual Phase Commands:
- `/design` - Run the design phase to create a PRD
- `/plan` - Run the planning phase to break PRD into tasks
- `/implement` - Run the implementation phase for a specific task
- `/validate` - Run the validation phase to assess code quality

#### Complete Workflow:
- `/start-feature` - Run the entire workflow from design to validation

### Example Usage:

```bash
# Start a new feature
/start-feature

# Or run phases individually:
/design           # Creates PRD
/plan             # Creates tasks from PRD
/implement        # Implements a specific task
/validate         # Validates the implementation
```

## 📋 Workflow Phases

### 1. Design Phase (`/design`)
**Goal:** Create a comprehensive PRD

**Inputs:**
- User feature request
- PAD.md (tech stack and architecture)
- PRD_template.md

**Outputs:**
- `project/feature-X/PRD.md`

**Process:**
1. Understand the user's feature request
2. Fill in the PRD template
3. Ensure technical decisions align with PAD.md
4. Request human review and approval

---

### 2. Plan Phase (`/plan`)
**Goal:** Break down PRD into actionable tasks

**Inputs:**
- Approved PRD
- PAD.md
- task_template.md

**Outputs:**
- `project/feature-X/tasks/task-Y.md` (multiple files)

**Process:**
1. Read and comprehend the PRD
2. Create a task for each functional requirement
3. Define dependencies between tasks
4. Specify React components, hooks, styling, and tests
5. Request human review and approval

---

### 3. Implement Phase (`/implement`)
**Goal:** Write code and tests for a task

**Inputs:**
- Approved task file
- PAD.md (coding standards)
- Parent PRD (context)

**Outputs:**
- Production code (components, hooks, services, etc.)
- Tests (unit, component, integration)
- TypeScript interfaces

**Process:**
1. Select a task with no outstanding dependencies
2. Create tests FIRST (TDD)
3. Implement the code following React + TypeScript best practices
4. Run tests until all pass
5. Request human code review

---

### 4. Validate Phase (`/validate`)
**Goal:** Assess code quality and correctness

**Inputs:**
- Implemented code
- Task file
- PRD (acceptance criteria)

**Outputs:**
- Evaluation report
- Code quality scores
- Human testing script

**Process:**
1. Run all automated tests
2. Assess code quality (modularity, testability)
3. Check adherence to standards
4. Generate step-by-step human testing script
5. Present report to human developer

---

## 🎯 Current Project: Akua AI Services Platform

**Tech Stack:**
- Frontend: React + Vite + TypeScript
- Styling: Tailwind CSS + Shadcn UI
- Backend: Firebase (Firestore, Auth, Functions)
- Deployment: Vercel
- Testing: Vitest + React Testing Library

**See `PAD.md` for complete architecture details.**

---

## 📝 Feature-1: Landing Page & Foundation

**Status:** PRD Complete, Ready for Planning

**Scope:**
- React + Vite project setup
- Landing page with Hero, Features, Pricing, Footer
- Responsive design (mobile-first)
- Tailwind + Shadcn UI integration
- Vercel deployment

**Next Steps:**
1. Run `/plan` to create tasks for feature-1
2. Review and approve the task breakdown
3. Run `/implement` for each task
4. Run `/validate` after implementation
5. Deploy to Vercel

---

## 🔄 Iterative Process

After completing feature-1:
1. **Reflect:** What worked? What didn't?
2. **Improve:** Update PAD.md, templates, and commands based on learnings
3. **Document:** Note changes and reasons
4. **Repeat:** Move to feature-2 with improved workflow

**Key Principle:** The templates and commands EVOLVE with each feature iteration.

---

## 📚 Best Practices

### For PRDs:
- Be specific and unambiguous
- Include clear acceptance criteria
- Align technical decisions with PAD.md
- Consider both functional and non-functional requirements

### For Tasks:
- Make them small and focused (ideally 1-3 hours of work)
- Include detailed low-level steps with React specifics
- Define comprehensive test plans
- Specify exact files to create/modify

### For Implementation:
- Always do TDD (tests first)
- Follow React hooks patterns
- Use TypeScript for type safety
- Keep components small and reusable
- Follow the component structure from PAD.md

### For Validation:
- Run all automated tests
- Check code quality systematically
- Generate human testing scripts for manual QA
- Document any issues or improvements needed

---

## 🛠️ Customization

As you work through features, you should:
- Update `PAD.md` with architectural changes
- Refine `templates/` to better fit your workflow
- Improve `commands/` with lessons learned
- Add new templates or commands as needed

**Remember:** Each feature directory (feature-1, feature-2, etc.) is a snapshot of that iteration. Don't update old feature docs; instead, improve the templates for future features.

---

## ❓ Open Questions

- Should we maintain a changelog of template/command improvements?
- How to handle cross-feature refactoring?
- Best practices for testing Firebase integrations locally?

---

## 📖 References

- [Assignment Page](https://utrgv-cs-6312.github.io/202610-6370/week5/ai-coding.html)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
