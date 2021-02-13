import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="menu"></div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/Menu">Locations</Link>
        </li>
        <li>
          <Link to="/Menu">Order</Link>
        </li>
        <li>
          <Link to="/Menu">About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
