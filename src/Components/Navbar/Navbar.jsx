import React, { useState } from "react";
import "./Navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("1");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>BookBasket</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("1");
          }}
        >
          Shop
          {menu === "1" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("2");
          }}
        >
          Fiction{menu === "2" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("3");
          }}
        >
          Non-fiction{menu === "3" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("4");
          }}
        >
          Children{menu === "4" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <ShoppingCartOutlinedIcon fontSize="large" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
