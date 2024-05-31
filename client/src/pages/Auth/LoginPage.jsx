import React from "react";
import Login from "../../components/Auth/Login/Login";
import Navbar from "../../components/Navbar/Navbar";
import SubNav from "../../components/SubNav/SubNav";

const LoginPage = () => {
  return (
    <div>
      <Navbar navData={navData} type="auth" />
      <SubNav />
      <Login />
    </div>
  );
};

export default LoginPage;
const navData = [
  { name: "Découvrir", path: "/découvrir" },
  { name: "S'inscrire en tant que consultant", path: "/register" },
  { name: "S'inscrire en tant qu'étudiant", path: "/student-register" },
  { name: "Connectez-vous", path: "/login" },
];
