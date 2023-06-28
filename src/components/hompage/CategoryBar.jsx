import React from "react";
import { NavLink } from "react-router-dom";

const categories = [
  "🤍Saved",
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Books",
  "Beauty",
  "Toys & Games",
  "Sports & Outdoors",
  "Health & Wellness",
  "Automotive",
  "Jewelry",
];

const CategoryBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav smaller-font">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact activeclassname="active">
              Home
            </NavLink>
          </li>
          {categories.map((category, index) => (
            <li className="nav-item" key={index}>
              <NavLink
                className="nav-link"
                to={`/category${index + 1}`}
                activeclassname="active"
              >
                {category}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default CategoryBar;
