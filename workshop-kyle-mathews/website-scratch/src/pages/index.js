import React from "react";
import Link from "gatsby-link";
import "./index.css";

export default () => {
  return (
    <div className="index">
      <h1>
        Hello <b>SF</b> World
      </h1>
      <Link to="/my-second-page">
        My second page
      </Link>
      <Link to="/typography-example">
        Typography example
      </Link>
    </div>
  )
}

