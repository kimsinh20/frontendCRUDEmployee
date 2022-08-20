import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [search, setsearch] = useState("");
  const searchHandle = (e) => {
       e.preventDefault();
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/home" className="link text-bg-info text-decoration-none">
        <h2>Employee manager</h2>
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="link nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="link nav-link">
              add
            </Link>
          </li>
        </ul>
        <div class="input-group m-5 ">
          <div class="form-outline">
            <input
              type="text"
              className="form-control"
              placeholder="search"
              aria-label="search"
              onChange={(e) => setsearch(e.target.value)}
              value={search}
            />
          </div>
          <button type="button" class="btn btn-primary" onClick={(e)=> searchHandle(e)}>
            search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
