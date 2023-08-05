import React from "react";
import PropTypes from "prop-types";
import insta1 from "../../assets/insta1.webp";
import insta2 from "../../assets/insta2.webp";
import insta3 from "../../assets/insta3.webp";
import insta4 from "../../assets/insta4.webp";
import insta5 from "../../assets/insta5.webp";
import "../../style/Insta.css";

Insta.propTypes = {};

function Insta(props) {
  return (
    <div className="insta__gallery">
      <div className="title__insta">
        <h2>@ Insta Gallery</h2>
        <p>
          Follow us: @coolmate <br /> <br />
          Share your style: #coolmate
        </p>
      </div>
      <div className="picture__insta">
        <div className="picture_move">
          <img src={insta1}></img>
          <div className="hover">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="picture_move">
          <img src={insta2}></img>
          <div className="hover">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="picture_move">
          <img src={insta3}></img>
          <div className="hover">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="picture_move">
          <img src={insta4}></img>
          <div className="hover">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="picture_move">
          <img src={insta5}></img>
          <div className="hover">
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insta;
