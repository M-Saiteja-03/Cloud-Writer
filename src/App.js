import './App.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  const isAuthenticated=()=>{
    console.log(!!localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className="container my-3" >
        <Routes>
          <Route exact path="/" element={isAuthenticated()? <Home />:<Navigate to="/login"/> } />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={isAuthenticated() ? <About /> : <Navigate to="/login" />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;