import React from "react";
import "./Gigs.css";
import myimg from "../../../assets/Rectangle 1891.png";
import MoreSvg from "../../../assets/Gigs/MoreSvg";
import { useNavigate } from "react-router-dom";
import { useGetAllGigsQuery } from "../../../ApiService/GigsService/GigsService";
function Gigs() {
  const gigs = useGetAllGigsQuery();
  // if (gigs?.isLoading) return <div>Loading....</div>;
  // if (gigs?.isError) return <div>Something went wrong...!</div>;
  return (
    <div>
      {/* <DashNav navData={navData} /> */}
      <Head />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 5% 0 5%",
          marginTop: "20px",
        }}
      >
        <span style={{ display: "flex", marginRight: "20px" }}>
          ACTIVE{" "}
          <div
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "rgba(178, 178, 178, 1)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              marginLeft: "5px",
            }}
          >
            2
          </div>{" "}
        </span>
        <span style={{ marginRight: "20px" }}>PAUSED</span>
        <span>PENDING APPROVAL</span>
      </div>

      <div style={{ padding: "0 5% 0 5%" }}>
        <table>
          <thead>
            <tr>
              <th style={{ width: "40%" }}>GIGS</th>
              <th>IMPRESSION</th>
              <th>CLICKS</th>
              <th>ORDERS</th>
              <th>CANCELLATIONS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {gigs?.data?.map((val, key) => (
              <tr>
                <td style={{ display: "flex" }}>
                  <img
                    src={myimg}
                    alt=""
                    style={{
                      height: "40px",
                      width: "40px",
                      marginRight: "15px",
                    }}
                  />
                  {val?.title}
                </td>
                <td>11k</td>
                <td>100</td>
                <td>10</td>
                <td>50%</td>
                <td>
                  <MoreSvg />
                </td>
              </tr>
            ))}
            <tr>
              <td style={{ display: "flex" }}>
                <img
                  src={myimg}
                  alt=""
                  style={{ height: "40px", width: "40px", marginRight: "15px" }}
                />
                I will give consultation on the Financial system in light of
                Quran
              </td>
              <td>11k</td>
              <td>100</td>
              <td>10</td>
              <td>50%</td>
              <td>
                <MoreSvg />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Gigs;
// const navData = [
//   { name: "Dashboard", path: "/student" },
//   {
//     name: "Learning",
//     child: [
//       { name: "loyalty Program", path: "/loyalty" },
//       { name: "Subscription", path: "/subscription" },
//       { name: "Sessions", path: "/sessions" },
//     ],
//   },
//   { name: "loyalty Program", path: "/loyalty" },
//   { name: "Subscription", path: "/subscription" },
//   { name: "Sessions", path: "/sessions" },
// ];

const Head = () => {
  const navigate = useNavigate();
  return (
    <div style={{ paddingTop: "13%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 5% 0 5%",
        }}
      >
        <h1 style={{ fontWeight: "600", fontSize: "50px" }}>Manage Gigs</h1>
        <button
          onClick={() => navigate("create-gigs")}
          style={{
            backgroundColor: "rgba(124, 83, 153, 1)",
            color: "white",
            border: "1px solid white",
            borderRadius: "10px",
            padding: "0px 30px 0px 30px",
            cursor: "pointer",
          }}
        >
          Create a New Gig
        </button>
      </div>
    </div>
  );
};
