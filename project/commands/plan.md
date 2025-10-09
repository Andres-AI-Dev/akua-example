# Agent Workflow: Plan Tasks

**Objective:** To break down the approved PRD into specific, actionable tasks using the PRP framework.

**Instructions:**

1.  **Ingest the Approved PRD:** Read and fully comprehend the final version of the `PRD.md`.

2.  **Apply the PRP Framework:** For each functional requirement in the PRD, create a corresponding `task.md` file.

3.  **Populate the Task Template:**
    *   **Description:** Write a clear and precise description of the work to be done for this specific task.
    *   **Acceptance Criteria:** Copy the relevant acceptance criteria from the PRD or create more granular criteria specific to this task.
    *   **Files to be Modified/Created:** Analyze the existing codebase (or expected structure per PAD.md) to identify the files that will likely be affected by this task.
        *   Follow the component structure from PAD.md
        *   Consider if new hooks, services, or types need to be created
        *   Identify which Shadcn components need to be installed
    *   **Dependencies:** Determine if this task depends on the completion of any other tasks and list them.
        *   Consider component hierarchy dependencies
        *   Check if shared utilities or hooks are needed first
    *   **Low-Level Steps:** Break down the task into specific React/frontend steps:
        *   Component creation with TypeScript interfaces
        *   State management approach
        *   Styling with Tailwind classes
        *   Firebase integration points
    *   **Test Plan:**
        *   For each acceptance criterion, define a corresponding unit/component test case.
        *   If the task involves data processing, specify the need for isolated tests and suggest a structure for the required test data.
        *   If the task involves Firebase or external APIs, outline the necessary integration tests or mocks.

4.  **Identify User Verification Points:** Group related tasks together. After a logical group of tasks, insert a "User Verification" step in the overall plan.

5.  **Submit for Review:** Once all tasks are defined, present the complete task list and their dependencies to the human developer for review and approval.

