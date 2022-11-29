import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./screens/Home";
import Contact from "./screens/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts/" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
