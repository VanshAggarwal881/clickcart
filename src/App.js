import React from "react";
import Home from "./components/Home";
import { Link, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    <div
      className="
    h-screen w-screen flex"
    >
      <Link
        to="/"
        className="py-2 px-5 ml-4 mt-5 h-[42px] border rounded border-red-200 text-red-300 absolute left-[16.8%]"
      >
        Home
        {/* kisi category me se home pr jaana ho to category me undefined aa jayga to home me jaakr fix karo  */}
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
