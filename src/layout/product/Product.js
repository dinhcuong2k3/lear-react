import React from "react";
import PropTypes from "prop-types";

import anh1 from "../../assets/ao1.webp";
import anh2 from "../../assets/ao1-1.webp";
import mau1 from "../../assets/mau1.webp";
import mau2 from "../../assets/mau2.avif";
import mau3 from "../../assets/mau3.webp";
import mau4 from "../../assets/mau4.webp";
import mau5 from "../../assets/mau5.avif";
import comp1 from "../../assets/amazonpay.svg";
import comp2 from "../../assets/american-express.svg";
import comp3 from "../../assets/mastercard.svg";
import comp4 from "../../assets/paypal.svg";
import comp5 from "../../assets/visa.svg";

Product.propTypes = {};

function Product(props) {
  return (
    <div className="new__product">
      <div className="product">
        <div className="image__product">
          <div className="main--image__product">
            <p>
              <a>Accueil</a>
              <li>High turtleneck jumper</li>
            </p>
            <img src={anh1}></img>
          </div>
          <div className="by--image__product">
            <div className="row--image__product">
              <div className="col--image__product">
                <div className="image">
                  <img src={anh1}></img>
                </div>
                <div className="image">
                  <img src={anh2}></img>
                </div>
                <div className="image">
                  <img src={anh1}></img>
                </div>
                <div className="image">
                  <img src={anh2}></img>
                </div>
                <div className="image">
                  <img src={anh1}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__price">
          <div className="title--product__price">
            <h3>High Turtleneck Jumper</h3>
            <div className="icon">
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
          <div className="product__reviews">
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div className="view">
              <a>5 REVIEWS</a>
            </div>
            <div className="all__view">
              <a>VIEW ALL REVIEWS</a>
            </div>
          </div>
          <div className="money">
            <p>$15.00</p>
          </div>
          <div className="product__text">
            <p>
              Captivate with this shirt's versatile urban look that works as
              well at happy hour as it does in the back yard. The real mother of
              pearl buttons and embroidered crocodile complete its elegant
              appeal.Lorem ipsum...
            </p>
          </div>
          <div className="product__color">
            <div className="name__color">
              <h3>COLOR: BLACK WHITE</h3>
            </div>
            <div className="color">
              <div className="color__board">
                <img src={mau1}></img>
              </div>
              <div className="color__board">
                <img src={mau2}></img>
              </div>
              <div className="color__board">
                <img src={mau3}></img>
              </div>
              <div className="color__board">
                <img src={mau4}></img>
              </div>
              <div className="color__board">
                <img src={mau5}></img>
              </div>
            </div>
          </div>
          <div className="size__product">
            <div className="name__size">
              <h3>SIZE: SX</h3>
            </div>
            <div className="size">
              <button>SX</button>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
          </div>
          <div className="numbers__product">
            <div className="numbers">
              <input type="text">1</input>
            </div>
            <button>ADD TO BAG</button>
          </div>
          <div className="btn--submit__product">
            <button>ACHETER MAINTENANT</button>
          </div>
          <div className="other__function">
            <div className="share">
              <i class="fa-solid fa-share-nodes"></i>
              <a>SHARE</a>
            </div>
            <div className="ask">
              <i class="fa-regular fa-circle-question"></i>
              <a>ASK A QUESTION</a>
            </div>
            <div className="size__guide">
              <i class="fa-solid fa-list-ul"></i>
              <a>SIZE GUIDE</a>
            </div>
            <div className="FAQ">
              <i class="fa-solid fa-message"></i>
              <a>FQA</a>
            </div>
          </div>
          <div className="logo__investors">
            <div className="title__investors">
              <h3>GUARANTEED SAFE CHECKOUT:</h3>
            </div>
            <div className="investors">
              <img src={comp1}></img>
              <img src={comp2}></img>
              <img src={comp3}></img>
              <img src={comp4}></img>
              <img src={comp5}></img>
            </div>
          </div>
          <div className="service">
            <div className="time__order">
              <i class="fa-regular fa-clock"></i>
              <p>Orders ship within 5 to 10 business days.</p>
            </div>
            <div className="time__ship">
              <i class="fa-solid fa-truck-fast"></i>
              <p>Hoorey ! This item ships free to the US</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profuct__information"></div>
    </div>
  );
}

export default Product;
