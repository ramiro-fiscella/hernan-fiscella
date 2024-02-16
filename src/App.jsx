import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import WorkSections from "./components/WorkSections/WorkSections";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Work />} />
          <Route path="/:category" element={<WorkSections />} />
          <Route path="/:category/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
