import Alert from "./Alert";
import "./App.css";
// import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import Textform from "./Textform";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark"); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null); //whether dark mode is enable or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
 

  const toggleMode = () => {
    
    
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("DarkMode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("LightMode has been enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtilsMJ..." mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route path="/about">
            <AboutUs/>
          </Route>

          <Route path="/">
            <Textform
              heading="Enter the text here to analyse"
              showAlert={showAlert}
              mode={mode}
              toggleMode={toggleMode}
            />
          </Route> */}
          {/* <Route exact path="/" element={ */}
          <Textform heading="Enter the text here to analyse"
              showAlert={showAlert}
              mode={mode}
              toggleMode={toggleMode} />
              {/* } /> */}
        {/* <Route exact path="/about" element={<AboutUs />} /> */}
        {/* <Route path="/contact" element={< />} /> */}
        {/* </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
