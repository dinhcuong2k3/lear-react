import React from "react";
import PropTypes from "prop-types";
import Search from "../layout/footer/Search";
import Company from "../layout/footer/Company";
import "../style/Footer.css";

Footer.propTypes = {};

function Footer(props) {
  return (
    <footer>
      <Search />
      <Company />
      <div className="reset">
        <div className="reset__btn">
          <button>
            <i class="fa-solid fa-chevron-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
