import React from "react";
import PropTypes from "prop-types";
import anh1 from "../../assets/qc1.webp";
import anh2 from "../../assets/qc2.webp";
import "../../style/Shop.css";

Shop.propTypes = {};

function Shop(props) {
  return (
    <div className="shop__the__look">
      <div className="title__shop">
        <h2>Shop The Look</h2>
        <p>Trending Outfits Of Summer</p>
      </div>
      <div className="picture__shop">
        <img src={anh1}></img>
        <img src={anh2}></img>
      </div>
      <div className="qc">
        <h5>TESTIMONIAL</h5>
        <p>
          <strong>
            Best purchase I've made this winter! The color and knitting are
            exquisite and it's so comfy! Went from NYC to Miami without ever
            taking it off. Super cute!!
          </strong>
        </p>
        <div className="name">
          <strong>Christina M. - From Canada</strong>
        </div>
      </div>
    </div>
  );
}

export default Shop;
