import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Test from './Components/Test';



export default function App() {
  const [darkMode, setDarkMode] = useState("light");

  const [dark, setDarkText] = useState("DarkMode");

  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  let togglemode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      setDarkText("LightMode");
      document.body.style.background = "#0b0b64";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "The East - DarkMode";
    } else {
      setDarkMode("light");
      setDarkText("DarkMode");
      document.body.style.background = "rgba(0, 60, 255,.4)";
      showAlert("Light Mode has been enabled", "success");
      document.title = "The East - LightMode";
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="The East" about="About" modeTitle={dark} mode={darkMode} toggleMode={togglemode} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<Form title="Enter the Text" showAlert={showAlert} mode={darkMode} />} />
          <Route path="/about" element={<About mode={darkMode}/>} />
        </Routes>
      </BrowserRouter>


        {/* <Navbar title="The East" about="About" modeTitle={dark} mode={darkMode} toggleMode={togglemode} />
        <Alert alert={alert} />
        <Form title="Enter the Text" showAlert={showAlert} mode={darkMode} /> */}


    </>
  );
}


