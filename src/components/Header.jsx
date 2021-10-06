import React from 'react'; 
import { NavLink } from 'react-router-dom';
import Hf from '../images/hf.gif'; 
import hrc_logo from "../images/hrc_logo.png"


function Header() {

    return (
        <ul  className="nav navbar-fixed nav-pills d-flex justify-content-center sticky-top" style={{width:"100%"}}>
  <li role="presentation" style={{margin:"0 0.5vw"}} className="nav-item"><img src={hrc_logo} style={{height:"2.1rem", width:"10rem", marginRight:"10vw", marginLeft:"-17vw", marginTop:"3.2vh"}} alt="the Logo" /></li>
  
  <li role="presentation" style={{margin:"0 0.5vw"}} className="nav-item text-link"><NavLink to='/' style={{fontSize:"1rem"}} exact className="nav-link">Domus</NavLink></li>
  <li role="presentation" style={{margin:"0 0.5vw"}} className="nav-item text-link"><NavLink to='/scores' style={{fontSize:"1rem"}} className="nav-link">Stele</NavLink></li>
  <li role="presentation" style={{margin:"0 0.5vw"}} className="nav-item"><img src={Hf} style={{height:"4rem", width:"6rem"}} alt="the Logo" /></li>
  <li role="presentation" style={{margin:"0 0.5vw"}} className="nav-item text-link"><NavLink to='/about' style={{fontSize:"1rem"}} className="nav-link">About</NavLink></li>
  <li role="presentation" style={{margin:"0 0.5vw"}} className="nav-item text-link"><NavLink to='/dashboard' style={{fontSize:"1rem"}} className="nav-link">Find Your Fellowship</NavLink></li>
  
  
</ul>
    )
}

export default Header
