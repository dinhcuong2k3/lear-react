import React from "react";
import PropTypes from "prop-types";
import banner1 from "../../assets/banner1.webp";
import "../../style/Banner.css";

Banner.propTypes = {};

function Banner(props) {
  return (
    <div className="contents__banner">
      <div className="contents__pictire">
        <img src={banner1}></img>
      </div>
      <div className="contents__cap">
        <p>NEW Arrival</p>
        <p>WOMEN</p>
        <p>dresset</p>
        <button className="btn">shop now</button>
      </div>
    </div>
  );
}

export default Banner;
