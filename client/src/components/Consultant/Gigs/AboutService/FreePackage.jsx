import React, { useState } from "react";
import DatePicker from "../../../../utils/Consultant/DatePicker/DatePicker";

const FreePackage = ({ handleChange, gigs, setGigs }) => {
  const [value, setDate] = useState([
    new Date("2017-02-01"),
    new Date("2017-05-20"),
  ]);
  return (
    <>
      <div className="freePackage">
        <h4 className="fw-semibold">{gigs?.package}</h4>
        {gigs?.package === "Premium package" && (
          <>
            <div className="them-input ">
              <label htmlFor="availability" className="my-2">
                Availability
              </label>
              <select
                name="availability"
                type="text"
                onChange={handleChange}
                id="availability"
                style={{ outline: "none" }}
                className="border p-2 w-100 bg-transparent border-2 rounded"
              >
                <option value="them1">Select Option</option>
                <option value="5hr/week">5hr a week</option>
                <option value="6hr/week">6hr a week</option>
                <option value="7hr/week">7hr a week</option>
                <option value="8hr/week">8hr a week</option>
              </select>
            </div>
            <div className="them-input my-4 mt-0">
              <label htmlFor="range" className="my-2">
                Select from Range
              </label>
              <div className="d-flex justify-content-between border align-items-center rounded border-2">
                <DatePicker
                  date={value}
                  setDate={setDate}
                  gigs={gigs}
                  setGigs={setGigs}
                  name="freeDateRange"
                />
              </div>
            </div>
          </>
        )}

        <div className="them-input ">
          <label htmlFor="platform" className="my-2">
            Platform
          </label>
          <select
            onChange={handleChange}
            name="platform"
            type="text"
            id="platform"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          >
            <option value="">Select Platform</option>
            <option value="zoom">Zoom</option>
            <option value="google">Google Meet</option>
            <option value="muslim-connect">Muslim Connect</option>
          </select>
        </div>
        <div className="them-input ">
          <label htmlFor="individuals" className="my-2">
            Individuals
          </label>
          <select
            name="individuals"
            onChange={handleChange}
            type="text"
            id="individuals"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          >
            <option value="">Select </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FreePackage;
