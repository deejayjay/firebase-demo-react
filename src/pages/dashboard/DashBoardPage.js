import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "components/appbar";

function DashboardPage(props) {
  // Use snippet shortcut ccom(Create Component)
  return (
    // Add your component here
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <AppBar />
    </>
  );
}

export default DashboardPage;
