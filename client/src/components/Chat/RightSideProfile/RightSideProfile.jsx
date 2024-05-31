import React from "react";
import "./RightSideProfile.css";
import {
  MdLocationPin,
  MdOutlineCalendarMonth,
  MdOutlineWatchLater,
  MdVideocam,
} from "react-icons/md";
import { useGetAuthByIdQuery } from "../../../ApiService/AuthSlice/AuthSlice";
const RightSideProfile = ({ currentChat, currentUser }) => {
  const userId = currentChat?.members?.find((id) => id !== currentUser);
  const { data } = useGetAuthByIdQuery(userId);
  return (
    <div>
      <h5 className="text-decoration-underline my-4">
        About {data?.firstname}
        {data?.lastname}
      </h5>
      <div>
        <h6 className="my-2">Description</h6>
        <p>{data?.description}</p>
      </div>
      <hr />
      <div className="availablity-container d-flex flex-column gap-3 w-100 mb-2">
        <div className="d-flex justify-content-between fw-semibold">
          <div className="d-flex gap-2 align-item-center ">
            <span>
              <MdLocationPin size={20} />
            </span>
            <span>From</span>
          </div>
          <div>{data?.location}</div>
        </div>
        <div className="d-flex justify-content-between fw-semibold">
          <div className="d-flex gap-2 align-item-center ">
            <span>
              <MdOutlineWatchLater size={20} />
            </span>
            <span>Avg. Response Time</span>
          </div>
          <div>{data?.availability}</div>
        </div>
        <div className="d-flex justify-content-between fw-semibold">
          <div className="d-flex gap-2 align-item-center ">
            <span>
              <MdVideocam size={20} />
            </span>
            <span>Last Consultantion</span>
          </div>
          <div>4 Days ago</div>
        </div>
        <div className="d-flex justify-content-between fw-semibold">
          <div className="d-flex gap-2 align-item-center ">
            <span>
              <MdOutlineCalendarMonth size={20} />
            </span>
            <span>Availability</span>
          </div>
          <div>{data?.availability}</div>
        </div>
      </div>
    </div>
  );
};

export default RightSideProfile;
