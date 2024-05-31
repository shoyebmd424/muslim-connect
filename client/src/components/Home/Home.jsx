import React from "react";
import "./Home.css";
import searchIcon from "../../assets/Home_assets/search-normal.png";
import rightImg from "../../assets/Home_assets/RightImg.png";
import rightImg2 from "../../assets/Home_assets/RightImg2.png";
import leftImg from "../../assets/Home_assets/leftImg.png";
import user from "../../assets/Home_assets/user.png";
import arrow from "../../assets/Home_assets/arrow.png";
import group from "../../assets/Home_assets/typcn_group.png";
import enclyco from "../../assets/Home_assets/mdi_encyclopedia.png";
import iconw from "../../assets/Home_assets/icon-park-solid_women.png";
import islam from "../../assets/Home_assets/maki_religious-muslim.png";
import arrowRight from "../../assets/Home_assets/arrow-right.png";
import SuccessText from "./SuccessText/SuccessText";
import PriceCard from "../PriceCard/PriceCard";
import ArrowSvg from "../../assets/PriceCard/ArrowSvg";


export const ThirdPortion = ({ rightImg }) => {
  const successData = [
      { header: "Une expertise religieuse diversifiée", body: "Accès à un large éventail d’experts religieux spécialisés dans différents domaines." },
      { header: "Convivialité et simplicité", body: "Interface conviviale et intuitive pour une expérience utilisateur optimale." },
      { header: "Sécurité et confidentialité", body: "Des protocoles de sécurité renforcés pour assurer la confidentialité des échanges entre utilisateurs et consultants" },
      { header: "Fidélité et engagement", body: "Programme tidente engageant et engagement continu à améliorer l’expérience client" },
  ];

  return (
      <div className="inside-container" style={{ marginTop: "2%" }}>
          <div className="left-container" style={{ padding: "4% 4% 4% 7%" }}>
              <h2>Expertise, convivialité, sécurité, satisfaction garantie.</h2>
              <div style={{ marginTop: "2%" }}>
                  {successData.map((item, index) => (
                      <SuccessText key={index} header={item.header} body={item.body} />
                  ))}
              </div>
          </div>
          <div className="right-container" style={{ padding: "4% 7% 4% 4%" }}>
              <img src={rightImg2} alt="Search Icon" style={{ width: "30rem" }} />
          </div>
      </div>
  );
};


