import React, { createContext, useEffect, useState } from "react";
import axios from "./axios";
export const ProductContext = createContext();

function Context(props) {
  const [products, setproducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );
  console.log(products);

  // the code present below is commented out at the final stage as initially we were taking the data from api call using axios but it was not possible to add or delete data in api so we saved the date in local storage first then took from there using getItem.

  // 1st statement changed : no commenting the code below , for safety
  async function getproducts() {
    try {
      const { data } = await axios("/products");
      //   console.log(data);
      setproducts(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(products);
  useEffect(() => {
    getproducts();
  }, []);

  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
