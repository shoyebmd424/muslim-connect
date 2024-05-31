import React from "react";
import studentImg from "../../../assets/auth/student.jpeg";
import StudentSlide from "./StudentSlider";
const StudentSay = ({ more }) => {
  return (
    <>
      <div
        style={{ height: more ? "" : "100vh", zIndex: "1" }}
        className={`w-100 position-relative ${more ? "h-100" : ""}`}
      >
        <img
          src={studentImg}
          className="student-img w-100 h-100"
          alt="register"
        />
        <div
          className={`position-absolute d-flex  ${!more ? "pb-5" : ""} `}
          style={{ inset: "0" }}
        >
          <StudentSlide more={more} data={data1} />
        </div>
      </div>
    </>
  );
};

export default StudentSay;

const data1 = [
  {
    message:
      "As a devout follower seeking religious guidance and knowledge, I couldn't be more pleased with my experience on Muslim Connect. This platform has truly revolutionized the way I connect with religious experts!",
    name: "Ayesha Siddiqa",
    location: "Newly Converted Muslim, Indonesian",
  },
  {
    message:
      "As a devout follower seeking religious guidance and knowledge, I couldn't be more pleased with my experience on Muslim Connect. This platform has truly revolutionized the way I connect with religious experts!",
    name: "Ayesha Siddiqa",
    location: "Newly Converted Muslim, Indonesian",
  },
  {
    message:
      "As a devout follower seeking religious guidance and knowledge, I couldn't be more pleased with my experience on Muslim Connect. This platform has truly revolutionized the way I connect with religious experts!",
    name: "Ayesha Siddiqa",
    location: "Newly Converted Muslim, Indonesian",
  },
];

const data = [
  { title: "Slide 1", desc: "Description for Slide 1" },
  { title: "Slide 2", desc: "Description for Slide 2" },
  { title: "Slide 3", desc: "Description for Slide 3" },
];
