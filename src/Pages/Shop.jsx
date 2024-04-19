import React from "react";
import Hero from "../Components/Hero/Hero";
import BestSeller from "../Components/BestSeller/BestSeller";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Footer from "../Components/Footer/Footer";

const Shop = () => {
  return (
    <div>
      <Hero />
      <BestSeller />
      <Offers />
      <NewCollections />
      <NewsLetter/>
      <Footer/>
    </div>
  );
};

export default Shop;
