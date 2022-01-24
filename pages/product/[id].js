/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { productDetail } from "../../src/data";

const Product = ({ product }) => {
  return (
    <div>
      <div className="fullscreen">
        <div className="product">
          <div className="img">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details">
            <div className="inner">
              <Link passHref href="/">
                <div>
                  <a className="go-back">Back to products</a>
                </div>
              </Link>
              <div>
                <span className="category">Protein</span>
              </div>
              <h1>{product.name}</h1>
              <p>{product.details}</p>
              <div className="additional">
                <span>Soy Free</span>
                <span>Gluten Free</span>
              </div>
              <div className="qty-price">
                <div className="qty">
                  <div className="minus">-</div>
                  <div className="amount">1</div>
                  <div className="add">+</div>
                </div>
                <span className="price">{product.price}</span>
              </div>
              <div className="btn-row">
                <button className="add-to-cart"> Add to cart</button>
                <button className="subscribe"> Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.getInitialProps = async function (context) {
  const { id } = context.query;
  const product = productDetail[id];
  return { product };
};

export default Product;
