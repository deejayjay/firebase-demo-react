import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(props) {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <header>
        <h1>Page Not Found</h1>
      </header>
    </>
  );
}

export default PageNotFound;
