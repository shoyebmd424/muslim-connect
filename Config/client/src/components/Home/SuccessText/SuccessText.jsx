import React from "react";
import './SuccessText.css'
import successImg from './../../../assets/Home_assets/charm_circle-tick.png'
const SuccessText = ({ header, body }) => {
    return (
        <div className="successText">
            <img src={successImg} alt="alt" style={{ width: "2rem" }} />
            <h5>{header}</h5>
            <p>{body}</p>
        </div>
    );
};

export default SuccessText;

