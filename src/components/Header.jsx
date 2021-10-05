import React from 'react'; 
import { NavLink } from 'react-router-dom';
import Hf from '../images/hf.gif'; 



function Header() {

    return (
        <ul  className="nav navbar-fixed nav-pills d-flex justify-content-center sticky-top">

  <li role="presentation" style={{margin:"0 1vw"}} className="nav-item text-link"><NavLink to='/' style={{fontSize:"1rem"}} exact className="nav-link">Domus</NavLink></li>
  <li role="presentation" style={{margin:"0 1vw"}} className="nav-item text-link"><NavLink to='/scores' style={{fontSize:"1rem"}} className="nav-link">Stele</NavLink></li>
    <li role="presentation" style={{margin:"0 1vw"}} className="nav-item"><img src={Hf} style={{height:"4rem", width:"6rem"}} alt="the Logo" /></li>
  
  <li role="presentation" style={{margin:"0 1vw"}} className="nav-item text-link"><NavLink to='/dashboard' style={{fontSize:"1rem"}} className="nav-link">Find Your Fellowship</NavLink></li>
  
  
</ul>
    )
}

export default Header
