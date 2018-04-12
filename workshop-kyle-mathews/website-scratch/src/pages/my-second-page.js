import React from "react";
import Link from "gatsby-link";
import "./my-second-page.css";

export default () => {
  return (
    <div className="my-second-page">
      <h1>
        Second page
      </h1>
      <Link to="/">
        Back home
      </Link>
    </div>
  )
}