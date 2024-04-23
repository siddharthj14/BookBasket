import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = (props) => {
  console.log(useContext(ShopContext));
  const { products } = useContext(ShopContext);
  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <div className="shop-category">
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <ArrowDropDownIcon />
        </div>
      </div>
      <div className="shopcategory-products">
        {products.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
