# Agent Workflow: Validate

**Objective:** To evaluate the implemented code for quality, correctness, and adherence to requirements.

**Instructions:**

1.  **Retrieve the Completed Task and Code:** Access the pull request containing the implemented code for the task.

2.  **Automated Checks:**
    *   **Run Unit Tests:** Execute all unit tests and verify that they all pass. Report any failures.
    *   **Run Integration Tests:** Execute all integration tests. Report any failures and provide logs if possible.

3.  **Code Quality Rubric Assessment:**
    *   **Modularity:**
        *   **Excellent (5):** Code is highly modular, with clear separation of concerns. Components are small, focused, and easily reusable.
        *   **Good (4):** Code is mostly modular, but some components have multiple responsibilities.
        *   **Satisfactory (3):** Code has some modularity, but there are significant areas of tightly coupled code.
        *   **Needs Improvement (2):** Code is largely monolithic with poor separation of concerns.
        *   **Poor (1):** Code is a single, large block with no modularity.
    *   **Testability:**
        *   **Excellent (5):** Code is easily testable. Dependencies are injected, and functions are pure where possible. Test coverage is comprehensive.
        *   **Good (4):** Most of the code is testable, with good test coverage.
        *   **Satisfactory (3):** Some parts of the code are difficult to test. Test coverage is adequate but could be improved.
        *   **Needs Improvement (2):** Code is difficult to test due to hard-coded dependencies and side effects. Low test coverage.
        *   **Poor (1):** Code is untestable. No tests are provided.

4.  **Generate Human Testing Script:**
    *   Based on the `task.md`'s acceptance criteria and user stories from the `PRD.md`, generate a step-by-step testing script for a human tester.
    *   **Example Script:**
        *   **Test Case:** Verify user can successfully log in.
        *   **Prerequisites:** A valid user account exists.
        *   **Steps:**
            1.  Navigate to the login page.
            2.  Enter the correct username and password.
            3.  Click the "Login" button.
        *   **Expected Result:** The user is redirected to their dashboard.

5.  **Compile Evaluation Report:**
    *   Summarize the results of the automated tests.
    *   Provide the scores from the code quality rubric.
    *   Include the generated human testing script.
    *   Present this report to the human developer for final review and approval.
