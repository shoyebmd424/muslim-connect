import React from "react";
import SubNav from "../../SubNav/SubNav";
import img from "../../../assets/GigsView/Rectangle 1895.png";
// import PrevSvg from "../../../assets/GigsView/PrevSvg";
// import UpnextSvg from "../../../assets/GigsView/UpnextSvg";
import LeftContaineerHead from "./LeftContaineerHead";
import ConsultantCard from "./ConsultantCard";
import Head from "./Head";
import Reviews from "./Reviews";
import "./GigsView.css";
import ArrowVio from "../../../assets/GigsView/ArrowVio";
import RightContaineer from "./RightContaineer";
import { useLocation, useNavigate } from "react-router-dom";
import { server } from "../../../ApiService/Axios";
import { chatCreate } from "../../../ApiService/ChatService/ChatService";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";
function GigsView() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [{ user }] = useAuth();
  const handleMassage = async (currentUser, oppositeUser) => {
    try {
      if (!currentUser || !oppositeUser) {
        toast.error("something wrong");
        return;
      }
      if (currentUser === oppositeUser) {
        toast.error("you can not apply this job");
        return;
      }
      const { data } = await chatCreate({
        senderId: currentUser,
        receiverId: oppositeUser,
      });
      if (data.message) {
        toast.error(data.message);
        return;
      } else {
        navigate("/student/chat", { state: { currentUser, oppositeUser } });
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <div>
      <SubNav />
      <div style={{ padding: "12% 5% 12% 5%" }}>
        <Head />

        <div style={{ width: "100%", display: "flex" }}>
          <div style={{ width: "65%", padding: "1%" }}>
            <LeftContaineerHead gig={state} />
            <div style={{ width: "100%" }}>
              <div style={{ width: "100%", display: "flex" }}>
                {/* <img
                  src={img}
                  alt=""
                  style={{ width: "100%", marginTop: "20px" }}
                /> */}
                {state?.gigsImages && state?.gigsImages[0]?.file && (
                  <img
                    src={server + state?.gigsImages[0]?.file}
                    alt=""
                    style={{ width: "100%", marginTop: "20px" }}
                  />
                )}
              </div>
              <h1
                style={{
                  fontWeight: "600",
                  fontSize: "40px",
                  marginTop: "40px",
                }}
              >
                About the Gig
              </h1>

              <AboutText gig={state} />
            </div>

            <h1
              style={{
                fontWeight: "600",
                fontSize: "40px",
                marginTop: "40px",
                marginBottom: "30px",
              }}
            >
              About the Consultant
            </h1>
            {/* consultant Card  */}
            <ConsultantCard gig={state} />

            <div>
              <h1
                style={{
                  fontWeight: "600",
                  fontSize: "40px",
                  marginTop: "50px",
                }}
              >
                Gigs Keyword
              </h1>
              <div style={{ display: "flex", marginTop: "20px" }}>
                {state?.keyword?.map((val, key) => (
                  <GigsKeyword key={key} gig={state} keyword={val} />
                ))}
                {/* <GigsKeyword gig={state} keyword={"Maal"} />
                <GigsKeyword gig={state} keyword={"Tax"} />
                <GigsKeyword gig={state} keyword={"Zakaat"} /> */}
              </div>
            </div>
          </div>
          <div style={{ width: "35%", marginTop: "30px", padding: "1%" }}>
            <RightContaineer gig={state} />
            <div style={{ width: "100%", marginTop: "30px" }}>
              <button
                onClick={() => handleMassage(user?._id, state?.userId)}
                className="button_book"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                  color: "rgba(124, 83, 153, 1)",
                  fontWeight: "600",
                  fontSize: "22px",
                  padding: "13px 80px 13px 80px",
                  border: "1px solid rgba(124, 83, 153, 1)",
                  borderRadius: "10px",
                }}
              >
                Contact Me <ArrowVio />
              </button>
            </div>
          </div>
        </div>
        <Reviews gig={state} />
      </div>
      {/* ...... */}
    </div>
  );
}

export default GigsView;

const AboutText = ({ gig }) => {
  return (
    <>
      <p style={{ fontWeight: "400", fontSize: "20px", textAlign: "justify" }}>
        <div dangerouslySetInnerHTML={{ __html: gig?.content }} /> {}
      </p>
    </>
  );
};

const GigsKeyword = ({ keyword }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgba(246, 246, 246, 1)",
          display: "inline",
          padding: "10px 20px 10px 20px",
          borderRadius: "5px",
          marginRight: "20px",
        }}
      >
        <span style={{ fontWeight: "500", fontSize: "16px" }}>{keyword}</span>
      </div>
    </>
  );
};