const HomeComponent = () => {
  const list = [
    "Consult with the best Consultants",
    "One free month Subscription after verification",
    "Benefit from 10% commissions on transactions instead of 20%",
    "Benefit from priority assistance and personalized help from our team. ",
    "Save $20.70 on yearly plan",
  ];

  return (
    <div className="Home-content">
      <div className="inside-container">
        <div className="left-container">
          <h1>
            Trouvez <span style={{ color: "#7C5399" }}>immédiatement</span>{" "}
            l’expertise dont vous avez besoin
          </h1>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              // value={searchTerm}
              // onChange={handleInputChange}
            />
            <div className="search-icon">
              <img src={searchIcon} alt="Search Icon" />
            </div>
          </div>
          <div className="cbtn-container">
            <h5 style={{ color: "#7C5399" }}>Populaire:</h5>
            <div className="buttons">
              <button class="cbtn">Islamic Finance</button>
              <button class="cbtn">Patrimoine</button>
              <button class="cbtn">Zakaat Al Maal</button>
              <button class="cbtn">Arabic Course</button>
              {/* <button class="cbtn">Button 17</button>
                            <button class="cbtn">Button 17</button>
                            <button class="cbtn">Button 17</button> */}
            </div>
          </div>
        </div>
        <div className="right-container">
          <img src={rightImg} alt="Search Icon" />
        </div>
      </div>
      <div className="inside-container second">
        <h1>Services populaires</h1>
        <h1>sur notre plateforme</h1>
        <div className="cbtn-content">
          <div className="cbtn-card">
            <img src={user} alt="Img" style={{ width: "1.3rem" }}></img>
            <p>Apprentissage religieux individuel</p>
            <img src={arrow} alt="Img" style={{ width: "1.2rem" }}></img>
          </div>
          <div className="cbtn-card">
            <img src={group} alt="Img"></img>
            <p>Apprentissage religieux collectif</p>
            <img src={arrow} alt="Img" style={{ width: "1.2rem" }}></img>
          </div>
          <div className="cbtn-card">
            <img src={enclyco} alt="Img"></img>
            <p>Encyclopedia</p>
            <img src={arrow} alt="Img" style={{ width: "1.2rem" }}></img>
          </div>
          <div className="cbtn-card">
            <img src={iconw} alt="Img"></img>
            <p>Entre femmes</p>
            <img src={arrow} alt="Img" style={{ width: "1.2rem" }}></img>
          </div>
          <div className="cbtn-card">
            <img src={islam} alt="Img"></img>
            <p>Thème spécifique de la consultation</p>
            <img src={arrow} alt="Img" style={{ width: "1.2rem" }}></img>
          </div>
        </div>
      </div>
      {/* Third portion */}
      {/* <div className="inside-container" style={{ marginTop: "2%" }}>
        <div className="left-container" style={{ padding: "4% 4% 4% 7%" }}>
          <h2>Expertise, convivialité, sécurité, satisfaction garantie.</h2>
          <div style={{ marginTop: "2%" }}>
            {successData.map((item, index) => (
              <SuccessText key={index} header={item.header} body={item.body} />
            ))}
          </div>
        </div>
        <div className="right-container" style={{ padding: "4% 7% 4% 4%" }}>
          <img src={rightImg2} alt="Search Icon" style={{ width: "30rem" }} />
        </div>
      </div> */}
      <ThirdPortion />
      {/* Fourth portion */}
      <div className="inside-container">
        <div className="left-container" style={{ padding: "4% 7% 4% 4%" }}>
          <img src={leftImg} alt="img" />
        </div>
        <div className="right-container" style={{ padding: "6% 7% 4% 4%" }}>
          <h1>
            Schedule Your <span style={{ color: "#7C5399" }}>Personal </span>
            Consultation
          </h1>
          <p>
            Embark on a journey of personal growth and enlightenment by
            scheduling a one-on-one consultation with your dedicated consultant.
            Whether you seek guidance on matters of faith, family, or finance,
            our platform offers you the opportunity to connect directly with
            trusted experts who are committed to supporting you along your
            spiritual path.{" "}
          </p>
          <div className="custome-btn">
            <p>Schedule Consultation</p>
            <img src={arrowRight} alt="Img" style={{ width: "1.4rem" }}></img>
          </div>
        </div>
      </div>

      {/* fifth Portion  */}

      <div style={{ marginTop: "2%", paddingBottom: "2%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontWeight: "600", fontSize: "45px" }}>
            Unlock <span style={{ color: "Purple" }}>Premium Features</span>{" "}
            with{" "}
          </h1>
          <h1 style={{ fontWeight: "600", fontSize: "45px" }}>
            {" "}
            MuslimConnect Subscription
          </h1>
        </div>
        {/* pricing card portion  */}
        <div
          style={{
            display: "flex",

            justifyContent: "center",
            transform: "Scale(0.7)",
          }}
        >
          <div
            style={{
              transform: "rotateZ(-5deg) rotateX(30deg)",
            }}
          >
            <PriceCard
              n=" Subscription for Students"
              pm="5.90"
              py="50.00"
              list={list}
            />
          </div>
          <div
            style={{
              marginLeft: "-70px",
              transform: "rotateZ(7deg)",
            }}
          >
            <PriceCard
              n=" Subscription for Consultant"
              pm="9.90"
              py="90.00"
              list={list}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              width: "300px",
              backgroundColor: "rgba(124, 83, 153, 1)",
              color: "white",
              display: "flex",
              justifyContent: "center",
              padding: "15px 45px 15px 45px",
              border: "1px solid white",
              borderRadius: "10px",
            }}
          >
            Subscribe Now
            <ArrowSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
// const successData = [
//   {
//     header: "Une expertise religieuse diversifiée",
//     body: "Accès à un large éventail d’experts religieux spécialisés dans différents domaines.",
//   },
//   {
//     header: "Convivialité et simplicité",
//     body: "Interface conviviale et intuitive pour une expérience utilisateur optimale.",
//   },
//   {
//     header: "Sécurité et confidentialité",
//     body: "Des protocoles de sécurité renforcés pour assurer la confidentialité des échanges entre utilisateurs et consultants",
//   },
//   {
//     header: "Fidélité et engagement",
//     body: "Programme tidente engageant et engagement continu à améliorer l’expérience client",
//   },
// ];
