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
    { name: "home", icon: faHome, currentUser: currentUser },
    { name: "explore", icon: faCompass, currentUser: currentUser },
    { name: "notifications", icon: faBell, currentUser: currentUser },
    { name: "messages", icon: faEnvelope, currentUser: currentUser },
    { name: "bookmarks", icon: faBookmark, currentUser: currentUser },
    { name: "lists", icon: faClipboardList, currentUser: currentUser },
    { name: "profile", icon: faUser, currentUser: currentUser },
    { name: "more", icon: faEllipsisH, currentUser: currentUser },
  ];
  return (
    <div>
      {currentUser === undefined || currentUser === null ? (
        <h1> Please login before you continue! </h1>
      ) : (
        <div className="list-group">
          {links.map((link) => (
            <Link
              to={`/tuiter/${link.name}`}
              className={`list-group-item text-capitalize pl-2 ${
                active === link.name ? "active" : ""
              }`}
            >
              <FontAwesomeIcon
                icon={link.icon}
                style={{ marginRight: "10px" }}
              />
              <span className="d-none d-xl-inline-block">{link.name}</span>
              {/* {link.name} */}
            </Link>
          ))}
          {!currentUser && (
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
          )}
        </div>
      )}
    </div>
  );
};
export default NavigationSidebar;
