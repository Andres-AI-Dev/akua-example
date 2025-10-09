---
description: Run the validate phase to assess implemented code
---

You are in the **VALIDATE PHASE** of the AI-assisted development workflow.

## Context Files to Read:
1. Read `project/PAD.md` for quality standards
2. Read the task file that was implemented
3. Read the parent PRD for acceptance criteria
4. Read `project/commands/validate.md` for detailed validation instructions

## Your Task:
Evaluate the implemented code for quality, correctness, and adherence to requirements.

## Instructions:
1. Identify which task to validate (ask user if not specified)
2. Follow ALL instructions from `project/commands/validate.md`
3. **Run automated checks:**
   - Execute all unit tests
   - Execute all component/integration tests
   - Run TypeScript type checking
   - Check for linting errors
4. **Code quality assessment:**
   - Evaluate modularity (score 1-5)
   - Evaluate testability (score 1-5)
   - Check adherence to React best practices
   - Verify Tailwind/Shadcn usage
   - Assess TypeScript usage
5. **Generate human testing script:**
   - Based on acceptance criteria
   - Step-by-step instructions
   - Expected outcomes
6. **Compile evaluation report:**
   - Automated test results
   - Code quality scores
   - Human testing script
   - Recommendations for improvement

## Output:
- Complete evaluation report
- Test results summary
- Code quality assessment with scores
- Human testing script for manual verification
- Recommendations (if any issues found)
