import React from "react";
import "./Popup.css";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h3>Oops!</h3>
        <p>You forgot to pass the city or the city doesn't exist!</p>
        <button className="close-btn">Okay</button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
