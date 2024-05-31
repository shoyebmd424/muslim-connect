import React, { useEffect, useState } from "react";
import "./Profile.css";
import profilePic from "../../../assets/Student/Ellipse 21.png";
import { toast } from "react-toastify";
import {
  MdEdit,
  MdFacebook,
  MdLocationPin,
  MdOutlineCalendarMonth,
  MdOutlineWatchLater,
  MdVideocam,
} from "react-icons/md";
import {
  FaCircleNodes,
  FaGithub,
  FaLinkedin,
  FaSquareInstagram,
  FaYoutube,
} from "react-icons/fa6";
import { useAuth } from "../../../context/AuthContext";
import {
  useGetAuthByIdQuery,
  useUpdateAuthMutation,
} from "../../../ApiService/AuthSlice/AuthSlice";
import UpdateUser, {
  Interest,
  LanguageUpdate,
  Skills,
  SocialMedia,
} from "./UpdateProfile/UpdateUser";
import { server } from "../../../ApiService/Axios";
import { updateUser } from "../../../ApiService/Auth/Auth";

const Profile = () => {
  const [auth] = useAuth();
  const [id, setId] = useState(auth?.user?._id);
  const { data, refetch } = useGetAuthByIdQuery(id);
  const user = data;
  const [isEditDesc, setIsDesc] = useState(false);
  const [description, setDesc] = useState(user?.description);
  const [isEducation, setIsEdu] = useState(false);
  const [isLang, setIsLang] = useState(false);
  const [isInterst, setIsInterest] = useState(false);
  const [isSkill, setIsSkill] = useState(false);
  const [isSocial, setIsSocial] = useState(false);
  const [updateAuth, { isSuccess, isError }] = useUpdateAuthMutation();
  useEffect(() => {
    setId(auth?.user?._id);
  }, [auth?.user?._id]);
  const handleSaveClick = async (e) => {
    e.preventDefault();
    if (!description) {
      setIsDesc(false);
      return;
    }
    try {
      const { data } = await updateAuth({
        id: user?._id,
        description: description,
      });
      if (data && isSuccess) {
        toast.success("Description update successfully");
        onUpdate();
        setIsDesc(false);
        return;
      }
      if (isError) {
        toast.error("something went wrong try again");
        setIsDesc(false);
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }
    setIsDesc(false);
  };
  const onUpdate = () => {
    refetch();
  };
  const [profile, setprofile] = useState(null);
  const handlePic = async (e) => {
    const { files } = e.target;
    if (files) {
      setprofile(files[0]);
      try {
        const formData = new FormData();
        formData.append("file", files[0]);
        const { data } = await updateUser(user?._id, formData);
        console.log(data);
        if (data?.message) {
          toast.error(data?.message);
          return;
        }
        onUpdate();
        toast.success(data);
      } catch (error) {
        console.log(error);
        console.log(error?.response?.data?.message || error?.response?.data);
      }
    }
  };

  return (
    <div className="profile-container">
      <div
        class="profile-picture"
        style={{ width: "200px", aspectRatio: "1/1" }}
      >
        <label htmlFor="profile">
          {" "}
          <img
            src={
              profile ? URL.createObjectURL(profile) : server + user?.profile
            }
            alt="profile pic"
            className="w-100 h-100 rounded-circle"
          />
        </label>
        <input
          type="file"
          id="profile"
          style={{ opacity: 0 }}
          onChange={handlePic}
        />
      </div>
      <div class="profile-info w-100">
        <div className="d-flex w-100 justify-content-between align-items-center ">
          <h6 className="fw-semibold mx-auto text-capitalize">
            {user?.firstname} {user?.lastname}
          </h6>
          <label htmlFor="profile">
            {" "}
            <MdEdit className="ms-auto" size={20} />
          </label>
        </div>
        <p>
          Loyality Rank:{" "}
          <span style={{ color: "#8F5F03", fontWeight: "light" }}>
            {user?.rank || "Developer"}
          </span>
        </p>
      </div>
      <div class="description w-100">
        <div className="d-flex w-100 justify-content-between align-items-center ">
          <h6 className="fw-semibold mx-auto"> Description</h6>{" "}
          <button className="btn  small" onClick={() => setIsDesc(true)}>
            <MdEdit size={20} />
          </button>
        </div>
        {isEditDesc ? (
          <form action="" onSubmit={handleSaveClick}>
            {" "}
            <textarea
              type="text"
              value={description}
              onChange={(e) => setDesc(e.target.value)}
              onBlur={handleSaveClick}
              autoFocus
              className="w-100 border border-2 "
              style={{ outline: "none" }}
              id=""
            />
            <button className="d-done"></button>
          </form>
        ) : (
          <p onDoubleClick={() => setIsDesc(true)}>
            {description || user?.description}
          </p>
        )}
      </div>
      <hr style={{ width: "100%" }} />
      <div className="availablity-container d-flex flex-column gap-3 w-100 mb-2">
        <div className="d-flex justify-content-between fw-semibold">
          <div className="d-flex gap-2 align-item-center ">
            <span>
              <MdLocationPin size={20} />
            </span>
            <span>From</span>
          </div>
          <div>{user?.location || "Pakistan"}</div>
        </div>
        <div className="d-flex justify-content-between fw-semibold">
          <div className="d-flex gap-2 align-item-center ">
            <span>
              <MdOutlineWatchLater size={20} />
            </span>
            <span>Avg. Response Time</span>
          </div>
          <div>1 Hour</div>
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
          <div>30hr a week</div>
        </div>
        <div className="availability-btn rounded w-100 d-flex  align-items-center gap-3 fw-bold justify-content-center ">
          <span>
            <MdOutlineCalendarMonth className="text-white" size={20} />
          </span>
          <span className="text-white">Availability</span>
        </div>
      </div>
      <div class="details mt-4 d-flex flex-column gap-1">
        {isEducation && (
          <UpdateUser
            user={user}
            onUpdate={onUpdate}
            type="education"
            setEdu={setIsEdu}
          />
        )}
        <div className="d-flex justify-content-between align-items-center ">
          <h6>Education</h6>{" "}
          <button onClick={() => setIsEdu(true)} className="btn border small">
            + Add
          </button>
        </div>
        {user?.educations?.map((val, key) => (
          <>
            <p className="fw-semibold">
              {val?.title} - {val?.major}
            </p>
            <p className="text-muted fw-semibold">
              {val?.collage}, {val?.country}.
            </p>
          </>
        ))}
      </div>
      <div class="details">
        {isLang && (
          <LanguageUpdate
            user={user}
            onUpdate={onUpdate}
            setIsLang={setIsLang}
          />
        )}
        <div className="d-flex justify-content-between align-items-center ">
          <h6>Language</h6>{" "}
          <button onClick={() => setIsLang(true)} className="btn border small">
            + Add
          </button>
        </div>
        {user?.languages?.map((val, key) => (
          <p>
            <span className="fw-semibold">{val?.langauge} -</span>{" "}
            <span className="text-muted"> {val?.level}</span>
          </p>
        ))}
      </div>
      <div class="details">
        {isInterst && (
          <Interest
            user={user}
            onUpdate={onUpdate}
            setIsIntrest={setIsInterest}
          />
        )}
        <div className="d-flex justify-content-between align-items-center">
          <h6>Interests</h6>{" "}
          <button
            onClick={() => setIsInterest(true)}
            className="btn border small"
          >
            + Add
          </button>
        </div>
        {user?.intrests?.map((val, key) => (
          <p>{val?.intrest}</p>
        ))}
      </div>
      <div class="details">
        {isSkill && (
          <Skills user={user} onUpdate={onUpdate} setIsSkill={setIsSkill} />
        )}
        <div className="d-flex justify-content-between align-items-center">
          <h6>Skills</h6>{" "}
          <button onClick={() => setIsSkill(true)} className="btn border small">
            + Add
          </button>
        </div>
        <div className="d-flex gap-3 my-2 flex-wrap align-items-center">
          {user?.skills?.map((val, ke) => (
            <span key={val?._id} className="rounded skill">
              {val?.skill}
            </span>
          ))}
        </div>
      </div>
      <div class="details">
        {isSocial && (
          <SocialMedia
            user={user}
            onUpdate={onUpdate}
            setIsSocial={setIsSocial}
          />
        )}
        <div className="d-flex justify-content-between align-items-center">
          <h6>Social Media</h6>{" "}
          <button
            onClick={() => setIsSocial(true)}
            className="btn border small"
          >
            + Add
          </button>
        </div>
        {user?.socialMedia?.map((val, key) => (
          <a
            key={val?._id}
            href={val?.link}
            className="d-flex gap-3 my-2  align-items-center text-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {SocialIcon(val?.name)}
            <span>{val?.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;

const SocialIcon = (val) => {
  let icon;
  switch (val) {
    case "LinkedIn":
      icon = <FaLinkedin size={20} />;
      break;
    case "Github":
      icon = <FaGithub size={20} />;
      break;
    case "Youtube":
      icon = <FaYoutube size={20} />;
      break;
    case "Instagram":
      icon = <FaSquareInstagram size={20} />;
      break;
    case "Facebook":
      icon = <MdFacebook size={20} />;
      break;
    default:
      icon = <FaCircleNodes size={20} />;
  }

  return icon;
};
