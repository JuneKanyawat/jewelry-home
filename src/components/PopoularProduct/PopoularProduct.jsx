import React from "react";
import "./PopoularProduct.css";


function PopoularProduct() {
  const products = [
    { color: "#ffcccb", name: "Product 1" },
    { color: "#add8e6", name: "Product 2" },
  ];

  return (
    <section className="popular-section">
      <div className="container">
        <h2 className="sub-heading">Popular Products</h2>
      </div>
      <div className="container grid grid--2--cols">
        <div className="product"></div>
        <div className="product"></div>
      </div>
    </section>
  );
}

export default PopoularProduct;
