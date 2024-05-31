import React from "react";
import Profile from "../Student/Profile/Profile";
import CreateNew from "../../assets/Student/CreateNew";
import Review from "./Reviews/Review";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useGetGigsByUserIdQuery } from "../../ApiService/GigsService/GigsService";
import Item from "./Item/Item";
const Consultant = () => {
  const navigate = useNavigate();
  const [{ user }] = useAuth();
  console.log(user);
  const { data } = useGetGigsByUserIdQuery(user?._id);
  return (
    <div className="student-container">
      <div>
        <Profile />
      </div>
      <div className="about-container">
        <div className="big-btn">
          <h4
            style={{
              color: "white",
              margin: "0",
              fontWeight: "600",
              fontSize: "32px",
            }}
          >
            Unlock Exclusive Benefits with Subscription!
          </h4>
          <div>
            <h6 style={{ fontWeight: "400", fontSize: "22px" }}>
              Join Our Community of Dedicated Learners and Experts"
            </h6>
            <button
              onClick={() => navigate("subscription")}
              type="button"
              className="btn btn-success"
              style={{ backgroundColor: "#6FAE9C" }}
            >
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="card border-0 items" style={{ marginTop: "4%" }}>
          {data?.map((val, index) => (
            <Item gig={val} index={index} />
          ))}
          {/* <Item />
          <Item /> */}

          <div
            className="card item"
            style={{
              borderRadius: "15px",
              width: "45%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              onClick={() => navigate("gigs/create-gigs")}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "19%",
                marginBottom: "19%",
                cursor: "pointer",
              }}
            >
              <CreateNew />
              <p
                style={{
                  fontWeight: "500",
                  fontsize: "32px",
                  marginTop: "20px",
                }}
              >
                Create New Gig
              </p>
            </div>
          </div>
        </div>
        <div className="w-100">
          <Review gigs={data} />
        </div>
      </div>
    </div>
  );
};

export default Consultant;
