import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>BookBasket</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <InstagramIcon fontSize="large" />
        <PinterestIcon fontSize="large" />
        <WhatsAppIcon fontSize="large" />
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
        <p>~Made with ❤️ by Siddharth</p>
      </div>
    </div>
  );
};

export default Footer;
