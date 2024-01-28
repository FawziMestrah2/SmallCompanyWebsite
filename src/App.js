import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.scss";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      //{ path: "/post/:id", element: <Single /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
