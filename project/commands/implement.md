# Agent Workflow: Implement

**Objective:** To write the code and associated tests for an approved task.

**Instructions:**

1.  **Select an Approved Task:** Choose a task from the approved task list that has no outstanding dependencies.

2.  **Understand the Task:** Thoroughly read the `task.md` file, including the description, acceptance criteria, and test plan.

3.  **Create Tests First (TDD):**
    *   Based on the test plan, create the unit, isolated, and/or integration tests.
    *   Initially, these tests should fail as the feature is not yet implemented.

4.  **Implement the Code:**
    *   Write the necessary code to fulfill the task's requirements.
    *   Adhere to the project's coding standards and conventions (see PAD.md).
    *   Focus on writing clean, modular, and well-documented code.
    *   **For React components:**
        *   Use functional components with hooks
        *   Define TypeScript interfaces for props
        *   Extract complex logic into custom hooks
        *   Keep components small and focused (single responsibility)
    *   **For styling:**
        *   Use Tailwind CSS utility classes
        *   Leverage Shadcn components where appropriate
        *   Ensure responsive design (mobile-first approach)
    *   **For Firebase integration:**
        *   Use Firebase SDK v9+ (modular syntax)
        *   Handle loading and error states
        *   Implement proper security rules consideration

5.  **Run Tests and Validate:**
    *   Execute the newly created tests.
    *   Continuously run the tests as you code, ensuring that your changes do not break existing functionality.
    *   Continue to refine the code until all tests for the current task pass.

6.  **Submit for Code Review:** Once the implementation is complete and all tests are passing, submit a pull request for human review.
