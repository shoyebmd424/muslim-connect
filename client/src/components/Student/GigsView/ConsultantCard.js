import React from "react";
import Avatar from "../../../assets/GigsView/Avatar.png";
import StarSvg from "../../../assets/GigsView/StarSvg";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import { chatCreate } from "../../../ApiService/ChatService/ChatService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useGetAllReviewByUserIdQuery } from "../../../ApiService/GigsService/GigsService";
import { server } from "../../../ApiService/Axios";

const ConsultantCard = ({ gig }) => {
  const user = useGetAuthByIdQuery(gig?.userId);
  const [auth] = useAuth();
  const navigate = useNavigate();
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
    <div
      style={{
        width: "100%",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
        padding: "8%",
      }}
    >
      <ConsultantCardHead gig={gig} user={user} />
      <button
        onClick={() => handleMassage(auth?.user?._id, gig?.userId)}
        style={{
          backgroundColor: "transparent",
          border: "1px solid rgba(124, 83, 153, 1)",
          color: "rgba(124, 83, 153, 1)",
          fontWeight: "500",
          fontSize: "20px",
          marginTop: "30px",
          borderRadius: "6px",
          padding: "10px 40px 10px 40px",
        }}
      >
        Contact Me
      </button>

      {/* body  */}

      <div style={{ display: "flex", marginTop: "60px" }}>
        {/* part 1 */}
        <div>
          <div>
            <span
              style={{ fontWeight: "400", fontSize: "18px", color: "grey" }}
            >
              Level
            </span>
            <p style={{ fontWeight: "500", fontSize: "18px" }}>
              {user?.data?.level}
            </p>
          </div>
          <div>
            <span
              style={{ fontWeight: "400", fontSize: "18px", color: "grey" }}
            >
              Skills
            </span>
            <p style={{ fontWeight: "500", fontSize: "18px" }}>
              {" "}
              {user?.data?.skills?.map((val, key) => (
                <span key={key}>{val?.skill} ,</span>
              ))}
            </p>
          </div>
        </div>
        {/* part 2 */}
        <div style={{ marginLeft: "25%" }}>
          <div>
            <span
              style={{ fontWeight: "400", fontSize: "18px", color: "grey" }}
            >
              Member Since
            </span>
            <p style={{ fontWeight: "500", fontSize: "18px" }}>
              {new Date(
                user?.data?.createdAt ? user?.data?.createdAt : ""
              ).getUTCFullYear()}
            </p>
          </div>
          <div>
            <span
              style={{ fontWeight: "400", fontSize: "18px", color: "grey" }}
            >
              Languages
            </span>
            <p style={{ fontWeight: "500", fontSize: "18px" }}>
              {user?.data?.languages?.map((val, key) => (
                <span key={key}>{val?.language} ,</span>
              ))}
            </p>
          </div>
        </div>
      </div>
      {/* foot */}
      <div style={{ marginTop: "20px" }}>
        <span style={{ fontWeight: "400", fontSize: "18px", color: "grey" }}>
          About
        </span>
        <p style={{ fontWeight: "500", fontSize: "18px" }}>
          {user?.data?.description}
        </p>
      </div>
    </div>
  );
};

export default ConsultantCard;

const ConsultantCardHead = ({ user, gig }) => {
  const reviews = useGetAllReviewByUserIdQuery(gig?.userId);
  const calculateRate = () => {
    let avgRate = 0;
    if (Array.isArray(reviews.data)) {
      reviews?.data?.forEach((ele) => {
        avgRate += ele?.rating;
      });
    }
    return avgRate / reviews?.data?.length || 0;
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          marginTop: "20px",
        }}
      >
        <img
          src={server + user?.data?.profile}
          alt="profile"
          srcset=""
          style={{
            height: "120px",
            width: "120px",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p style={{ fontWeight: "600", fontSize: "24px" }}>
            {user?.data?.firstname} {user?.data?.lastname}
          </p>
          <p
            className="my-1"
            style={{ fontWeight: "400", fontSize: "20px", marginTop: "-20px" }}
          >
            {gig?.title}
          </p>
          <p
            className="mt-2"
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-20px",
            }}
          >
            <StarSvg />
            <span
              style={{
                marginLeft: "10px",
                fontWeight: "600",
                fontSize: "20px",
                color: "grey",
              }}
            >
              {calculateRate() || 0.0}
              <span
                style={{
                  marginLeft: "10px",
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "black",
                }}
              >
                ({reviews?.data?.length || 0})
              </span>
            </span>
          </p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(111, 174, 156, 0.15)",
            height: "30px",
            width: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(111, 174, 156, 1)",
            borderRadius: "8px",
            marginLeft: "150px",
          }}
        >
          {user?.data?.level ? user?.data?.level : "New"}
        </div>
      </div>
    </>
  );
};
