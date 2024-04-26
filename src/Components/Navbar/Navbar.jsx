import React, { useState, useContext } from "react";
import "./Navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { products, cartItems } = useContext(ShopContext);
  const cartCount = () => {
    let count = 0;
    for (let index = 0; index < products.length; index++) {
      if (cartItems[index] > 0) count += cartItems[index];
    }
    return count;
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>BookBasket</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" className="links">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("fiction");
          }}
        >
          <Link to="/fiction" className="links">
            Fiction
          </Link>

          {menu === "fiction" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("non-fiction");
          }}
        >
          <Link to="/non-fiction" className="links">
            Non-Fiction
          </Link>
          {menu === "non-fiction" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("children");
          }}
        >
          <Link to="/children" className="links">
            Children
          </Link>
          {menu === "children" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login" className="links">
          <button>Login</button>
        </Link>
        <Link to="/cart" className="links">
          <ShoppingCartOutlinedIcon fontSize="large" />
        </Link>
        <div className="nav-cart-count">{cartCount()}</div>
      </div>
    </div>
  );
};

export default Navbar;
