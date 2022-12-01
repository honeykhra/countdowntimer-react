import React from "react";
import fb from "../images/icon-facebook.svg";
import pin from "../images/icon-pinterest.svg";
import insta from "../images/icon-instagram.svg";

const Icons = () => {
  return (
    <div className="icons">
      <img className="icon" src={fb} alt="fb"  />
      <img className="icon" src={pin} alt="pin" />
      <img className="icon" src={insta} alt="insta" />
    </div>
  );
};

export default Icons;
