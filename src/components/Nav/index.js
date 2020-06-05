import React, { useState } from "react";
import "./style.css";

import osiris from "../Nav/Mimyr.png"

import API from "../../utils/adminAPI";


function Nav() {


  const [osirisIP, setOsirisIP] = useState('');

  API.osirisTest()
  .then((res) => {
   //console.log(res);
   
   setOsirisIP(res.data)
   console.log(osirisIP)
 
  })




  return (
    <nav className="navbar navbar-dark bg-dark">
    
      <div className="navbar-brand logo center aligned container" href="/">
      
     
      
      <div className="container">
  <div className="row">
    <div className="col">
    <img className="osiris" src={osiris} alt="osiris logo"></img> 
    </div>
    <div className="col">
    <div className="mymyrBrand"><span className="mymyrTitle">Intelio</span> <span className="mymyrDivider">|</span> <span className="mymyrOsiris">Network Console</span></div>
    
    </div>
  </div>
  <div className="ipConnect">Connected to: { osirisIP }</div> 
  </div>
 
  </div>

  

    </nav>
  );
}

export default Nav;
