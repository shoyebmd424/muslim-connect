import React from "react";

const AddOns = ({ handleChange, gigs }) => {
  return (
    <div className="add-ons">
      <h4 className="fw-semibold my-4">Add Ons</h4>
      <div className="form-add">
        <div className="bg-light fw-semibold p-2">Add Ons</div>
        <div className="d-flex align-items-center">
          <input
            name="extraTime"
            onChange={handleChange}
            style={{ outline: "none" }}
            type="text"
            className="w-100 border p-2"
            placeholder="Extra Time"
          />
          <select
            style={{ outline: "none" }}
            name="extraDuration"
            onChange={handleChange}
            className="w-100 border p-2"
            id=""
          >
            <option value="">Select Time</option>
            <option value="10">10min</option>
            <option value="20">20min</option>
            <option value="30">30min</option>
            <option value="40">40min</option>
          </select>
          <select
            style={{ outline: "none" }}
            onChange={handleChange}
            name="extraPrice"
            id=""
            className="w-100 border p-2"
          >
            <option value="">Select Price</option>
            <option value="1">$1</option>
            <option value="2">$2</option>
            <option value="3">$3</option>
            <option value="4">$4</option>
          </select>
        </div>
        <div className="d-flex align-items-center">
          <input
            style={{ outline: "none" }}
            type="text"
            onChange={handleChange}
            name="extraTime"
            className="w-100 border p-2"
            placeholder="Extra Individuals"
          />
          <select
            style={{ outline: "none" }}
            onChange={handleChange}
            name="collective"
            className="w-100 border p-2"
            id=""
          >
            <option value="">Select Individual</option>
            <option value="Individual">Individual</option>
            <option value="collective">Collective</option>
          </select>
          <select
            style={{ outline: "none" }}
            onChange={handleChange}
            name="extraPrice"
            id=""
            className="w-100 border p-2"
          >
            {gigs?.collective === "collective" ? (
              <>
                <option value="">Select Price</option>
                <option value="$1/person">$1 per person</option>
                <option value="$2/person">$2 per person</option>
                <option value="$3/person">$3 per person</option>
                <option value="$4/person">$4 per person</option>
              </>
            ) : (
              <>
                <option value="">Select Price</option>
                <option value="1">$1</option>
                <option value="2">$2</option>
                <option value="3">$3</option>
                <option value="4">$4</option>
              </>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
