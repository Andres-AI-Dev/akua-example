---
description: Run the implement phase to code a specific task
---

You are in the **IMPLEMENT PHASE** of the AI-assisted development workflow.

## Context Files to Read:
1. Read `project/PAD.md` for coding standards and architecture
2. Read the specific task file (user should specify which task)
3. Read `project/commands/implement.md` for detailed implementation instructions
4. Read the parent PRD for overall feature context

## Your Task:
Implement the code and tests for a specific approved task.

## Instructions:
1. Identify which task to implement (ask user if not specified: feature-X/tasks/task-Y.md)
2. Thoroughly read the task file
3. Follow ALL instructions from `project/commands/implement.md`
4. **Test-Driven Development:**
   - Create tests FIRST based on the test plan
   - Tests should initially fail
5. **Implement the code:**
   - Follow React best practices from PAD.md
   - Use functional components with hooks
   - Define TypeScript interfaces
   - Use Tailwind CSS for styling
   - Leverage Shadcn components
   - Keep components small and focused
6. **Run tests and validate:**
   - Ensure all tests pass
   - Check for TypeScript errors
   - Verify responsive design
7. Ask user for code review before considering complete

## Output:
- Production code implementing the task requirements
- Comprehensive tests (unit, component, integration as needed)
- TypeScript types/interfaces
- All tests passing
- Clean, documented code following project conventions
