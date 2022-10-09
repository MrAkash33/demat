import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import App from "./App";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
const Routeser = () => {
    return(
        <>
             <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<ContactUs />} />
                </Routes>
        </>
    )
}

export default Routeser