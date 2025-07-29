# KOKOS Namibia Website (React Edition)

Welcome to the **React-powered rewrite** of the KOKOS Namibia AI Learning Platform website! Originally built with Vue 3, this single-page application (SPA) has been reimagined using **React**, **Vite**, and **React Router** to deliver a fast, scalable, and creative frontend experience. Paired with a custom **Node.js backend** (with a future **Spring Boot** rewrite planned), this platform now handles contact form submissions, user authentication, push notifications, task assignment, and more, all tailored for educational excellence in Namibia. Get ready to explore a vibrant, extensible app designed to empower learners and educators!

## Why the Rewrite?

We’ve transitioned from Vue 3 to **React** to leverage its flexible component model and vast ecosystem, enabling creative feature expansions like interactive dashboards and real-time notifications. **Vite** ensures lightning-fast development and optimized builds, while **React Router** introduces URL-driven navigation for a seamless SPA experience. The new **Node.js backend** replaces Formspree, centralizing all functionality—contact forms, user login, push notifications, and task assignment—making KOKOS Namibia a robust platform for education.

##  Features

- **React with Vite**: Blazing-fast development and optimized production builds.
- **React Router**: Smooth, URL-based navigation for a modern SPA.
- **Custom Backend Integration**: Node.js backend (future Spring Boot) handles:
  - **Contact Form**: Send emails via a custom API endpoint.
  - **User Authentication**: Secure login and user management.
  - **Push Notifications**: Real-time updates for team members.
  - **Task Assignment**: Streamlined task management for educators and admins.
- **KOKOS Namibia Branding**: Vibrant, Namibia-inspired design for an engaging user experience.
- **Extensible Architecture**: Ready for advanced features like animations (Framer Motion), state management (Redux/Zustand), or real-time WebSocket integrations.
- **Education-Optimized**: Lightweight and accessible for deployment in Namibian schools.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/brianronock/kokos.git
   cd kokos
2. **Install Frontend Dependencies:**
   ```bash
   npm install
3. **Set Up the Node.js Backend:** 
- Navigate to the backend directory:
    ```bash
    cd kokos-backend
    npm install
- Configure environment variables in kokos-backend/.env (e.g., email service, JWT secret, database):
  ```env
  EMAIL_USER=your-email@gmail.com
  EMAIL_PASS=your-app-password
  JWT_SECRET=your-secret-key
- Start the backend:
    ```bash
    node index.js
4. **Run the Frontend Development Server:**
    ```bash
    cd ..
    npm run dev

- Open http://localhost:5173 to explore the app.
5. **Build for Production:**
    ```bash
    npm run build
    npm run preview

## How to Contribute to KOKOS Namibia #
 
We’re thrilled to welcome contributions to make KOKOS Namibia a game-changer for education! Whether you’re enhancing the React frontend, adding backend endpoints, or designing new features, here’s how to dive in:
- **Fork the Repository:**
  - Visit https://github.com/brianronock/kokos.git.
  - Click the “Fork” button to create your own copy.

- **Clone Your Fork:**
    ```bash
  git clone https://github.com/YOUR-USERNAME/kokos.git
  cd kokos
- **Create a Feature Branch:**
  ```bash
  git checkout -b feature/your-awesome-feature
Use descriptive names like ***feature/task-assignment-api*** or ***fix/login-ui.***

- **Make Your Changes:**
  - Frontend: Edit React components in src/, leveraging React Router or libraries like Material-UI.

  - Backend: Add Node.js endpoints in kokos-backend/ for features like notifications or task assignment.
  - Test locally:
    ```bash
    npm install
    npm run dev  # Frontend
    cd kokos-backend && node index.js  # Backend
Visit http://localhost:5173 to see your changes.

- **Commit Your Changes:**
  ```bash
  git add .
  git commit -m "Add task assignment endpoint to Node.js backend"
Write clear, concise commit messages.
- **Push to Your Fork:**
  ```bash
  git push origin feature/your-awesome-feature
- **Open a Pull Request (PR):**
  - Go to your fork on GitHub and click “Compare & pull request.”
  - Describe your changes (e.g., “Implemented push notifications with WebSocket”).
  - Set the base branch to brianronock/kokos:main.
  - Submit the PR.

- **Review & Merge:**
  - Maintainers (Prof. Rhoda or Brian) will review your PR.
  - Be open to feedback and make requested changes.
  - Once approved, your contribution will power up KOKOS Namibia!

## Contribution Tips
- **Frontend Ideas:**
Add interactive UIs with Tailwind CSS, animations with Framer Motion, or state management with Redux.
- **Backend Ideas:** Enhance the Node.js backend with endpoints for email, authentication, or task workflows.
- **Keep PRs Focused:** One feature or fix per PR for clarity.
- **Ask Questions:** Open an issue to discuss ideas before coding.
- **Clean Up:** Delete your branch after merging to keep your fork tidy.
- **Have Fun:** Your creativity shapes the future of education in Namibia!

## What’s Next?
The React + Node.js stack unlocks exciting possibilities:
- **Dynamic Navigation:** Use nested routes or protected routes for authenticated users.
- **Real-Time Features:** Implement push notifications with WebSocket or Firebase.
- **Task Management:** Build a dashboard for task assignment and tracking.
- **Spring Boot Transition:** Prepare for a future backend rewrite with consistent API endpoints.
-- **Accessibility:** Optimize for diverse learners in Namibia.

## Thank You!
Your contributions fuel the KOKOS Namibia AI Learning Platform, empowering educators and learners across Namibia. Let’s build an innovative, inclusive future together!