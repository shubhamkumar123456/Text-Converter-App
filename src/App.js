// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


// let name = "shubham";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

const showAlert =(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null)
  }, 1500);
}

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#023020";
      showAlert("Dark mode has been enabled","sucess")
      document.title="online text editior- Dark mode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","sucess")
      document.title="online text editior- Light mode"
    }
  };

  return (
    <>
     
      {/* <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </nav>
  <div className="container">
    <h1>hello {name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam temporibus deleniti quidem. Doloribus nobis asperiores blanditiis, earum sunt laborum veniam aperiam magni vero perferendis deleniti fugit, unde accusantium quis dolores! Quasi tenetur dicta culpa natus ad eius ullam autem ipsum.</p>
  </div> */}
   <Router>
      <Navbar
        title="ConvertText"
        another="about us"
        mode={Mode}
        togglemode={toggleMode}
      />
      <Alert alert={alert}/>
    
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About/>
          </Route>

          <Route exact path="/">
          <Textform heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert} />
          </Route>
        </Switch>
        
      </div>
      </Router>
    </>
  );
}


export default App;
