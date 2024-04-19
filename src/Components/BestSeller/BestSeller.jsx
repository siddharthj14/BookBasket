import React from "react";
import "./BestSeller.css";
import data_product from "../../assets/data";
import Item from "../Item/Item";

const BestSeller = () => {
  return (
    <div className="bestseller">
      <h1>Best Sellers</h1>
      <hr />
      <div className="bestseller-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              img={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSeller;
