import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

import {
  faHome,
  faCompass,
  faBell,
  faEnvelope,
  faBookmark,
  faClipboardList,
  faUser,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [
    { name: "home", icon: faHome },
    { name: "explore", icon: faCompass },
    { name: "notifications", icon: faBell },
    { name: "messages", icon: faEnvelope },
    { name: "bookmarks", icon: faBookmark },
    { name: "lists", icon: faClipboardList },
    { name: "profile", icon: faUser },
    { name: "more", icon: faEllipsisH },
  ];
  return (
    <div className="list-group">
      {links.map((link) => (
        <Link
          to={`/tuiter/${link.name}`}
          className={`list-group-item text-capitalize pl-2 ${
            active === link.name ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={link.icon} style={{ marginRight: "10px" }} />
          <span className="d-none d-xl-inline-block">{link.name}</span>
          {/* {link.name} */}
        </Link>
      ))}
      {/* {!currentUser && (
        <Link className="list-group" to="/tuiter/login">
          {" "}
          Login{" "}
        </Link>
      )}
      {!currentUser && (
        <Link className="list-group" to="/tuiter/register">
          Register
        </Link>
      )}
      {currentUser && (
        <Link className="list-group" to="/tuiter/profile">
          {" "}
          Profile{" "}
        </Link>
      )} */}
    </div>
  );
};
export default NavigationSidebar;
