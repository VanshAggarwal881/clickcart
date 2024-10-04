import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const nav = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const { id } = useParams();
  const [editproduct, seteditproduct] = useState(null);

  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  // Fetch the product to edit and set the form values
  useEffect(() => {
    const productToEdit = products.find((p) => p.id == id);
    if (productToEdit) {
      seteditproduct(productToEdit);
      settitle(productToEdit.title);
      setimage(productToEdit.image);
      setcategory(productToEdit.category);
      setprice(productToEdit.price);
      setdescription(productToEdit.description);
    }
  }, [id, products]);

  // Update the product information and save to localStorage
  function UpdateProductHandler(e) {
    e.preventDefault();

    // Perform input validation; make sure to skip trim for price as it's a number.
    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price === "" || // Make sure price is not empty, but skip .trim() for numbers
      description.trim().length < 5
    ) {
      alert("All input fields are required.");
      return;
    }

    const updatedProduct = {
      id,
      image,
      title,
      category,
      price, // No need for trim, just assign the value as is
      description,
    };

    // Update the product in the products array
    const updatedProducts = products.map((p) =>
      p.id === id ? updatedProduct : p
    );

    setproducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    nav("/");
  }

  return (
    <form
      onSubmit={UpdateProductHandler}
      className=" flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="mb-5 w-1/2 text-3xl font-semibold ">Update Information</h1>
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
          Update Product
        </button>
      </div>
    </form>
  );
}

export default Edit;
