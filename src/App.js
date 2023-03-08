import "./App.css";
import Home from "./components/home";
import ScrollBtn from "./components/ScrollBtn";
import CopyRight from "./components/copyright";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/contactUs";
import LifeSkill from "./components/LifeSkill";

function App() {
  return (
    <div className="App max-w-full">
      <div className="">
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contact" element={<ContactUs />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/lifeskill" element={<LifeSkill />} />
            </Routes>
          </div>
        </Router>
        <CopyRight />
        <ScrollBtn />
      </div>
    </div>
  );
}

export default App;
