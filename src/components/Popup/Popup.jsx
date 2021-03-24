import React from "react";
import "./Popup.css";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn">Close</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
