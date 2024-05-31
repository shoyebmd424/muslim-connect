import React from "react";
import DashNav from "../../components/DashNav/DashNav";
import { Outlet } from "react-router-dom";

const StudentPage = () => {
  return (
    <div>
      <DashNav navData={navData} type="student" />
      <Outlet />
      {/* <Student /> */}
    </div>
  );
};

export default StudentPage;
const navData = [
  { name: "Dashboard", path: "/student" },
  {
    name: "Learning",
    path: "learning",
    // child: [
    //   { name: "loyalty Program", path: "/student/learning" },
    //   { name: "Subscription", path: "/subscription" },
    //   { name: "Sessions", path: "/sessions" },
    // ],
  },
  { name: "loyalty Program", path: "loyalty" },
  { name: "Subscription", path: "subscription" },
  { name: "Sessions", path: "sessions" },
];
