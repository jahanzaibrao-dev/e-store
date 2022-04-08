import React from "react";
import { NavLink } from "react-router-dom";
import bootstrap from "bootstrap";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          E-Store
        </NavLink>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/cart"}>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
