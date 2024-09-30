import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode eneabled","success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode eneabled","success");
    }
  }

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setAlert(null);},2000)
  }
  return ( 
      <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
