
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has Been enabled","success");
      document.title="Text Utils-Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has Been enabled","success");
      document.title="Text Utils-Light Mode";
    }
  }
  return (
    <>
    {/* <Router> */}

    <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
    <div className="container" my-3="True">
    <Alert alert={alert}/>
    {/* <Switch>
      <Route exact path="/about">
        <About />
      </Route> */}
      {/* <Route exact path="/"> */}
        <TextForm  showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/>  
      {/* </Route> */}
    {/* </Switch> */}

    </div>
    
    {/* </Router> */}
    </>
  );
}

export default App;
