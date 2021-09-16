import React from 'react';
import '../Style/Navbar.css'; 


export default function Navbar() {
    const [home, setHome] = React.useState(true);
    return (
        <div >
            <nav className="navbar" >
                <ul className="navbarContent">
                    
                        <li type="none" className="items"><a href="#" className="nav-items" style={{"textDecoration":"none", 'padding': '0.5rem'}}>Home</a></li>
                    
                        <li type="none" className="items"><a href="#" className="nav-items" style={{"textDecoration":"none", 'padding': '0.5rem'}}>Dashboard</a></li>
                    
                    
                </ul>
            </nav>
        </div>
    )
}
