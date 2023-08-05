import React from "react";
import PropTypes from "prop-types";
import logo1 from "../../assets/logo-1.png";
import "../../style/HeaderMenu.css";
import anh1 from "../../assets/nav-dropdown.webp";
import anh2 from "../../assets/insta4.webp";

HeaderMenu.propTypes = {};

function HeaderMenu(props) {
  return (
    <div className="header__nav">
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Collections</a>
            <div className="nav--dropdown">
              <div className="nav--dropdown__site-nav">
                <div className="col">
                  <div className="row">
                    <div className="site-nav">
                      <ul className="site-nav__menulink">
                        <li className="site-nav__link-title">
                          Collection page
                        </li>
                        <li>
                          <a>Collection left sidebar</a>
                        </li>
                        <li>
                          <a>Collection right sidebar</a>
                        </li>
                        <li>
                          <a>Collection top sidebar</a>
                        </li>
                        <li>
                          <a>Collection without sidebar</a>
                        </li>
                        <li>
                          <a>Collection deals</a>
                        </li>
                      </ul>
                    </div>
                    <div className="site-nav">
                      <ul className="site-nav__menulink">
                        <li className="site-nav__link-title">
                          Collection page
                        </li>
                        <li>
                          <a>Collection canvas on left</a>
                        </li>
                        <li>
                          <a>Collection canvas on top</a>
                        </li>
                        <li>
                          <a>Collection top bottom</a>
                        </li>
                        <li>
                          <a>Collection full width</a>
                        </li>
                      </ul>
                    </div>
                    <div className="site-nav">
                      <ul className="site-nav__menulink">
                        <li className="site-nav__link-title">
                          Collection page
                        </li>
                        <li>
                          <a>Numbered Pagination</a>
                        </li>
                        <li>
                          <a>Load More Button</a>
                        </li>
                        <li>
                          <a>Infinity Scroll Load More</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="site-nav__picture">
                    <img src={anh1}></img>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a>Products</a>
            <div className="nav--dropdown">
              <div className="nav--dropdown__site-nav">
                <div className="col">
                  <div className="row">
                    <div className="site-nav">
                      <ul className="site-nav__menulink">
                        <li className="site-nav__link-title">Product detail</li>
                        <li>
                          <a>Product detail defaultr</a>
                        </li>
                        <li>
                          <a>Product detail thumb left 1</a>
                        </li>
                        <li>
                          <a>Product detail thumb left 2</a>
                        </li>
                        <li>
                          <a>Product detail thumb right</a>
                        </li>
                        <li>
                          <a>Product deals coundown</a>
                        </li>
                        <li>
                          <a>Product Detail Tab Accordion v1</a>
                        </li>
                        <li>
                          <a>Product Detail Tab Accordion v2</a>
                        </li>
                      </ul>
                    </div>
                    <div className="site-nav">
                      <ul className="site-nav__menulink">
                        <li className="site-nav__link-title">Product detail</li>
                        <li>
                          <a>Product detail thumb grid 1</a>
                        </li>
                        <li>
                          <a>Product detail thumb grid 2</a>
                        </li>
                        <li>
                          <a>Product detail image scroll</a>
                        </li>
                        <li>
                          <a>Product detail image grid</a>
                        </li>
                        <li>
                          <a>Product detail image slider 1</a>
                        </li>
                        <li>
                          <a>Product detail image slider 2</a>
                        </li>
                        <li>
                          <a>Product 3D, AR models</a>
                        </li>
                      </ul>
                    </div>
                    <div className="site-nav">
                      <ul className="site-nav__menulink">
                        <li className="site-nav__link-title">
                          Product features
                        </li>
                        <li>
                          <a>Product Video</a>
                        </li>
                        <li>
                          <a>Product Pre-Order</a>
                        </li>
                        <li>
                          <a>Product Variant Dropbox Style</a>
                        </li>
                        <li>
                          <a>Product Variant Image Swatch</a>
                        </li>
                        <li>
                          <a>Product Variant Pattern</a>
                        </li>
                        <li>
                          <a>Product Sticky Add To Cart</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="picture__site-nav">
                    <div className="site-nav__picture-title">
                      Featured Product
                    </div>
                    <div className="site-nav__picture">
                      <img src={anh2}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a>Other pages</a>
            <div className="nav--dropdown1">
              <div className="nav--dropdown__site-nav">
                <div className="col">
                  <div className="row">
                    <div className="site-nav">
                      <ul className="site-nav__menulink menulink1">
                        <li className="title__other">
                          <a>404 Error</a>
                        </li>
                        <li>
                          <a>About Us</a>
                        </li>
                        <li>
                          <a>Contact Us</a>
                        </li>
                        <li>
                          <a>FAQs Page</a>
                        </li>
                        <li>
                          <a>Store Direction Page</a>
                        </li>
                        <li>
                          <a>Store Locations Page</a>
                        </li>
                        <li>
                          <a>Testimonials Page</a>
                        </li>
                        <li>
                          <a>Size Guide Page</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a>Blog</a>
            <div className="nav--dropdown2">
              <div className="nav--dropdown__site-nav">
                <div className="col">
                  <div className="row">
                    <div className="site-nav">
                      <ul className="site-nav__menulink menulink1">
                        <li className="title__other">
                          <a>Blog Left Sidebar</a>
                        </li>
                        <li>
                          <a>Blog Right Sidebar</a>
                        </li>
                        <li>
                          <a>Blog Without Sidebar</a>
                        </li>
                        <li>
                          <a>Blog List View</a>
                        </li>
                        <li>
                          <a>Blog Column View</a>
                        </li>
                        <li>
                          <a>Blog Detail Left Sidebar</a>
                        </li>
                        <li>
                          <a>Blog Detail Right Sidebar</a>
                        </li>
                        <li>
                          <a>Blog Detail Without Sidebar</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <div className="header__logo">
        <img src={logo1}></img>
      </div>
      <div className="utilities">
        <ul>
          <li>
            <a>
              <i class="fa-solid fa-magnifying-glass"></i> Recherche
            </a>
          </li>
          <li>
            <a>
              <i class="fa-regular fa-user"></i> Compte
            </a>
          </li>
          <li>
            <a>
              <i class="fa-regular fa-heart"></i>
              <span>0</span>
              Wishlist
            </a>
          </li>
          <li>
            <a>
              <i class="fa-solid fa-cart-shopping"></i>
              <span>0</span>
              Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenu;
