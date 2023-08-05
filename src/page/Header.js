import React from "react";
import PropTypes from "prop-types";
import HeaderHotLine from "../layout/header/HeaderHotLine";
import "../style/Header.css";
import HeaderMenu from "../layout/header/HeaderMenu";

Header.propTypes = {};

function Header(props) {
  return (
    <header>
      <HeaderHotLine />
      <HeaderMenu />
    </header>
  );
}

export default Header;
