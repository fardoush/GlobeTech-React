import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Services } from "./components/Services/Services";

const App = () => {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/service" element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
