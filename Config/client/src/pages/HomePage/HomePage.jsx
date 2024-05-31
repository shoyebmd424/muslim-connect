import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HomeComponent from "../../components/Home/Home";

const HomePage = () => {
  return (
    <div>
      <Navbar navData={navData} type="home" />
      <HomeComponent />
    </div>
  );
};

export default HomePage;
const navData = [
  { name: "Découvrir", path: "/découvrir" },
  // { name: "S'inscrire en tant que consultant", path: "tant-que-consultant" },
  // { name: "S'inscrire en tant qu'étudiant", path: "tant-quétudiant" },
  { name: "S'inscrire en tant que consultant", path: "/register" },
  { name: "S'inscrire en tant qu'étudiant", path: "/student-register" },
  { name: "Connectez-vous", path: "login" },
];
