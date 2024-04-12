
// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import Preloader from "../src/Components/Pre";
import NavBar from "./Components/NavBar";
import Home1 from "./Components/Home/Home1";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer";
import ResumeNew from "./Components/Resume/ResumeNew";
import { BrowserRouter as Router,Route,Routes,Navigate } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumeNew />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;