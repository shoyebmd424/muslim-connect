import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Spin } from "antd";

export function StudentProtect() {
  // const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  return auth?.token && auth.user.role === "STUDENT" ? (
    <Outlet />
  ) : (
    <Redirect path="login" />
  );
}
export function ConsultantProtect() {
  // const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  return auth.token && auth.user.role === "CONSULTANT" ? (
    <Outlet />
  ) : (
    <Redirect path="login" />
  );
}
export function AdminProtect() {
  // const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  return auth?.token && auth.user.role === "ADMIN" ? (
    <Outlet />
  ) : (
    <Redirect path="login" />
  );
}

export const Redirect = ({ path }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <>
      <div
        className="protect-redirect d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <img style={{ width: "20%" }} src="/image/auth.jpg" alt="" />
        <h3>Sorry! You are not authenticated persons</h3>
        <h1 className="Text-center">redirecting to you in {count} second </h1>
        {/* <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> */}
        <Spin className="mt-4" tip="Loading" size="large">
          {/* {content} */}
        </Spin>
      </div>
    </>
  );
};
