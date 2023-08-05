import React from "react";
import PropTypes from "prop-types";
import "../clothes/Clothes.css";

Clothes.propTypes = {};

function Clothes(props) {
  const { imageUrl, title, money } = props;
  return (
    <div className="frame__clotes">
      <div className="clothes__picture">
        <img id="image" className="anh1" src={imageUrl}></img>
      </div>
      <div className="clothes__information">
        <h3>
          <a>{title}</a>
        </h3>
        <div className="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
        <p>{money}</p>
        <div className="clothes__color">
          <span className="color__circle"></span>
          <span className="color__circle"></span>
          <span className="color__circle"></span>
          <span>+ 2</span>
        </div>
      </div>
    </div>
  );
}

export default Clothes;
