import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Home />
    </>
  );
}

export default App;
