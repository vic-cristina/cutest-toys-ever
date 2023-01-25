import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sliders from "./components/Sliders";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      {" "}
      <div data-theme="mytheme" className="flex flex-col items-center">
        <Navbar />
      </div>
      <div id="main-container" className="flex justify-center flex-wrap">
        <div
          id="sliders-container"
          className="flex flex-col items-start w-96 p-5 flex-wrap gap-1 max-sm:gap-2"
        >
          <Sliders />
          <Sliders />
        </div>
        <ProductGrid />
        <Cart />
      </div>
    </>
  );
}

export default App;
