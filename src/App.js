import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import { useState } from 'react';


function App() {
  const [alert, setAlert]= useState(null);
  const isAuthenticated=()=>{
    console.log(!!localStorage.getItem('token'))
    return (
      !!localStorage.getItem('token')
    )
  }
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Alert alert={alert}/>
        <div className="container my-3" >
        <Routes>
          <Route exact path="/" element={isAuthenticated()? <Home showAlert={showAlert}/>: <Navigate to="/login"/> } />
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/about" element={isAuthenticated() ? <About /> : <Navigate to="/login" />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;