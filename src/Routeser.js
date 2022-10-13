import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import App from "./App";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import Support from "./pages/Support";

const Routeser = () => {
    return(
        <>
             <Routes>
                    <Route path="/" element={<App />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<ContactUs />} />
                    <Route exact path="/products" element={<Products />} />
                    <Route exact path="/support" element={<Support />} />
                </Routes>
        </>
    )
}

export default Routeser