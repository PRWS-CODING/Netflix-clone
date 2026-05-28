# Netflix Clone: High-Performance Video Streaming Interface

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase&logoColor=ffca28)](https://firebase.google.com/)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A high-fidelity Netflix clone focusing on seamless user experience, secure authentication, and real-time data management. This project demonstrates modern front-end engineering principles, including component-based architecture, asynchronous state handling, and cloud-native backend integration.

## 📽️ Live Demo

_[Link to your hosted site, e.g., Firebase Hosting or Vercel]_

## 🚀 Features

- **Robust Authentication**: Implemented secure Auth flows (Sign Up/In/Out) using Firebase Authentication.
- **Real-time Data Sync**: Leveraging Cloud Firestore for persistent user profiles and data management.
- **State-Driven UI**: Dynamic content rendering with loading states and custom-engineered Netflix spinners.
- **UX Focused**: Integrated `react-toastify` for non-blocking, real-time feedback on user actions.
- **Responsive Engineering**: Fully responsive design implemented with modular CSS to mirror the high-fidelity Netflix aesthetic across all device types.

## 🛠️ Technologies Used

- **Core**: React 18, JavaScript (ES6+), CSS3.
- **Backend-as-a-Service (BaaS)**: Firebase (Auth, Firestore).
- **Build Tools**: Vite (for optimized development and production builds).
- **Notifications**: React-Toastify.

## 🧠 Engineering Highlights

### Security & Best Practices

- **Environment Variable Protection**: All sensitive Firebase credentials (API keys, project IDs) are managed via `.env` files and strictly excluded from version control to prevent security vulnerabilities.
- **Clean Code**: Asynchronous operations are handled using `async/await` patterns in a centralized `firebase.js` utility, promoting reusability and separation of concerns.

### User Experience

- **Error Handling**: Implemented a custom error-parsing algorithm in the auth service to transform technical Firebase error codes into human-readable notifications.
- **Optimistic UI**: Designed smooth transitions between Sign-in and Sign-up states to minimize friction.

## 📦 Local Installation & Setup

To get a local copy up and running, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   cd netflix-clone
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Environment Configuration**:
   Create a `.env` file in the root directory and add your Firebase credentials (prefixed with `VITE_` for compatibility with the build tool):

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   The application will be served at `http://localhost:5173`.

## 🏗️ Project Architecture

```text
src/
├── assets/          # Static assets (Logos, Spinners)
├── pages/           # Page-level components (Login, Browse)
├── firebase.js      # Centralized Firebase service & Auth logic
└── App.jsx          # Main application routing and context
```


---

**Note**: This project is for portfolio purposes and demonstrates full-stack integration with React and Firebase.

**Author**: [Paul Rosenbaum]  
**LinkedIn**: [https://www.linkedin.com/in/paul-rosenbaum-2b068336b/]  
**Email**: [prwscodingwsc@gmail.com]
