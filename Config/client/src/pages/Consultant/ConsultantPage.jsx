import React from "react";
import DashNav from "../../components/DashNav/DashNav";
import { Outlet } from "react-router-dom";

const ConsultantPage = () => {
  return (
    <div>
      <DashNav navData={navData} type="consultant" />
      <Outlet />
    </div>
  );
};

export default ConsultantPage;
const navData = [
  { name: "Dashboard", path: "/consultant" },
  { name: "Gigs", path: "gigs" },
  { name: "Level Overview", path: "level" },
  { name: "Subscription", path: "subscription" },
  { name: "Sessions", path: "sessions" },
];
