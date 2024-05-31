import React from "react";
import Register from "../../components/Auth/Register/Register";
import Navbar from "../../components/Navbar/Navbar";
import SubNav from "../../components/SubNav/SubNav";

const RegisterPage = () => {
  return (
    <div>
      <Navbar navData={navData} type="auth" />
      <SubNav />
      <Register />
    </div>
  );
};

export default RegisterPage;

const navData = [
  { name: "Découvrir", path: "/découvrir" },
  // consultant register
  { name: "S'inscrire en tant que consultant", path: "/register" },
  // student register
  { name: "S'inscrire en tant qu'étudiant", path: "/student-register" },
  { name: "Connectez-vous", path: "/login" },
];
