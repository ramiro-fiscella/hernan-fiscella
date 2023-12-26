import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import WorkSections from "./components/WorkSections/WorkSections";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:category" element={<Work />} />
          <Route path="/work/:category" element={<WorkSections />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
