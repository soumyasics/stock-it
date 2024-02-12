import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/common/Home/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/*" element={"<h1> 404 </h1>"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
