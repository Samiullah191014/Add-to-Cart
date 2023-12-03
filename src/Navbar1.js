import React from "react";
import {NavLink} from "react-router-dom";
import App from "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {SiYourtraveldottv} from "react-icons/si";



window.addEventListener("scroll",()=>{
  document.querySelector(".navbar").classList.toggle("window-scroll",window.scrollY>0)
})


const Navbar1 = () => {

  
  return (
    <>
    <div className="container-fluid " >
    <nav className="navbar navbar-expand-lg bg-primary  ">
      <NavLink className=" text-light p-3 font-weight-bold size" to="/">
       <SiYourtraveldottv/> Winter Tour
      </NavLink>
    
      <div className="collapse navbar-collapse" >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active ">
            <NavLink className="nav-link text-light red " to="/">
              Home 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light red" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light red" to="/contact">
              Contact
            </NavLink>
          </li>
          
          <li className="nav-item">
          <NavLink className="nav-link text-light red" to="/gallery">Gallery</NavLink>
          </li>

          <li className="nav-item">
          <NavLink className="nav-link text-light red" to="/news">News</NavLink>
          </li>
         
        </ul>
      </div>
    </nav>
    </div>
    
    </>
  );
};

export default Navbar1;










