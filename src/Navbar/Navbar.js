import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "lightgrey",
        padding: 20,
      }}
    >
      <Link className="LinksStyle" to="/">
        Home
      </Link>
      <Link to="/gallary">Gallary</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navbar;
