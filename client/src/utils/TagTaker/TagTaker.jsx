import React from "react";
import { TagPicker } from "rsuite";
import "./Tag.css";
import "rsuite/dist/rsuite.min.css";

const TagTaker = ({ gigs, setGigs, tags, setTags }) => {
  const handleChange = (e) => {
    setTags(e);

    setGigs((prevGigs) => ({
      ...prevGigs,
      keyword: tags,
    }));
  };
  return (
    <TagPicker
      style={{ width: 850 }}
      placeholder="Select keyword"
      data={options}
      onChange={handleChange}
    />
  );
};

export default TagTaker;
const options = [
  {
    label: "Monday",
    value: "Monday",
    role: "Master",
  },
  {
    label: "Tuesday",
    value: "Tuesday",
    role: "Master",
  },
  {
    label: "Wednesday",
    value: "Wednesday",
    role: "Master",
  },
  {
    label: "Thursday",
    value: "Thursday",
    role: "Master",
  },
  {
    label: "Friday",
    value: "Friday",
    role: "Master",
  },
  {
    label: "Saturday",
    value: "Saturday",
    role: "Master",
  },
  {
    label: "Sunday",
    value: "Sunday",
    role: "Master",
  },
];
