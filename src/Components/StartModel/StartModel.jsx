import React from "react";
import "./StartModel.css";

const StartModel = ({ setStart, start }) => {
  return (
    <div className="start_model">
      <div className="banner">
        <p>Welcome To Water Rising!</p>
      </div>
      <button className="start_btn" onClick={() => setStart(true)}>
        Start!
      </button>
    </div>
  );
};

export default StartModel;
