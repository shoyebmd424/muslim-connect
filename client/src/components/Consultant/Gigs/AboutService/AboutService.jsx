import React, { useState } from "react";
import "./AboutService.css";
import FreePackage from "./FreePackage";
import AddOns from "./AddOns";
import DatePicker from "../../../../utils/Consultant/DatePicker/DatePicker";
const AboutService = ({ handleChange, gigs, setGigs }) => {
  const [value, setDate] = useState([new Date(), new Date()]);
  return (
    <div className="selection-theme-container mt-4">
      <h4 style={{ fontSize: "32px" }} className="fw-semibold my-4">
        About Service
      </h4>

      <div className="them-input  d-flex align-items-center gap-5 my-2">
        <div className="d-flex align-items-center gap-2">
          <input
            id="permiumPackage"
            type="radio"
            onChange={handleChange}
            name="package"
            value="Premium package"
            style={{ width: "15px", height: "15px", cursor: "pointer" }}
          />
          <label htmlFor="permiumPackage">Premium Package</label>
        </div>
        <div className="d-flex align-items-center gap-2">
          <input
            id="freePackage"
            type="radio"
            onChange={handleChange}
            name="package"
            value="Free package"
            style={{ width: "15px", height: "15px", cursor: "pointer" }}
          />
          <label htmlFor="freePackage">Free Package</label>
        </div>
      </div>
      <div className="them-input ">
        <label htmlFor="whyService" className="my-2">
          Why This Service?
        </label>
        <input
          type="text"
          name="whyService"
          onChange={handleChange}
          id="whyService"
          placeholder="Explain service"
          style={{ outline: "none" }}
          className="border p-2 w-100 bg-transparent border-2 rounded"
        />
      </div>
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
          <option value="">Select Option</option>
          <option value="10hr">10hr a week</option>
          <option value="20hr">20hr a week</option>
          <option value="30hr">30hr a week</option>
          <option value="40hr">40hr a week</option>
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
            name="dateRange"
          />
        </div>
      </div>
      <div className="them-input my-4">
        <label htmlFor="serviceType" className="my-2">
          Service Type
        </label>
        <select
          name="serviceType"
          type="text"
          onChange={handleChange}
          id="serviceType"
          style={{ outline: "none" }}
          className="border p-2 w-100 bg-transparent border-2 rounded"
        >
          <option value="">Select service</option>
          <option value="arabic"> Arabic lessons</option>
          <option value="quran">Quran lessons</option>
          <option value="tafsir"> Tafsir course</option>
          <option value="hadith">Hadith lessons</option>
          <option value="islam">Islamic Finance Course</option>
          <option value="between-women">: Between Women</option>
        </select>
      </div>
      <div className="them-input my-4 gap-4 d-flex justify-content-between align-items-center">
        {gigs?.package === "Premium package" && (
          <div className="w-100">
            <label htmlFor="price" className="my-2">
              price
            </label>
            <select
              onChange={handleChange}
              name="price"
              type="text"
              id="price"
              style={{ outline: "none" }}
              className="border p-2 w-100 bg-transparent border-2 rounded"
            >
              <option value="">Select price</option>
              <option value="10">$10</option>
              <option value="10">$20</option>
              <option value="10">$30</option>
              <option value="10">$40</option>
            </select>
          </div>
        )}
        <div className="w-100">
          <label htmlFor="duration" className="my-2">
            Duration
          </label>
          <select
            name="duration"
            type="text"
            onChange={handleChange}
            id="duration"
            style={{ outline: "none" }}
            className="border p-2 w-100 bg-transparent border-2 rounded"
          >
            <option value="">Select Duration</option>
            <option value="30min">30mins</option>
            <option value="40min">40mins</option>
            <option value="50min">50mins</option>
            <option value="60min">60mins</option>
          </select>
        </div>
      </div>
      <FreePackage setGigs={setGigs} gigs={gigs} handleChange={handleChange} />
      <AddOns handleChange={handleChange} gigs={gigs} />
    </div>
  );
};

export default AboutService;
