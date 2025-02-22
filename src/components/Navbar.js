import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Profilebutton from "./Profilebutton";


const Navbar = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fa-solid fa-pen-nib"></i> Cloud-Writer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>{isAuthenticated && (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light mx-1" type="submit">
                Search
              </button>
            </form>
          )}
          {!localStorage.getItem('token') ? (
            <>
              <Link className="btn btn-outline-light mx-1" to="/login">
                Login
              </Link>
              <Link className="btn btn-outline-light mx-1" to="/signup">
                Signup
              </Link>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light mx-1" onClick={handleLogout}>
                Logout
              </button>
              <Profilebutton />
            </>

          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;



