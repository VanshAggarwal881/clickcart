import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

function Home() {
  const [products] = useContext(ProductContext);
  // console.log(products);
  // handling category items from here
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  // console.log(category);
  const [filteredProducts, setfilteredProducts] = useState(null);

  async function getproductscategory() {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      // console.log(data);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      // category undefined isiliye put kia hai yha par kyuki home link undefined save kar rha tha category me jisse ye home par nhi aa rha tha
      setfilteredProducts(products);
    if (category != "undefined") {
      // getproductscategory();

      // getproductscategory ko comment out krdia kyuki hame category filter me local storage ka data dena tha taaki newly added products filter out ho sake.
      setfilteredProducts(products.filter((p) => p.category == category));
    }
  }, [category, products]);
  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => {
            return (
              <Link
                key={p.id}
                to={`/details/${p.id}`}
                className=" card mr-7 mb-5  border border-gray-200 shadow rounded w-[20%] h-[40vh] flex-col flex justify-center items-center text-center cursor-pointer"
              >
                <div
                  className="hover:scale-105 mt-5 mb-5 w-full h-[80%] bg-contain bg-no-repeat bg-center"
                  style={{
                    backgroundImage: `url(${p.image})`,
                  }}
                ></div>
                <h1 className="m-2 hover:text-blue-300">{p.title}</h1>
              </Link>
            );
          })}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
