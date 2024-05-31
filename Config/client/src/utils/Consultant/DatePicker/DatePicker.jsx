import React from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const DatePicker = ({ value, name, gigs, setGigs }) => {
  const handleChange = (e) => {
    setGigs((pre) => ({ ...pre, [name]: e }));
  };

  return (
    <>
      <DateRangePicker
        placeholder="Select Range"
        value={gigs[name] ? gigs[name] : value}
        className="w-100"
        style={{ outline: "none" }}
        onChange={handleChange}
      />
    </>
  );
};

export default DatePicker;
