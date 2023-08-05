import React from "react";
import PropTypes from "prop-types";
import Banner from "../layout/contents/Banner";
import Service from "../layout/contents/Service";
import CardClothes from "../layout/contents/CardClothes";
import Product from "../layout/contents/Product";
import Shop from "../layout/contents/Shop";
import Tiktok from "../layout/contents/Tiktok";
import Insta from "../layout/contents/Insta";
import Popup from "../layout/contents/Popup";

Contents.propTypes = {};

function Contents(props) {
  return (
    <div className="contents">
      <Popup />
      <Banner />
      <Service />
      <CardClothes />
      <Product />
      <Shop />
      <Tiktok />
      <Insta />
    </div>
  );
}

export default Contents;
