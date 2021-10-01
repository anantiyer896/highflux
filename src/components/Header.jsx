import React from 'react'; 
import { NavLink } from 'react-router-dom';
import Hf from '../images/hf.png'; 



function Header() {

    return (
        <ul className="nav navbar-fixed nav-pills d-flex justify-content-center sticky-top">

  <li role="presentation" className="nav-item text-link"><NavLink to='/' exact className="nav-link">Home</NavLink></li>

    <li role="presentation" className="nav-item"><img src={Hf} alt="the Logo" /></li>

  <li role="presentation" className="nav-item text-link"><NavLink to='/dashboard' className="nav-link">Dashboard</NavLink></li>
  
</ul>
    )
}

export default Header
