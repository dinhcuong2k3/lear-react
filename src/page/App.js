import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Contents from "./Contents";
import Footer from "./Footer";
import "../style/App.css";
// import ProductLayout from "./ProductLayout";

App.propTypes = {};

function App(props) {
  return (
    <div className="frame">
      <Header />
      <Contents />
      <Footer />
      {/* <ProductLayout /> */}
    </div>
  );
}

export default App;
