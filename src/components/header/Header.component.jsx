import React from "react";
import "./Header.styles.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <ul>
        <li>
          <NavLink className="nav-link" to="/home">
            <span className="fa fa-home fa-lg"></span> Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/users">
            <span className="fa fa-home fa-lg"></span> Users
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Header;
