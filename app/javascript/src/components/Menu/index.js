import React from "react";
import { NavLink } from "react-router-dom";
import { cartPath, contactsPath, productsPath } from "src/helpers/routes";
import Checkout from "./Checkout";

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to={productsPath()}>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={contactsPath()}>Contacts</NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-5" type="search" placeholder="Search" aria-label="Search" />
            <Checkout />
          </form>
        </div>
      </nav>
    )
  }
}

export default Menu;
