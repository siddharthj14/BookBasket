import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import {ShopContext} from "../Context/ShopContext";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = products.find((e) => e.id == productId);
  return <div>
    <Breadcrum product={product}/>
    <ProductDisplay product={product}/>
    <DescriptionBox/>
    <RelatedProducts product={product}/>
  </div>;
};

export default Product;
