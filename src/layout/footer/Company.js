import React from "react";
import PropTypes from "prop-types";
import anh1 from "../../assets/amazonpay.svg";
import anh2 from "../../assets/american-express.svg";
import anh4 from "../../assets/mastercard.svg";
import anh5 from "../../assets/paypal.svg";
import anh6 from "../../assets/visa.svg";
import "../../style/Company.css";

Company.propTypes = {};

function Company(props) {
  return (
    <div className="footer__company">
      <div className="text__company">
        <p>© 2023 NOVA-CREATIVE THEME</p>
      </div>
      <div className="item__company">
        <img src={anh1}></img>
        <img src={anh2}></img>
        <img src={anh4}></img>
        <img src={anh5}></img>
        <img src={anh6}></img>
      </div>
    </div>
  );
}

export default Company;
