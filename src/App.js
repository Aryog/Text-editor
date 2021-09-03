// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textfile from './components/Textfile';
import Alert from './components/Alert';
// Part of the react router to go default paths
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//It is the main app so handles all the exports of other components
function App() {
  // Setting the states in react 
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  // Setting the showAlert function as object 
  const showAlert=(message,type)=>{
    setalert(
      {msg : message,
      type: type,}
    );
    //Time out of the alert function
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const [pallete, setpallete] = useState("success");
  const toogleRed=()=>{
    if (pallete==="success" || pallete==="primary") {
      setpallete('warning');
      document.body.style.backgroundColor ='red';
    }
  }
  const toogleDefault=()=>
  {
    if(pallete==='warning' || pallete==='primary')
    {
      setpallete('success');
      document.body.style.backgroundColor ='white';
    }
  }
  const toogleBlue=()=>{
    if (pallete==='success' || pallete==='warning') {
      setpallete('primary');
      document.body.style.backgroundColor="blue";
    }
  }
  const toogleState=()=>
  {
    if (mode==='dark') {
    setmode("light");
    document.body.style.backgroundColor = "white";     
    showAlert("Dark Mode is Disabled!","success");
    
    }
    else if (mode==='light'){
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark Mode is Enabled!","success");
      document.title ='Yogesh_Utils - Dark Mode';
    }
  }
  return (
    //to return what is to be rendered first and return to index 
    <>
    {/* React router is not supported in github pages */}
    {/* <Router> */}
    <Navbar title="Yogesh_Utils" aboutText="About us" Wmode={mode} toogleState={toogleState} toogleRed={toogleRed} toogleDefault={toogleDefault} toogleBlue={toogleBlue}/>
    <div className="container">
    <Alert Alert={alert}/>
    {/* <Switch>
          <Route exact path="/about">
            <About Wmode={mode}/> */}
          {/* </Route>
          <Route exact path="/"> */}
              <Textfile heading="Enter the text:" Wmode={mode} showAlert={showAlert}/>
          {/* </Route>
    </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
