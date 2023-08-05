import React from "react";
import PropTypes from "prop-types";
import Clothes from "../../components/clothes/Clothes";
import ao1 from "../../assets/ao1.webp";
import ao1_1 from "../../assets/ao1-1.webp";
import "../../style/Product.css";

Product.propTypes = {};

function Product(props) {
  const dataClothes = [
    {
      imageUrl: ao1,
      title: "High turtleneck jumper",
      money: "$22.00",
    },
    {
      imageUrl: ao1,
      title: "High turtleneck jumper",
      money: "$22.00",
    },
    {
      imageUrl: ao1,
      title: "High turtleneck jumper",
      money: "$22.00",
    },
    {
      imageUrl: ao1,
      title: "High turtleneck jumper",
      money: "$22.00",
    },
    {
      imageUrl: ao1,
      title: "High turtleneck jumper",
      money: "$22.00",
    },
  ];
  const dataClothes1 = [
    {
      imageUrl: ao1_1,
      title: "High turtleneck jumper",
      money: "$22.00",
    },
    {
      imageUrl: ao1_1,
      title: "High turtleneck jumper",
      money: "$22.00",
    },
    {
      imageUrl: ao1_1,
      title: "High turtleneck jumper",
      money: "$22.00",
    },
    {
      imageUrl: ao1_1,
      title: "High turtleneck jumper",
      money: "$22.00",
    },
    {
      imageUrl: ao1_1,
      title: "High turtleneck jumper",
      money: "$22.00",
    },
  ];
  return (
    <div className="contents__product">
      <h2>New For You</h2>
      <div className="frame__product">
        <div className="product__clothes">
          {dataClothes.map((card) => (
            <Clothes
              imageUrl={card.imageUrl}
              title={card.title}
              money={card.money}
            />
          ))}
        </div>
        <div className="product__clothes">
          {dataClothes1.map((card) => (
            <Clothes
              imageUrl={card.imageUrl}
              title={card.title}
              money={card.money}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
