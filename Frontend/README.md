# ShopSphere Frontend Notes

## Frontend Tech Stack

- React
- Vite
- JavaScript
- React Router DOM
- Axios
- Redux Toolkit
- Formik
- Yup

## Frontend Setup

The frontend was created using Vite with React and JavaScript.

```bash
npm create vite@latest .
npm install
npm run dev
Frontend
│
├── src
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── routes
│   ├── services
│   ├── store
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── node_modules
Folder Responsibilities
pages

Contains complete application pages.

Examples:

Login.jsx
Register.jsx
Dashboard.jsx
Products.jsx
Cart.jsx
Profile.jsx
components

Contains reusable UI components.

Examples:

Navbar
Button
ProductCard
Input
Loader
layouts

Contains shared page layouts.

Examples:

MainLayout
AuthLayout
AdminLayout
routes

Contains routing and protected-route related logic.

services

Contains functions used to communicate with backend APIs.

Example:

authService
productService
cartService
store

Contains global application state.

Later we will use Redux Toolkit here.

hooks

Contains reusable custom React hooks.

assets

Contains images, icons, and other static resources.

React Component Naming

React component names should start with a capital letter.

Correct:

const Register = () => {
  return <div>Register</div>;
};

Incorrect:

const register = () => {
  return <div>Register</div>;
};

Examples:

Register.jsx → Register
Login.jsx → Login
Dashboard.jsx → Dashboard
React Router

React Router is used to navigate between pages without refreshing the browser.

Installed using:

npm install react-router-dom

Planned routes:

/login
/register
/dashboard
/products
/cart
/profile

The routing flow will be:

BrowserRouter
      ↓
     App
      ↓
    Routes
      ↓
     Route
      ↓
Page Component

Example:

/login → Login.jsx
/register → Register.jsx
Frontend Authentication Flow

Later the frontend authentication flow will be:

User enters email/password
        ↓
React Login Form
        ↓
Axios
        ↓
POST /api/auth/login
        ↓
Node.js Backend
        ↓
JWT stored in HttpOnly cookie
        ↓
Frontend receives user information
        ↓
Dashboard

Because the JWT is stored in an HttpOnly cookie, React will not directly access the JWT.

The browser will automatically send the cookie with authenticated requests.

Example:

GET /api/auth/profile
GET /api/cart
GET /api/orders