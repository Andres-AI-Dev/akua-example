# Agent Workflow: Design

**Objective:** To generate a comprehensive Product Requirements Document (PRD) for the new feature based on the provided user request.

**Instructions:**

1.  **Analyze the User Request:** Carefully read and understand the user's initial request. Identify the core problem, the desired outcome, and any key constraints.

2.  **Utilize the PRD Template:** Use the `PRD.md` template as the foundation for the new document.

3.  **Fill in the PRD Sections:**
    *   **Overview:** Summarize the feature's purpose and scope. If the user request is ambiguous, make reasonable assumptions and state them clearly in the "In Scope" and "Out of Scope" sections.
    *   **User Stories:** Formulate clear and concise user stories based on the user's perspective.
    *   **Functional Requirements:** Detail the specific functionalities required to fulfill the user stories.
    *   **Non-Functional Requirements:** Propose standard non-functional requirements for performance, security, and usability.
    *   **Metrics of Success & Acceptance Criteria:** Define measurable success metrics and specific, testable acceptance criteria.
    *   **Technical Decisions:** Propose a high-level technical approach. Consider the existing codebase and suggest appropriate technologies.

4.  **Consider the Tech Stack:** Always refer to the PAD.md for the current tech stack and architectural decisions. For this project:
    *   **Frontend:** React + Vite + Tailwind CSS + Shadcn UI
    *   **Backend:** Firebase (Firestore, Auth, Functions, Storage)
    *   **Deployment:** Vercel
    *   Ensure technical decisions align with the existing stack
    *   Identify which Shadcn components can be leveraged
    *   Consider Firebase service limits and best practices
    *   Think about Vercel deployment requirements (build commands, env vars)

5.  **Request Human Review:** Once the initial draft of the PRD is complete, notify the human developer for review and feedback.
