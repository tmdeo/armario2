import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <div class="inner">
        <div class="header">
          <div class="header_left">
            <h1 class="header_logo">
              <Link to="/">ARMARIO</Link>
            </h1>
            <ul>
              <li>
                <Link to="./review">REVIEW</Link>
              </li>
              <li>
                <Link to="./service">SERVICE</Link>
              </li>
              <li>
                <Link to="./event">EVENT</Link>
              </li>
            </ul>
          </div>
          <div class="header_right">
            <span class="store">
              <Link to="./store">STORE</Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
