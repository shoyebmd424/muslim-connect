import React, { useRef } from "react";
import "./LevelOverview.css";
import ProfileImage from "../../../assets/Nav_assets/studentProfile.jpeg";
import BornzeSvg from "../../../assets/LevelOverview/BornzeSvg";
import platimg from "../../../assets/subs-level/ae761ab438b8cff13929290836e88903.png";
import diamondImg from "../../../assets/subs-level/8b8fa35fb324521e171426ea6bcb8192.png";
import silverImg from "../../../assets/subs-level/903025f8ac28a5d543939b8d626ffa71.png";
import goldImg from "../../../assets/subs-level/fc7beb7dfcd2aaf35909605deafde0b1.png";
import bronzImg from "../../../assets/subs-level/867d038433fed69f7ee0ce08a9ba64d4.png";
import NextArrow from "../../../assets/LevelOverview/NextArrow";
import img2 from "../../../assets/LevelOverview/Group 3535.png";
import { server } from "../../../ApiService/Axios";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import { useAuth } from "../../../context/AuthContext";
import Slider from "react-slick";
function LevelOverview() {
  const [{ user }] = useAuth();
  const { data } = useGetAuthByIdQuery(user?._id);
  const levelRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      {/* <DashNav navData={navData} /> */}
      <div
        style={{
          height: "65vh",
          width: "100%",
          paddingTop: "17%",
          paddingLeft: "7%",
          background: "linear-gradient(180deg, #7C5399 0%, #291C33 100%)",
        }}
      >
        <h1 style={{ color: "white", fontWeight: "600" }}>Loyalty Program</h1>
      </div>

      <div style={{ padding: "5%", display: "flex" }}>
        <div
          style={{
            width: "35%",
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
            padding: "3%",
            backgroundColor: "white",
            marginTop: "-20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            marginLeft: "30px",
          }}
        >
          <img
            src={data?.profile ? server + data?.profile : ProfileImage}
            alt=""
            style={{ height: "140px", width: "140px", borderRadius: "50%" }}
          />
          <span style={{ fontWeight: "600", fontSize: "30px" }}>
            {data?.firstname}
            {data?.lastname}
          </span>
          <div
            style={{
              display: "flex",
              backgroundColor: "rgba(193, 130, 8, 0.2)",
              padding: "8px 20px 8px 20px",
              borderRadius: "4px",
              fontWeight: "600",
              fontSize: "18px",
              color: "rgba(193, 130, 8, 1)",
              marginTop: "13px",
            }}
          >
            <BornzeSvg />
            Bronze
          </div>
          <span
            style={{
              color: "rgba(124, 83, 153, 1)",
              fontWeight: "400",
              fontSize: "18px",
              marginTop: "13px",
            }}
          >
            Current Points:{" "}
            <span style={{ fontWeight: "600", fontSize: "20px" }}>
              200 points
            </span>
          </span>
          <p style={{ marginTop: "10px" }}>
            100 Points left to reach new silver tier
          </p>
          {/* range for next level */}
          <div>range</div>
        </div>

        <div
          style={{
            width: "55%",
            boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
            padding: "3%",
            backgroundColor: "white",
            marginTop: "-20%",
            marginLeft: "70px",
          }}
        >
          <h1>Loyalty Points</h1>
          <p style={{ fontWeight: "400", fontSize: "18px", color: "gray" }}>
            Loyalty points are added by Following these Points{" "}
          </p>

          <ul
            style={{
              fontWeight: "500",
              fontSize: "20px",
              color: "rgba(124, 83, 153, 1)",
            }}
          >
            <li>1 group religious learning session = 1 point</li>
            <li>1 individual religious learning session = 2 points</li>
            <li>1 consultation on a specific topic = 3 points</li>
            <li>1 review left = 1 point</li>
            <li>
              1 referral of a subscriber (who has paid for his subscription, the
              first months offered are not valid) = 3 points for the referrer
              and 1 month of free subscription for the sponsored person
            </li>

            <li>
              1 referee who subscribes or books a service = 2 points Additional
              Subscriptions for the Referrer
            </li>
            <li>The first subscription = 10 points</li>
            <li>Each renewed subscription = 5 points</li>
          </ul>
        </div>
      </div>
      <div style={{ padding: "3% 7.5% 0 7.5%" }}>
        <h1 style={{ fontWeight: "600" }}>Loyalty Tier</h1>
        <div className="mb-4" style={{ display: "flex" }}>
          <span style={{ fontWeight: "400", fontSize: "26px" }}>
            Loyalty tier can be assigned by the points gained by the user and
            following perks will be given to the users depending on there tiers.
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "20px",
            }}
          >
            <button
              onClick={() => levelRef.current?.slickPrev()}
              className="bg-transparent"
              style={{
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                padding: "13px 20px 13px 20px",
                marginRight: "10px",
                borderRadius: "15px",
                transform: "rotate(180deg)",
              }}
            >
              <NextArrow />
            </button>
            <button
              className="bg-transparent"
              onClick={() => levelRef?.current?.slickNext()}
              style={{
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                padding: "13px 20px 13px 20px",
                borderRadius: "15px",
              }}
            >
              <NextArrow />
            </button>
          </div>
        </div>
        <Slider ref={levelRef} {...settings}>
          {CardData?.map((val, index) => (
            <div>
              <LevelCard
                img={val?.img}
                level={val?.name}
                li1={
                  <>
                    {" "}
                    Bronze from{" "}
                    <span style={{ fontWeight: "700" }}>
                      {" "}
                      {val?.startPoint} to {val?.endPoint}
                    </span>{" "}
                    points...
                  </>
                }
                li2={val?.message}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LevelOverview;

const LevelCard = ({ img, level, li1, li2 }) => {
  return (
    <div className="container_loyalty h-100" style={{ paddingBottom: "50px" }}>
      <div className="card_loyalty h-100">
        {" "}
        <div className="text-center">
          {" "}
          <img
            src={img}
            alt="Placeholder"
            style={{ height: "50%", aspectRatio: "1/1" }}
          />
        </div>
        <div className="card-content_loyalty">
          <div className="box">
            <h2 style={{ textAlign: "center", marginTop: "5px" }}>{level}</h2>
            <ul
              style={{
                fontWeight: "400",
                fontSize: "22px",
                marginBottom: "20px",
                marginTop: "10px",
              }}
            >
              <li>{li1}</li>
              {li2 && <li>{li2}</li>}
            </ul>
          </div>
          <p
            style={{
              marginLeft: "90px ",
              textDecoration: "underline",
              fontWeight: "600",
              fontSize: "20px",
              cursor: "pointer",
            }}
            href="#"
          >
            View More
          </p>
        </div>
      </div>
    </div>
  );
};

const CardData = [
  {
    img: platimg,
    name: "Platinum",
    startPoint: 1000,
    endPoint: 1999,
  },
  {
    img: diamondImg,
    name: "Diamond",
    startPoint: 2000,
    message: "6 Month Free",
  },
  {
    img: bronzImg,
    name: "Bronze",
    startPoint: 0,
    endPoint: 99,
    message: "No benifit",
  },
  {
    img: silverImg,
    name: "Silver",
    startPoint: 100,
    endPoint: 499,
    message: "1 Month Free",
  },
  {
    img: goldImg,
    name: "Gold",
    startPoint: 500,
    endPoint: 999,
    message: "3 Month Free",
  },
];
