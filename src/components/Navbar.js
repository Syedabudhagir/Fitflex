import React from "react";
import { Link } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <FaDumbbell style={{ marginRight: "10px", color: "#f4a261" }} /> FitFlex
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/exercises/bodyPart">Exercises</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;