import React, { createContext, useState, useEffect } from "react";
const UserContext = createContext();

const UserProvider = (props) => {
  const [productList, setProductList] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const getProductList = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProductList(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  const handleAddProduct = (product) => {
    const ProductExist = cartItem.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  return (
    <UserContext.Provider
      value={{ productList, setProductList, handleAddProduct, cartItem }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
