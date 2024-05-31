import React from "react";
import img from "../../../assets/Nav_assets/studentProfile.jpeg";
import { server } from "../../../ApiService/Axios";
import { useAuth } from "../../../context/AuthContext";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";

const Conversation = ({ data, curUserId, online, active }) => {
  const [auth] = useAuth();
  // const [userData?.data, setUserData] = useState(null);
  const userId = data?.members?.find((id) => id !== auth?.user?._id);
  // const getData = useFetch(`/auth/users/${userId ? userId : ""}`);
  const userData = useGetAuthByIdQuery(userId);

  return (
    <div
      className={`conversation rounded p-1 px-2 ${
        online && "conversation-active"
      } d-flex gap-2  align-items-center`}
    >
      <div
        className="profile-img  position-relative"
        style={{ width: "50px", aspectRatio: "1/1", zIndex: "1" }}
      >
        <img
          src={userData?.data?.profile ? server + userData?.data?.profile : img}
          alt="profile"
          className="w-100 h-100 rounded-circle position-absolute"
          style={{ zIndex: "-1" }}
        />
        {online && (
          <div className="online ms-auto mt-auto   rounded-circle shadow"></div>
        )}
      </div>
      <div className="w-100">
        <div className="d-flex justify-content-between  align-items-center">
          <h5 className="fw-semibold" style={{ fontSize: "16px" }}>
            {userData?.data?.firstname}
          </h5>
          {!online && <small>Offline</small>}
        </div>
        <div>
          <small>{userData?.data?.description}</small>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
