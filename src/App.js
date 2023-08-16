import React from 'react'
import Headers from "./components/jsFile/Header";
import Headers1 from "./components/jsFile/Header1";
import Home from "./components/jsFile/Home";
import Product from './components/jsFile/Product'
import Sales from './components/jsFile/Sales'
import AdminDashboard from './components/jsFile/AdminDashboard'
import Footer from './components/jsFile/Footer'
import Contact from './components/jsFile/Contact'
import FAQ from './components/jsFile/Faq'
import About from './components/jsFile/About'
import Auth from './components/jsFile/Auth'
import UserCreation from './components/jsFile/UserCreation'

// import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function App() {

  // const refresh = () => window.location.reload(true)

  const location = useLocation()

  const [isLoggedIn, setIsLoggedIn]=useState(false)

  const loggedInFun =()=>{
      setIsLoggedIn(!isLoggedIn)
  

  }
  
  return (
    <>
    {/* <div><Headers1 /></div> */}
     
        <Routes>
          <Route path="/" element={<Headers isLoggedIn = {isLoggedIn} onLogIn={loggedInFun}/>}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="sales" element={<Sales />} />
            <Route path="adminDashboard" element={<AdminDashboard />} />
            <Route path="userCreation" element={<UserCreation />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="auth" element={<Auth onLogIn={loggedInFun}/>} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>

      <div><Footer /></div>
    </>
  );
}

export default App;
