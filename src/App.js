import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// line no. 3 mai jsx specifying attributes hai aur esse ko 35 line mai show kiya hai

function App() {
  // whether dark mode is enabled or not
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    // it is a logic esse 3000 etne time mai alert hat jayega show nhi hoga
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeBodyClasses= () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  };
  const toggleMode = (cls) => {
    
    removeBodyClasses();

    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // line no. 32 aur 38 mai page ka title change hoga agar darkmode hai toh yeh likha aayega
      // document.title = "textutils-darkmode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "textutils-lightmode";
    }
  };
  return (
    // 1. yeh jo div className  likha hai jhah se </div> yah tak ko jsx bolte hai and jsx are not a javascript it is a html but it wear crown(mukut) of javascript

    //2. agar hum div classname ko start karne se phele koi aur tag use karna chatte hai toh jaise <h1></h2> toh yeh error dega kuki 2 tag ek sath nhi kjol sakte uske liye hume  react k fragment use karna padega <>... </> (fragmantaiton)

    // 3. yeh jo return k andar code likha hai bo hume phele se available hai esse hatake hum khudka code bhi likh sakte hai
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with harry
    //     </a>
    //   </header>
    // </div>
    <>
       <Router>
        <Navbar title="textutils2" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* eder exact use esilye kkiya gya hai kuki exact path par file par leke jata hai */}
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading=" Try Textutils- word counter, character coutner remove extra space" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;