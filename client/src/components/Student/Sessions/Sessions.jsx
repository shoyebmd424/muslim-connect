import React, { useEffect, useState } from "react";
import SearchSvg from "../../../assets/Session/Search_Svg";
import "./Session.css";
import {
  useCancelSessionMutation,
  useCompleteSessionMutation,
  useGetSessionByUserIdQuery,
} from "../../../ApiService/SessionSlice/SessionSlice";
import { useAuth } from "../../../context/AuthContext";
import { server } from "../../../ApiService/Axios";
import {
  useGetAllGigsQuery,
  useGetGigsByIdQuery,
} from "../../../ApiService/GigsService/GigsService";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { BsX } from "react-icons/bs";
import Review from "../../Review/Review";
import { toast } from "react-toastify";
function Session() {
  const [{ user }] = useAuth();
  const sessions = useGetSessionByUserIdQuery(user?._id);
  const [filteredSession, setFilteredSessions] = useState(sessions?.data || []);
  const [isReview, setIsReview] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [gigId, setGigId] = useState("");
  useEffect(() => {
    setFilteredSessions(sessions?.data);
  }, [sessions?.data, sessions?.refetch]);
  const setDetails = (gigId, sessionId) => {
    setGigId(gigId);
    setSessionId(sessionId);
    setIsReview(true);
  };
  const gigs = useGetAllGigsQuery();
  const handleChange = (e) => {
    const { value } = e.target;
    const filtered = sessions?.data?.filter((item) => {
      const gig = gigs?.data.find((g) => g._id === item.gigId);
      return (
        gig?.title?.toLowerCase()?.includes(value.toLowerCase()) ||
        gig?.price?.toLowerCase()?.includes(value.toLowerCase())
      );
    });
    setFilteredSessions(filtered);
  };

  const handleRefetch = () => {
    sessions.refetch();
  };
  return (
    <div style={{ paddingBottom: "5%" }}>
      {/* <DashNav navData={navData} /> */}
      <Head handleChange={handleChange} />
      {isReview && (
        <Review closeReview={setIsReview} sessionId={sessionId} gigId={gigId} />
      )}
      <div style={{ display: "flex", marginLeft: "5%" }}>
        <Type name={"CONSULTATION"} num={"2"} />
        <Type name={"COURSES"} num={"5"} />
      </div>
      <div style={{ padding: "0 5% 0 5%", marginTop: "20px" }}>
        <div
          style={{
            border: "0.5px solid rgba(185, 185, 185, 1)",
            minHeight: "70vh",
          }}
        >
          <table style={{ marginTop: "0" }}>
            <thead>
              <tr>
                <th>CONSULTANT</th>
                <th>GIG</th>
                <th>START DATE</th>
                <th>TOTAL</th>
                <th>STATUS</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sessions?.isLoading ? (
                "Loading...."
              ) : sessions?.isError ? (
                <div className="text-center text-danger my-2">
                  Sessions Fetching error
                </div>
              ) : (
                filteredSession?.map((item, index) => (
                  <TableRow
                    isReview={isReview}
                    setDetails={setDetails}
                    item={item}
                    handleRefetch={handleRefetch}
                    time={item?.time}
                    status={"ACTIV"}
                  />
                ))
              )}
              {/* <TableRow
                name={"Usman Ahmad"}
                gig={"  I will tech the course on Arabic Learning"}
                date={"24th Jan, 2024"}
                time={"3:40 pm"}
                amount={"100$"}
                status={"COMPLETED"}
              />
              <TableRow
                name={"Usman Ahmad"}
                gig={"  I will tech the course on Arabic Learning"}
                date={"24th Jan, 2024"}
                time={"3:40 pm"}
                amount={"100$"}
                status={"CANCELLED"}
              /> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Session;
const Head = ({ handleChange }) => {
  return (
    <div style={{ paddingTop: "13%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 5% 0 5%",
        }}
      >
        <h1 style={{ fontWeight: "600", fontSize: "50px" }}>Manage Sessions</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "black",
            border: "0.3px solid gray",
            height: "50px",
            padding: "0px 25px 0px 25px",
            boxShadow: "0px 0px 4px 0px rgba(0 0 0 0.25)",
            borderRadius: "100px",
            opacity: "50%",
          }}
        >
          <SearchSvg />
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search"
            style={{ border: "none", outline: "none", marginLeft: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

const Type = ({ name, num }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <span style={{ display: "flex", marginRight: "20px" }}>
          {name}{" "}
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
            {num}
          </div>{" "}
        </span>
      </div>
    </>
  );
};

const TableRow = ({ item, img, setDetails, handleRefetch }) => {
  const user = useGetAuthByIdQuery(item?.consultantId);
  const gig = useGetGigsByIdQuery(item?.gigId);
  const [cancelSession, { error, isError, isSuccess }] =
    useCancelSessionMutation();
  const [completeSession, other] = useCompleteSessionMutation();
  const [isAction, setAction] = useState(false);
  const handleSet = () => {
    setDetails(gig?.data?._id, item?._id);
  };
  const handleComplete = async (id) => {
    try {
      const { data } = await completeSession(id);
      if (other?.isError) {
        toast.error(other?.error?.data?.message || other?.error?.data);
        return;
      }
      if (data?.message) {
        toast.error(data?.message);
        return;
      }
      handleRefetch();
      toast.success(data);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong...!");
    }
  };
  const handleCancel = async (id) => {
    try {
      const { data } = await cancelSession(id);
      if (isError) {
        toast.error(error?.data?.message || error?.data);
        return;
      }
      if (data?.message) {
        toast.error(data?.message);
        return;
      }
      if (isSuccess) {
        handleRefetch();
        toast.success(data);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong...!");
    }
  };
  return (
    <>
      <tr>
        <td
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: "500",
            fontSize: "16px",
          }}
        >
          <img
            src={user?.data?.profile ? server + user?.data?.profile : img}
            alt=""
            style={{
              height: "40px",
              width: "40px",
              marginRight: "15px",
              borderRadius: "50%",
            }}
          />
          {user?.data?.fistname} {user?.data?.lastname}
        </td>
        <td
          style={{
            color: "rgba(124, 83, 153, 1)",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          {gig?.data?.title}
        </td>
        <td style={{ textAlign: "center" }}>
          <span
            style={{
              display: "block",
              fontWeight: "500",
              fontSize: "18px",
            }}
          >
            {item?.startDate}
            <span
              style={{
                display: "block",
                fontWeight: "400",
                color: "gray",
              }}
            >
              {item?.time}
            </span>
          </span>
        </td>
        <td style={{ fontWeight: "600", fontSize: "22px" }}>
          ${gig?.data?.price}
        </td>
        <td>
          <button
            onClick={() => gig?.data?.status === "review" && handleSet()}
            style={{
              backgroundColor: "rgba(124, 83, 153, 1)",
              color: "white",
              border: "1px solid white",
              padding: "7px 20px 7px 20px",
              borderRadius: "30px",
              width: "150px",
              fontWeight: "500",
              fontSize: "13px",
            }}
          >
            {gig?.data?.status === "review"
              ? "Give Review"
              : gig?.data?.status === "progress"
              ? "Active"
              : gig?.data?.status}
          </button>
        </td>
        <td className="position-relative ">
          {!isAction ? (
            <span
              onClick={() => setAction(!isAction)}
              style={{ cursor: "pointer" }}
              className="p-2  rounded-circle bg-light"
            >
              <PiDotsThreeOutlineFill size={25} />
            </span>
          ) : (
            <span
              onClick={() => setAction(!isAction)}
              style={{ cursor: "pointer" }}
              className="p-2  rounded-circle bg-light"
            >
              <BsX size={25} />
            </span>
          )}
          <ul
            style={{ listStyle: "none", zIndex: "4" }}
            className={`d-flex threeDot px-0 rounded  flex-column bg-light  threeDot-${
              isAction ? "open" : "close"
            } gap-3 mt-0  left-0 position-absolute`}
          >
            {user?.data?.role === "CONSULTANT" && (
              <li
                className="p-1 py-2 px-2 fw-bold"
                onClick={() => handleComplete(item?._id)}
              >
                Complete
              </li>
            )}
            <li
              className="p-1 py-2 px-2 fw-bold "
              onClick={() => handleCancel(item?._id)}
            >
              Cancel
            </li>
            <li onClick={() => handleSet()} className="p-1 fw-bold py-2 px-2 ">
              Review
            </li>
          </ul>
        </td>
      </tr>
    </>
  );
};
