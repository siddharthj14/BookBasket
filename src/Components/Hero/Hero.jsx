import React from "react";
import "./Hero.css";
import EastIcon from '@mui/icons-material/East';
import books from "../../assets/books.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>DISCOVER YOUR NEXT GREAT READ</h2>
        <div>
          <div className="hero-hand-icon">
          </div>
          <p>Explore our latest book collections</p>
          <p>for all ages and interests</p>
        </div>
        <div className="btn">
          <div>Browse Now</div>
          <EastIcon/>
        </div>
      </div>
      <div className="hero-right">
        <img src={books} alt="Books" />
      </div>
    </div>
  );
};

export default Hero;
