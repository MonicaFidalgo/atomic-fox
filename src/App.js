import "./App.css";
import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Blog from "./components/Blog/Blog";
import Skills from "./components/Skills/Skills";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1200);
  }, []);
  return (
    <div>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Blog />
        <Footer />
      </div>
    </div>

  );
}

export default App;
