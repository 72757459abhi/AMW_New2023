import React, { useState } from 'react'
import "../cssFile/Header.css";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation()

  const [toggelerState, setToggelerState]=useState(true)

  const toggelerFun = ()=>{
    setToggelerState(!toggelerState)
  }

  return (
    <>
      <header className={"header"}>

        
        <h1> 
        <NavLink to="/">Aakash Metal Works</NavLink>

        </h1>

        <div className='toggelerContainer' onClick={()=> toggelerFun()}>
          <span className='spanline'></span>
          <span className='spanline'></span>
          <span className='spanline'></span>
          

        </div>
        <nav className={toggelerState ? 'list' : "list2"} onClick={()=> toggelerFun()}>
          <ul >
             
            <li >
              <NavLink className={location.pathname==='/' ? "activeClass" : ""} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={location.pathname==='/product' ? "activeClass" : ""} to="/product">Products</NavLink>
            </li>
            <li>
              <NavLink className={location.pathname==='/about' ? "activeClass" : ""} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={location.pathname==='/contact' ? "activeClass" : ""} to="/contact">Contact</NavLink>
            </li>

            <li>
              <NavLink className={location.pathname==='/faq' ? "activeClass" : ""} to="/faq">Knowledge Centre</NavLink>
            </li>

            {
              props.isLoggedIn ? 

            <li>
              <NavLink className={location.pathname==='/adminDashboard' ? "activeClass" : ""} to="/adminDashboard">AdminDashboard</NavLink>
            </li>
            : ""
             }


            {/* {
              props.isLoggedIn ? 
              <NavLink to='/'>
              <button onClick={ () => props.onLogIn()}>Log Out</button>
              </NavLink>
            :
            <NavLink to='/auth'>
              <button>Log In</button>
              </NavLink>
           
            } */}
            
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;

// activeClassName={activeClass}
