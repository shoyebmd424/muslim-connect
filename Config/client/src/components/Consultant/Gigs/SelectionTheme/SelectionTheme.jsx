import React, { useState } from "react";
import "./SelectionTheme.css";
import TagTaker from "../../../../utils/TagTaker/TagTaker";
const SelectionTheme = ({ handleChange, gigs, setGigs }) => {
  const [tags, setTags] = useState([]);

  return (
    <div className="selection-theme-container mt-4">
      <h4 style={{ fontSize: "32px" }} className="fw-semibold">
        Selection Theme
      </h4>
      <form action="">
        <div className="them-input ">
          <label htmlFor="title" className="my-2">
            Title
          </label>
          <textarea
            name="title"
            type="text"
            onChange={handleChange}
            id="title"
            placeholder="I will"
            style={{ outline: "none" }}
            className="border border-2 rounded w-100 p-2 bg-transparent"
            rows={2}
            maxLength={80}
          ></textarea>
          <div className="text-end">
            <span style={{ fontSize: "14px" }}>80/80</span>
          </div>
        </div>
        <div className="them-input my-4 mt-0">
          <label htmlFor="theme" className="my-2">
            Theme Selection
          </label>
          <select
            name="theme"
            type="text"
            onChange={handleChange}
            id="theme"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          >
            <option value="">Select Theme</option>
            <option value="individual">Individual</option>
            <option value="collective">Collective</option>
          </select>
        </div>
        <div className="them-input my-4">
          <label htmlFor="level" className="my-2">
            Level of course/Consultation
          </label>
          <select
            name="level"
            onChange={handleChange}
            type="text"
            id="theme"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          >
            <option value="">Select level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <div className="them-input my-4">
          <label htmlFor="keyword" className="my-2">
            keyword
          </label>
          <TagTaker
            tags={tags}
            gigs={gigs}
            setGigs={setGigs}
            setTags={setTags}
          />
        </div>
        <div className="text-end">
          <span
            className={tags?.length > 5 ? "text-danger" : ""}
            style={{ fontSize: "14px" }}
          >
            {" "}
            {tags?.length <= 5 ? "upto 5 keyword" : `${tags.length} keywords`}
          </span>
        </div>
      </form>
    </div>
  );
};

export default SelectionTheme;
