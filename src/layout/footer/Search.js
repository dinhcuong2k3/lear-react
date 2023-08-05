import React from "react";
import PropTypes from "prop-types";
import "../../style/Search.css";

Search.propTypes = {};

function Search(props) {
  return (
    <div className="footer__product">
      <div className="contact__us">
        <h3>CONTACT US</h3>
        <div className="text__contact">
          <p>
            Morbi ullamcorper ligula sit amet efficitur pellentesque. Aliquam
            ornare quam tellus ultricies molestie tortor.
          </p>
          <p>
            <i class="fa-solid fa-phone"></i>{" "}
            <span>
              HOTLINE :<br /> +123-456-789
            </span>
          </p>
          <p>
            <i class="fa-solid fa-envelope"></i> info@example.com
          </p>
          <p>
            <i class="fa-regular fa-clock"></i> Monday till Friday 10 to 6 EST
          </p>
        </div>
      </div>
      <div className="help">
        <h3>HELP</h3>
        <div className="list__help">
          <ul>
            <li>
              <a>Help Center</a>
            </li>
            <li>
              <a>Shipping Info</a>
            </li>
            <li>
              <a>Returns</a>
            </li>
            <li>
              <a>How To Order</a>
            </li>
            <li>
              <a>How To Track</a>
            </li>
            <li>
              <a>Size Guide</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="company">
        <h3>COMPANY</h3>
        <div className="list__company">
          <ul>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Our Blog</a>
            </li>
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Store Locations</a>
            </li>
            <li>
              <a>Testimonial</a>
            </li>
            <li>
              <a>Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="newsletter">
        <h3>NEWSLETTER</h3>
        <div className="text__newsletter">
          <p>
            Get 15% off your first purchaxse! Plus, be the first to know about
            sales new product launches and exclusive offers!
          </p>
          <div className="email__newsletter">
            <input type="text" placeholder="Your Email Address" />
            <button type="submit">
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="icon__newsletter">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-tiktok"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
