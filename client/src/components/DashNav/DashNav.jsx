import React from "react";
import "./DashNav.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Nav_assets/logo.png";
import studentProfile from "../../assets/Nav_assets/studentProfile.jpeg";
import { FaAngleDown, FaRegBell, FaRegEnvelope } from "react-icons/fa6";
import { useGetAuthByIdQuery } from "../../ApiService/AuthSlice/AuthSlice";
import { useAuth } from "../../context/AuthContext";
import { server } from "../../ApiService/Axios";
const DashNav = ({ navData, type }) => {
  const [{ user }] = useAuth();
  const { data } = useGetAuthByIdQuery(user?._id);
  return (
    <>
      <nav className="c-navbar d-flex">
        <ul className="d-flex gap-5 flex-wrap m-0 justify-content-between">
          <NavLink
            to="/"
            className={(nav) =>
              nav.isActive
                ? "navbar-active text-decoration-none"
                : " text-decoration-none"
            }
          >
            <li className="logo">
              <img src={logo} alt="logo" className="h-100 w-100" />
            </li>
          </NavLink>
          {navData?.map((value, key) => (
            <>
              {value?.child ? (
                <li className="dash-child">
                  <span> {value?.name}</span>{" "}
                  <span className="drop-icon">
                    <FaAngleDown />
                  </span>
                  <ul className="childrens m-0 p-0 ">
                    {value?.child?.map((sbele, index) => (
                      <NavLink
                        key={index}
                        to={sbele.path}
                        className={(nav) =>
                          value.name !== "Connectez-vous" && nav.isActive
                            ? "navbar-active text-decoration-none"
                            : " text-decoration-none"
                        }
                      >
                        <li
                          className={
                            value.name === "Connectez-vous"
                              ? "connect-btn btn"
                              : "py-1"
                          }
                        >
                          {sbele?.name}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                </li>
              ) : (
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
              )}
            </>
          ))}
        </ul>
        <ul className="ms-auto d-flex align-items-center gap-4">
          <li>
            <span className="p-1  rounded border">
              <FaRegBell />{" "}
            </span>
          </li>
          <NavLink
            to={user?.role === "STUDENT" ? "/student/chat" : "/consultant/chat"}
            className={(nav) =>
              nav.isActive
                ? "navbar-active text-decoration-none"
                : " text-decoration-none"
            }
          >
            <li>
              <span className="p-1 rounded border">
                <FaRegEnvelope />
              </span>
            </li>
          </NavLink>
          <li className="d-flex align-items-center">
            <div
              className="m-auto"
              style={{ width: "40px", aspectRatio: "1/1" }}
            >
              <img
                className="h-100 w-100 rounded-circle"
                src={data?.profile ? server + data?.profile : studentProfile}
                alt="profile"
              />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DashNav;
