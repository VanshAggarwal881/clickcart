import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

function Create() {
  const nav = useNavigate();
  // yha productcontext isiliye laya gya hai taaki jo addednewproduct hai usko existing array me add krke wpas bhj de taaki wo other products k saath show ho jaay.
  const [products, setproducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  function AddproductHandler(e) {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 5 ||
      description.trim().length < 5
    ) {
      alert("input field required*");
      return;
    }
    const newAddedproduct = {
      id: nanoid(),
      image,
      title,
      category,
      price,
      description,
    };
    setproducts([...products, newAddedproduct]);
    // console.log(products);
    // after all api shit , yha par set kar rhe hain local storage me data ko , on context.js me get kar rhe hain data ko.
    localStorage.setItem(
      "products",
      JSON.stringify([...products, newAddedproduct])
    );

    nav("/");
  }
  return (
    <form
      onSubmit={AddproductHandler}
      className=" flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl ">Add New Product</h1>
      <input
        type="url"
        placeholder="image link"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />

      <input
        type="text"
        placeholder="title"
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />

        <input
          type="number"
          placeholder="price"
          className="text-2xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        className="text-2xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
        placeholder="enter product description"
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-200 text-blue-300 hover:text-blue-500">
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;
