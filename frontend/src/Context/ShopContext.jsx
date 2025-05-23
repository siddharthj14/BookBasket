import { createContext, useEffect, useState } from "react";
import products from "../assets/products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 301; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch("http://localhost:4000/getproducts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (let index = 0; index < products.length; index++) {
      if (cartItems[index] > 0) {
        totalAmount += products[index].new_price * cartItems[index];
      }
    }
    return totalAmount;
  };
  const getTotalCart = () => {
    let count = 0;
    for (let index = 0; index < products.length; index++) {
      if (cartItems[index] > 0) count += cartItems[index];
    }
    return count;
  };

  const contextValue = {
    getTotalCart,
    getTotalCartAmount,
    products,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
