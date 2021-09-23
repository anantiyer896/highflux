import React from 'react';
import '../Style/Navbar.css'; 


export default function Navbar(page) {
  
   
    return (
        <div >
            <nav className="navbar" >
                <ul className="navbarContent">
                        {console.log(page)}
                        
                        <li type="none" className="items"><a href="./" 
                        className="nav-items" 
                        style={{"textDecoration":"none", 'padding': '0.5rem', 
                        /*"borderBottom":((page.page=="home")?"0.3rem solid red":"none")*/
                        }}>
                            Home
                        </a></li>
                    
                        <li type="none" className="items"><a href="./dashboard" 
                        className="nav-items" 
                        style={{"textDecoration":"none",'padding': '0.5rem',
                       /* "borderBottom":((page.page=="dashboard")?"0.3rem solid red":"none")*/}}>
                            Dashboard
                        </a></li>
                    
                    
                </ul>
            </nav>
        </div>
    )
}
