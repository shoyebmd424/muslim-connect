import React, { useEffect, useRef, useState } from "react";
import DownArrow from "../../../assets/Student/DownArrow";
import FilterSvg from "../../../assets/Student/FilterSvg";
import SearchSvg from "../../../assets/Student/SearchSvg";
import SubNav from "../../SubNav/SubNav";
import cartImg from "../../../assets/Student/cartImg.png";
import profileImg from "../../../assets/Student/Ellipse 21.png";
import starImg from "../../../assets/Student/material-symbols_star.png";
import { useNavigate } from "react-router-dom";
import { useGetAllGigsQuery } from "../../../ApiService/GigsService/GigsService";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import { server } from "../../../ApiService/Axios";
import "./ConsultantList.css";

function ConsultantList() {
  const { data, isLoading, isError } = useGetAllGigsQuery();
  const [filtered, setFiltered] = useState(data);
  const [isLevel, setIsLevel] = useState(false);
  const levelRef = useRef();
  useEffect(() => {
    setFiltered(data);
  }, [data]);

  const handleChange = (e) => {
    const { value } = e.target;
    const filteredData = data?.filter(
      (item) =>
        item?.title?.toLowerCase()?.includes(value.toLowerCase()) ||
        item?.content?.toLowerCase()?.includes(value.toLowerCase()) ||
        item?.whyService?.toLowerCase()?.includes(value.toLowerCase()) ||
        item?.keyword?.some((keyword) =>
          keyword?.toLowerCase()?.includes(value.toLowerCase())
        )
    );
    setFiltered(filteredData);
  };
  const handleLevel = (e) => {
    const { value } = e.target;
    const filter = data?.filter((item) =>
      item?.level?.toLowerCase()?.includes(value?.toLowerCase())
    );
    setFiltered(filter);
  };
  useEffect(() => {
    const handler = (e) => {
      if (levelRef?.current && !levelRef.current.contains(e.target)) {
        setIsLevel(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  return (
    <div>
      <div>
        {/* <DashNav navData={navData} type="student" /> */}
        <SubNav />
      </div>
      <div style={{ marginTop: "12%" }}>
        <div
          style={{
            display: "flex",
            padding: "0 5% 0 5%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // width: "200px",
                border: "1px solid rgba(208, 213, 221, 0.5)",
                padding: "0px 30px 0px 30px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              {" "}
              <FilterSvg />{" "}
              <span style={{ fontWeight: "400", fontSize: "22px" }}>
                All Filters
              </span>{" "}
            </div>
            <div
              ref={levelRef}
              className="position-relative"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // width: "200px",
                border: "1px solid rgba(208, 213, 221, 0.5)",
                padding: "0px 50px 0px 50px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => setIsLevel(true)}
            >
              <span style={{ fontWeight: "400", fontSize: "22px" }}>
                Consultations
              </span>{" "}
              <DownArrow />
              <ul
                className={`position-absolute rounded levelList-${
                  isLevel ? "open" : "close"
                } px-0 consultant-level bg-light  `}
                style={{ listStyle: "none", top: "4rem", zIndex: "5" }}
              >
                <li className="p-2 d-flex  align-items-center ">
                  <input
                    type="radio"
                    name="level"
                    value="Expert"
                    onChange={handleLevel}
                    id="Expert"
                  />
                  <label className="w-100" htmlFor="Expert">
                    {" "}
                    Expert
                  </label>
                </li>
                <li className="p-2 d-flex  align-items-center ">
                  <input
                    type="radio"
                    name="level"
                    id="Beginner"
                    value="Beginner"
                    onChange={handleLevel}
                  />
                  <label className="w-100" htmlFor="Beginner">
                    {" "}
                    Beginner
                  </label>
                </li>
                <li className="p-2 d-flex  align-items-center ">
                  <input
                    type="radio"
                    id="Intermediate"
                    onChange={handleLevel}
                    value="Intermediate"
                    name="level"
                  />{" "}
                  <label className="w-100" htmlFor="Intermediate">
                    {" "}
                    Intermediate
                  </label>
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(208, 213, 221, 0.5)",
              borderRadius: "8px",
              padding: "10px",
              width: "38%",
            }}
          >
            <input
              type="text"
              onChange={handleChange}
              placeholder="Rechercher un service"
              style={{
                border: "none",
                outline: "none",
                width: "90%",
                height: "80%",
              }}
            />
            <SearchSvg />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "0 3% 0 3%",
            justifyContent: "flex-start",
            flexWrap: "wrap",
          }}
          className="d-flex"
        >
          {isLoading ? (
            "Loading...."
          ) : isError ? (
            <div className="text-danger text-center w-100">
              Gigs fetching error{" "}
            </div>
          ) : (
            filtered?.map((val, index) => (
              <ConsultantCard gig={val} index={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ConsultantList;
const ConsultantCard = ({ gig, index }) => {
  const navigate = useNavigate();
  const { data } = useGetAuthByIdQuery(gig?.userId);
  return (
    <div
      key={index}
      onClick={() => navigate("/student/gigsview", { state: gig })}
      className="card item"
      style={{ borderRadius: "15px", width: "29.3%" }}
    >
      <div class="cart-item">
        {(!gig?.gigsImages || !gig?.gigsImages[0]?.file) && (
          <img src={cartImg} alt="Product Images" />
        )}
        {gig?.gigsImages && gig?.gigsImages[0]?.file && (
          <img src={server + gig?.gigsImages[0]?.file} alt="Product Images" />
        )}
        <div class="cart-item-info">
          <div style={{ marginTop: "20px" }}>
            <img
              src={profileImg}
              className="profileImg"
              alt="profile"
              style={{ marginRight: "20px" }}
            />
            <p
              className="cart-item-price"
              style={{ fontSize: "14px", marginLeft: "-180px" }}
            >
              {data?.firstname} {data?.lastname}
            </p>
            <p class="cart-item-price">{gig?.price}</p>
          </div>

          <p className="itemDesc">{gig?.title}</p>
          <div className="rating">
            <div>
              <img src={starImg} alt="Star" className="star" />
              <span
                className="rating-count"
                style={{ fontSize: "16px", fontWeight: "600" }}
              >
                5{" "}
                <span
                  style={{ fontWeight: "400", color: "rgba(85, 85, 85, 1)" }}
                >
                  (28)
                </span>
              </span>
            </div>
            <span
              style={{
                fontWeight: "400",
                fontSize: "14px",
                color: "rgba(143, 143, 143, 1)",
              }}
            >
              Level{" "}
              <span
                style={{ fontWeight: "500", fontSize: "18px", color: "black" }}
              >
                {data?.level ? data?.level : "New"}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
