import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div
        id="nav-bar"
        className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top"
        data-spy="affix"
        data-offset-top="197"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h2>ONLINE COURSES</h2>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="courses">
                  COURSES
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
