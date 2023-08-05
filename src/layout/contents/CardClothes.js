import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/card/Card";
import "../../style/CardClothes.css";
import anh1 from "../../assets/card1.webp";
import anh2 from "../../assets/card2.webp";
import anh3 from "../../assets/card3.webp";
import anh4 from "../../assets/card4.webp";

CardClothes.propTypes = {};

function CardClothes(props) {
  const cardsData = [
    {
      imageUrl: anh1,
      title: "SWIMWEAR",
      content:
        "Stand out from the Crowd with Our Wide Range of Brands and Styles",
      shownow: "Shop now",
    },
    {
      imageUrl: anh2,
      title: "JEANS SHORTS",
      content:
        "Stand out from the Crowd with Our Wide Range of Brands and Styles",
      shownow: "Shop now",
    },
    {
      imageUrl: anh3,
      title: "MEN'S SHOP",
      content:
        "Stand out from the Crowd with Our Wide Range of Brands and Styles",
      shownow: "Shop now",
    },
    {
      imageUrl: anh4,
      title: "BACK TO SCHOOL",
      content:
        "Stand out from the Crowd with Our Wide Range of Brands and Styles",
      shownow: "Shop now",
    },
  ];
  return (
    <div className="contents__card__clothes">
      {cardsData.map((card) => (
        <Card
          imageUrl={card.imageUrl}
          title={card.title}
          content={card.content}
          shownow={card.shownow}
        />
      ))}
    </div>
  );
}

export default CardClothes;
