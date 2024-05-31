import React from "react";
import "./Navbar.css";
import { MdSearch } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Nav_assets/logo.png";
const Navbar = ({ navData, type }) => {
  return (
    <nav className="c-navbar">
      <ul className="d-flex gap-2 flex-wrap m-0 justify-content-between">
        <NavLink
          to="/"
          className={`${(nav) =>
            nav.isActive ? "navbar-active" : ""} text-decoration-none
          `}
        >
          <li className="logo">
            <img src={logo} alt="logo" className="h-100 w-100" />
          </li>
        </NavLink>
        {type === "auth" && (
          <li className="">
            <form action="" className="search-form border rounded">
              <input
                type="text"
                className="border-0"
                style={{ outline: "none" }}
                placeholder="Rechanrger un service"
              />
              <button className="btn btn-search">
                <MdSearch size={25} />
              </button>
            </form>
          </li>
        )}
        {navData?.map((value, key) => (
          <NavLink
            key={key}
            to={value.path}
            className={(nav) =>
              value.name !== "Connectez-vous" && nav.isActive
                ? "navbar-active text-decoration-none"
                : " text-decoration-none"
            }
          >
            <li
              className={
                value.name === "Connectez-vous" ? "connect-btn btn" : ""
              }
            >
              {value?.name}
            </li>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
