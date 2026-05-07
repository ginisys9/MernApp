import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        <div className="d-flex align-items-center gap-4">
          <Link
            className="navbar-brand fw-bold fs-4 text-warning m-0"
            to="/"
          >
            Hacker News
          </Link>
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
          {user && (
            <Link
              className="nav-link text-white"
              to="/bookmarks"
            >
              Bookmarks
            </Link>
          )}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >
          <div className="d-flex align-items-center gap-2">

            {user ? (
              <>
                <button
                  className="btn btn-danger btn-sm px-3"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  className="btn btn-outline-light btn-sm px-3"
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className="btn btn-warning btn-sm px-3 text-dark fw-semibold"
                  to="/register"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;