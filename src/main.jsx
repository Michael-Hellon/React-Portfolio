// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// these are the pages that are in the pages folder
import ErrorPage from './components/ErrorPage';
import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
// import Resume from './components/Resume.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />
      },
      {
        path: 'Portfolio',
        element: <Portfolio />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
      {
        path: 'About',
        element: <About />
      },
      // {
      //   path: 'Resume',
      //   element: <Resume />
      // },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
