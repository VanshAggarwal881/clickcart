import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../utils/axios";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";

function Details() {
  const nav = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [product, setproduct] = useState(null);
  const { id } = useParams();
  // async function getsingleproduct() {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     console.log(data);
  //     setproduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  useEffect(() => {
    if (!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    }
  }, []);

  const DeleteHandler = (id) => {
    // ye fileterd products me jo not equal to id hai iska matlab ye hai ki jo id match nhi ho rhi hai delete click hne par wo set karne hai isiliye wo saare items variable array form me aa jayenge or usko local storage me bhi pass kardo taaki wha se bhi update ho jay.
    const filteredProducts = products.filter((p) => p.id !== id);
    console.log(filteredProducts);
    setproducts(filteredProducts);

    localStorage.setItem("products", JSON.stringify(filteredProducts));

    nav("/");
  };
  return product ? (
    <div className="w-[70%] flex h-full justify-between items-center m-auto p-[10%]">
      <img
        className="object-contain h-[80%] w-[40%]"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl"> {product.title}</h1>
        <h3 className="text-zinc-400 my-5">{product.category}</h3>
        <h2 className="text-red-300 mb-3 font-semibold text-xl">
          $ {product.price}
        </h2>
        <p className="mb-8">{product.description}</p>
        <Link
          to={`/edit/${product.id}`}
          className="mr-8 py-2 px-5 border rounded border-blue-200 text-blue-400 text-xl"
        >
          Edit
        </Link>
        <button
          onClick={() => DeleteHandler(product.id)}
          className="py-2 px-5 border rounded border-red-200 text-red-400 text-xl"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Details;
