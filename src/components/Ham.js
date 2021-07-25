import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class App extends React.Component {
  componentDidMount() {
    $(".hamburger-button").on("click", function (event) {
      event.preventDefault();
      $(this).toggleClass("active");
      $(".overlay").toggleClass("visible");
    });
  }
  render() {
    return (
      <>
        <Link to="#" class="hamburger-button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Link>

        <div class="overlay">
          <nav class="menu">
            <ul>
              <li>
                <Link to="/">ARMARIO</Link>
              </li>
              <li>
                <Link to="./review">REVIEW</Link>
              </li>
              <li>
                <Link to="./service">SERVICE</Link>
              </li>
              <li>
                <Link to="./event">EVENT</Link>
              </li>
              <li>
                <Link to="./store">STORE</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default App;
