import React from "react";
import ReactQuill from "react-quill";
const ContentGigs = ({ gigs, setGigs }) => {
  const handleChange = (e) => {
    setGigs((prevGigs) => ({
      ...prevGigs,
      content: e,
    }));
  };
  console.log(gigs);
  return (
    <div className="mb-4">
      <h4 className="fw-bold my-4">Content</h4>
      <label htmlFor="description fw-semibold pb-2">Description</label>
      <ReactQuill
        theme="snow"
        id="about"
        style={{ height: "50vh" }}
        className="bg-white rounded"
        value={gigs?.content ? gigs?.content : ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default ContentGigs;
