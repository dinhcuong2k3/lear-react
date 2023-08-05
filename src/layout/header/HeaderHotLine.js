import React from "react";
import PropTypes from "prop-types";
import "../../style/HeaderHotLine.css";
import Dropdown from "../contents/Dropdown";

HeaderHotLine.propTypes = {};

function HeaderHotLine(props) {
  const data = [
    {
      nation1: "viet nam",
      nation2: "usa",
      nation3: "rusia",
    },
  ];
  const data1 = [
    {
      nation1: "VND",
      nation2: "USA",
      nation3: "EURO",
    },
  ];
  return (
    <div className="header__information">
      <div className="hot__line">
        <div className="number__phone">
          <a>
            <i class="fa-solid fa-phone-volume"></i>
            +0123-456-789
          </a>
        </div>
        <div className="email">
          <a>
            <i class="fa-solid fa-envelope"></i>
            example@domain.com
          </a>
        </div>
      </div>
      <div className="header__title">
        <div className="text__title">
          <p>FREE SHIPPING FOR ORDER ABOVE $200. SHOP NOW !</p>
        </div>
        <div className="header__adress">
          <div className="adress">
            <p>
              <i class="fa-solid fa-location-dot"></i>
              15 West 21th Street, Miami FL, USA
            </p>
          </div>
          <div className="language">
            <p>
              {data.map((card) => (
                <Dropdown
                  nation1={card.nation1}
                  nation2={card.nation2}
                  nation3={card.nation3}
                />
              ))}
            </p>
          </div>
          <div className="money">
            <p>
              {data1.map((card) => (
                <Dropdown
                  nation1={card.nation1}
                  nation2={card.nation2}
                  nation3={card.nation3}
                />
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderHotLine;
