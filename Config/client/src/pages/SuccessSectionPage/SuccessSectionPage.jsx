import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SubNav from "../../components/SubNav/SubNav";
import { ThirdPortion } from "../../components/Home/Home";

function SuccessSectionPage() {
  return (
    <div>
      <Navbar navData={navData} type="success" />
      <div style={{ marginBottom: "8%" }}>
        {" "}
        {/* Corrected marginBottom */}
        <SubNav />
      </div>
      <ThirdPortion />
    </div>
  );
}

export default SuccessSectionPage;

const navData = [
  { name: "Découvrir", path: "/découvrir" },
  { name: "S'inscrire en tant que consultant", path: "/register" },
  { name: "S'inscrire en tant qu'étudiant", path: "/student-register" },
  { name: "Connectez-vous", path: "/login" },
];
