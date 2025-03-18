import React, { useState, useEffect } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from "./components/Alert";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [redmode, setredmode] = useState("light");

  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  let togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      showalert("Light Mode enable", "success");
      // document.title = "TextEditor-Light mode";       //Not Needed
    } else {
      setMode("dark");
      showalert("Dark Mode enable", "success");
      // document.title = "TextEditor-Dark mode"         //Not Needed
    }
  };

  let togglemode1 = () => {
    if (redmode === "red") {
      setredmode("light");
      showalert("Light Mode enable", "success");
    } else {
      setredmode("red");
      showalert("Red Mode enable", "success");
    }
  };

  useEffect(() => {
    document.body.className = `${mode} ${redmode}`; // Apply class based on mode
  }, [mode, redmode]);

  return (
    <>
    {/* <Router> */}

      <Navbar
        titlex={"TextUtiles"}
        abouttext="About"
        dropdown="List"
        mode={mode}
        redmode={redmode}
        togglemode={togglemode}
        togglemode1={togglemode1}
      />


      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/" element={<TextForm heading="Enter Your Thought" mode={mode} showalert={showalert} />} /> */}
      {/* </Routes> */}
   <TextForm heading="Enter Your Thought" mode ={mode} showalert ={showalert}> </TextForm>
      </div>

    
     

    
      {/* </Router> */}
    </>
  );
}

export default App;
