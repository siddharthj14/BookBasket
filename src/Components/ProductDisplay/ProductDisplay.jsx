import React from "react";
import "./ProductDisplay.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img src={product.image} alt="" className="productdisplay-main-img" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarBorderIcon />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                ₹{product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
                ₹{product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, reprehenderit neque maxime velit pariatur dolorum reiciendis rem veritatis aliquam culpa autem. Dolore omnis suscipit minima?
        </div>
        <button>ADD TO CART</button>
        <p className="prodctdisplay-right-category"><span>Category : </span>Lorem ipsum dolor sit amet.</p>
        <p className="prodctdisplay-right-category"><span>Category : </span>Lorem, ipsum dolor.</p>
      </div>

    </div>
  );
};

export default ProductDisplay;
