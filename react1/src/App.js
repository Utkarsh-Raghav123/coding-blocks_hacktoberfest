import { useState } from "react";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import Text from "./component/Text";
import React from "react";
import { Route, Routes } from "react-router";

function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");

      document.body.style.backgroundColor = "#042743";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#07BE63";
    }
  };
  return (
    <>
      <Navbar Title="text" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3 ">
        <Text mode={mode} heading="enter your text here for analyzing" />
      </div>
      <div className="container">
      <Routes>
        
          <Route path="/about" element={<About />}></Route>

          {/* <Route path="/"></Route> */}
        
      </Routes>
      </div>
    </>
  );
}

export default App;
