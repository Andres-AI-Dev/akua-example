---
description: Run the plan phase to break down a PRD into tasks
---

You are in the **PLAN PHASE** of the AI-assisted development workflow.

## Context Files to Read:
1. Read `project/PAD.md` for project architecture and folder structure
2. Read the approved PRD (user should specify which feature)
3. Read `project/templates/task_template.md` for task structure
4. Read `project/commands/plan.md` for detailed planning instructions

## Your Task:
Break down the approved PRD into specific, actionable tasks.

## Instructions:
1. Identify which feature PRD to plan (ask user if not specified)
2. Read and fully comprehend the PRD
3. Follow ALL instructions from `project/commands/plan.md`
4. For each functional requirement, create a task file: `project/feature-X/tasks/task-Y.md`
5. Populate each task using the `project/templates/task_template.md`
6. Include React-specific details:
   - Components to create
   - Hooks needed
   - Shadcn components to use
   - Tailwind styling approach
   - TypeScript interfaces
7. Define clear dependencies between tasks
8. Identify user verification points
9. Present the complete task list to the user for approval

## Output:
- Multiple task files in `project/feature-X/tasks/`
- Each task follows the template structure
- Clear task dependencies
- Comprehensive test plans for each task
