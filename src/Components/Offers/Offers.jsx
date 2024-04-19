import React from "react";
import "./Offers.css";
import books from "../../assets/p1.png"

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exsclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="btn">Check Now</button>
      </div>
      <div className="offers-right">
        <img src={books} alt="" />
      </div>
    </div>
  );
};

export default Offers;
