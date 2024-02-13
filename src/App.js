import React from "react";
import About from "./components/About";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ErrorPage from "./components/ErrorPage";
import Contacts from "./components/Contacts";
import Home from "./components/Home";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contacts',
        element: <Contacts />
      }
    ]
  },

]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
