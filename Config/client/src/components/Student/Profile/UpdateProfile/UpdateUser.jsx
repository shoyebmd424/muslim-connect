import React, { useState } from "react";
import "./updateUser.css";
import { useUpdateAuthMutation } from "../../../../ApiService/AuthSlice/AuthSlice";
import { toast } from "react-toastify";
const UpdateUser = ({ setEdu, user, onUpdate }) => {
  const [education, setEducation] = useState();
  const [updateAuth, { isSuccess, isError }] = useUpdateAuthMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // let eduData = user?.educations || [];
    if (!education) {
      return;
    }

    try {
      const { data } = await updateAuth({
        id: user?._id,
        educations: [...user?.educations, education],
      });
      if (data && isSuccess) {
        toast.success("Education added successfully");
        onUpdate();
        return;
      }
      if (isError) {
        toast.error("something went wrong try again");
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };
  return (
    <div className="p-3 bg-light">
      <form onSubmit={handleSubmit} action="">
        <div className="my-3">
          <select
            name="country"
            onChange={handleChange}
            style={{ outline: "none" }}
            id=""
            className="w-100 border border-2 rounded p-2"
          >
            <option value="">Country of Collage/University</option>
            <option value="Unkown">Unkown</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Indonasia">Indonasia</option>
          </select>
        </div>
        <div className="my-3">
          <select
            name="collage"
            onChange={handleChange}
            style={{ outline: "none" }}
            id=""
            className="w-100 border border-2 rounded p-2"
          >
            <option value="">Name of Collage/University</option>
            <option value="">Unkown</option>
            <option value="Jmi">Jmi</option>
            <option value="Aliah University">Aliah University</option>
            <option value="Kolkata University">Kolkata University</option>
            <option value="IIt">IIt</option>
          </select>
        </div>
        <div className="my-3 d-flex justiify-content-between align-items-center">
          <select
            name="title"
            onChange={handleChange}
            style={{ outline: "none" }}
            id=""
            className="w-100 border border-2 p-2"
          >
            <option value="">Title</option>
            <option value="BA">BA</option>
            <option value="Diploma">Diploma</option>
            <option value="BA">BA</option>
            <option value="B.Tech">B.Tech</option>
          </select>
          <input
            type="text"
            name="major"
            onChange={handleChange}
            style={{ outline: "none" }}
            className="w-100 border border-2 p-2"
            placeholder="Major"
          />
        </div>
        <div className="my-3">
          <select
            name="year"
            onChange={handleChange}
            style={{ outline: "none" }}
            id=""
            className="w-100 border border-2 rounded p-2"
          >
            <option value="">Graduation Year</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2001">2001</option>
            <option value="2001">2001</option>
            <option value="2001">2001</option>
          </select>
        </div>
        <div className="d-flex justify-content-between gap-3 align-items-center">
          <button
            type="button"
            onClick={() => setEdu(false)}
            className="w-100 p-2 bg-white fw-bold text-danger border border-danger rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-100 p-2  fw-bold user-update-add-btn"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;

export const LanguageUpdate = ({ setIsLang, user, onUpdate }) => {
  const [language, setLanguage] = useState();
  const [updateAuth, { isSuccess, isError }] = useUpdateAuthMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateAuth({
        id: user?._id,
        languages: [...user?.languages, language],
      });
      if (data && isSuccess) {
        toast.success("Description update successfully");
        onUpdate();
        return;
      }
      if (isError) {
        toast.error("something went wrong try again");
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLanguage({ ...language, [name]: value });
  };
  return (
    <div className="p-3 bg-light">
      <form onSubmit={handleSubmit} action="">
        <div className="my-3">
          <input
            name="langauge"
            onChange={handleChange}
            style={{ outline: "none" }}
            id=""
            className="w-100 border border-2 rounded p-2"
            placeholder="Add language"
          />
        </div>
        <div className="my-3">
          <select
            name="level"
            onChange={handleChange}
            style={{ outline: "none" }}
            id=""
            className="w-100 border border-2 rounded p-2"
          >
            <option value="">Language Level</option>
            <option value="Basic">Basic</option>
            <option value="Conversational">Conversational</option>
            <option value="Fluent">Fluent</option>
            <option value="Native">Native</option>
          </select>
        </div>
        <div className="d-flex justify-content-between gap-3 align-items-center">
          <button
            onClick={() => setIsLang(false)}
            className="w-100 p-2 bg-white fw-bold text-danger border border-danger rounded"
          >
            Cancel
          </button>
          <button className="w-100 p-2  fw-bold user-update-add-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export const Interest = ({ setIsIntrest, user, onUpdate }) => {
  const [intrest, setIntrest] = useState();
  const [updateAuth, { isSuccess, isError }] = useUpdateAuthMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateAuth({
        id: user?._id,
        intrests: [...user?.intrests, intrest],
      });
      if (data && isSuccess) {
        toast.success("Description update successfully");
        onUpdate();
        return;
      }
      if (isError) {
        toast.error("something went wrong try again");
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIntrest({ ...intrest, [name]: value });
  };
  return (
    <div className="p-3 bg-light">
      <form onSubmit={handleSubmit} action="">
        <div className="my-3">
          <input
            name="intrest"
            onChange={handleChange}
            style={{ outline: "none" }}
            id=""
            placeholder="Enter Interest"
            className="w-100 border border-2 rounded p-2"
          />
        </div>
        <div className="d-flex justify-content-between gap-3 align-items-center">
          <button
            onClick={() => setIsIntrest(false)}
            className="w-100 p-2 bg-white fw-bold text-danger border border-danger rounded"
          >
            Cancel
          </button>
          <button className="w-100 p-2  fw-bold user-update-add-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export const Skills = ({ setIsSkill, user, onUpdate }) => {
  const [skill, setSkill] = useState();
  const [updateAuth, { isSuccess, isError }] = useUpdateAuthMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateAuth({
        id: user?._id,
        skills: [...user?.skills, skill],
      });
      if (data && isSuccess) {
        toast.success("Description update successfully");
        onUpdate();
        return;
      }
      if (isError) {
        toast.error("something went wrong try again");
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill({ ...skill, [name]: value });
  };
  return (
    <div className="p-3 bg-light">
      <form onSubmit={handleSubmit} action="">
        <div className="my-3">
          <input
            name="skill"
            onChange={handleChange}
            style={{ outline: "none" }}
            id=""
            placeholder="Add Skill"
            className="w-100 border border-2 rounded p-2"
          />
        </div>
        <div className="my-3">
          <select
            name="level"
            onChange={handleChange}
            style={{ outline: "none" }}
            id=""
            className="w-100 border border-2 rounded p-2"
          >
            <option value="">Level Of Skill</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <div className="d-flex justify-content-between gap-3 align-items-center">
          <button
            onClick={() => setIsSkill(false)}
            className="w-100 p-2 bg-white fw-bold text-danger border border-danger rounded"
          >
            Cancel
          </button>
          <button className="w-100 p-2  fw-bold user-update-add-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export const SocialMedia = ({ setIsSocial, user, onUpdate }) => {
  const [social, setSocial] = useState();
  const [updateAuth, { isSuccess, isError }] = useUpdateAuthMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateAuth({
        id: user?._id,
        socialMedia: [...user?.socialMedia, social],
      });
      if (data && isSuccess) {
        toast.success("Description update successfully");
        onUpdate();
        return;
      }
      if (isError) {
        toast.error("something went wrong try again");
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocial({ ...social, [name]: value });
  };
  return (
    <div className="p-3 bg-light">
      <form onSubmit={handleSubmit} action="">
        <div className="my-3">
          <select
            name="name"
            onChange={handleChange}
            style={{ outline: "none" }}
            id=""
            className="w-100 border border-2 rounded p-2"
          >
            <option value="">Select Social Media</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Github">Github</option>
            <option value="Youtube">Youtube</option>
            <option value="Integram">Integram</option>
            <option value="Facebook">Facebook</option>
          </select>
        </div>
        <div className="my-3">
          <input
            name="link"
            onChange={handleChange}
            style={{ outline: "none" }}
            id=""
            className="w-100 border border-2 rounded p-2"
            placeholder="Enter link"
          />
        </div>

        <div className="d-flex justify-content-between gap-3 align-items-center">
          <button
            onClick={() => setIsSocial(false)}
            className="w-100 p-2 bg-white fw-bold text-danger border border-danger rounded"
          >
            Cancel
          </button>
          <button className="w-100 p-2  fw-bold user-update-add-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
