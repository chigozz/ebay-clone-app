import React from "react";
import { Link } from "react-router-dom";
import product1 from "../../assets/product1.webp";
import product2 from "../../assets/product2.webp";
import product3 from "../../assets/product3.jpg";
import product4 from "../../assets/product4.webp";
import product5 from "../../assets/product5.jfif";
import product6 from "../../assets/product6.jpg";
import forwardarrow from "../../assets/forward-arrow.png"

import './ExploreProducts.css'; // Import your CSS file for styling

const ExploreProducts = () => {
  return (
    <div className="explore-container">
      <h3>Explore popular products</h3>
      <div className="product-list">
        <div className="product-circle">
          <img src={product1} alt="Product 1" />
        </div>
        <div className="product-circle">
          <img src={product2} alt="Product 2" />
        </div>
        <div className="product-circle">
          <img src={product3} alt="Product 3" />
        </div>
        <div className="product-circle">
          <img src={product4} alt="Product 4" />
        </div>
        <div className="product-circle">
          <img src={product5} alt="Product 5" />
        </div>
        <div className="product-circle">
          <img src={product6} alt="Product 6" />
        </div>
        <div className="product-circle last-circle">
          <div className="see-more">See more<img src = {forwardarrow} className="forward-icon"/></div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
