import React from "react";
import PropTypes from "prop-types";
import anh1 from "../../assets/xetai.webp";
import anh2 from "../../assets/card.png";
import anh3 from "../../assets/bantay.webp";
import "../../style/Service.css";

Service.propTypes = {};

function Service(props) {
  return (
    <div className="contents__service">
      <div className="free__shopping">
        <div className="picture">
          <img src={anh1}></img>
        </div>
        <div className="text">
          <p>
            <span>FREE SHIPPING:</span>
            All orders of $49 or more of eligible items across any product
            category qualify.
          </p>
        </div>
      </div>
      <div className="credit__cards">
        <div className="picture">
          <img src={anh2}></img>
        </div>
        <div className="text">
          <p>
            <span>CREDIT CARDS : </span>
            We accept Visa, American Express, Mastercard, and Discover.
          </p>
        </div>
      </div>
      <div className="return__policy">
        <div className="picture">
          <img src={anh3}></img>
        </div>
        <div className="text">
          <p>
            <span>RETURN POLICY :</span>
            You can return your online order within 30 days of receiving your
            order.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
