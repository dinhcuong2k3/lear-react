import React from "react";
import PropTypes from "prop-types";
import "../../style/Tiktok.css";

Tiktok.propTypes = {};

function Tiktok(props) {
  return (
    <div className="title__tiktok">
      <div className="tiktok-text">
        <h2>Trending On Tiktok</h2>
        <p>04 TikTok Fashion Trends That Will Be Everywhere This Spring</p>
      </div>
      <div className="video">
        <div className="tiktok-video">
          <iframe
            src="https://www.tiktok.com/embed/v2/7182236590599572762"
            width="300"
            height="752"
            frameBorder="0"
            allowFullScreen
            title="TikTok Video"
          ></iframe>
        </div>
        <div className="tiktok-video">
          <iframe
            src="https://www.tiktok.com/embed/v2/7168425848079453467"
            width="300"
            height="752"
            frameBorder="0"
            allowFullScreen
            title="TikTok Video"
          ></iframe>
        </div>
        <div className="tiktok-video">
          <iframe
            src="https://www.tiktok.com/embed/v2/7182236590599572762"
            width="300"
            height="752"
            frameBorder="0"
            allowFullScreen
            title="TikTok Video"
          ></iframe>
        </div>
        <div className="tiktok-video">
          <iframe
            src="https://www.tiktok.com/embed/v2/7182236590599572762"
            width="300"
            height="752"
            frameBorder="0"
            allowFullScreen
            title="TikTok Video"
          ></iframe>
        </div>
      </div>
      <div className="tiktok-follow">
        <a>
          FOLLOW US ON TIKTOK <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Tiktok;
