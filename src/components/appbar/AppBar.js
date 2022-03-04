import React from "react";

import { IoEllipsisVertical, IoMailOutline, IoNotificationsOutline } from "react-icons/io5";

import { AppBarStyles, AppBarItem, AppBarItemGroup, AppBarItems } from "../appbar/styles";

function AppBar(props) {
  return (
    // Add your component here
    <AppBarStyles>
      <AppBarItems>
        <AppBarItem>branding</AppBarItem>
        <AppBarItemGroup>
          <span>
            <IoMailOutline />
          </span>
          <span>
            <IoNotificationsOutline />
          </span>
          <span>
            <img src="https://avatars.dicebear.com/api/initials/deepak%20joy%20jose.svg?b=%23ff8040&r=50&size=32" alt="Deepak Avatar" />
          </span>
          <span>
            <IoEllipsisVertical />
          </span>
        </AppBarItemGroup>
      </AppBarItems>
    </AppBarStyles>
  );
}

export default AppBar;
