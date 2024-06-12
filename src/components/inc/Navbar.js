//shortcut rsf
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div class="navbar-dark bg-dark shadow">
      <div class="container">
        <div className="row">
          <div className="col-md-12">
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <Link to="/" class="navbar-brand text-white">
                  Portfolio
                </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                      <Link to="/" class="nav-link active text-white">
                        Project
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/About" class="nav-link active text-white">
                        About
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/Contact" class="nav-link active text-white">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
