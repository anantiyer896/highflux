import React from 'react'
import '../App.css';
import '../Style/home.css'; 
import Navbar from './Navbar.js'
import highflux from "../images/HIGHFLUX.png"
import line from "../images/Group 596.png"

export default function Home() {
    return (
        <div className="home">
            <Navbar/>
            <div className="hero-banner">
                <img height="3vh" width="7vw" src={highflux} />
                <img  src={line} />
            </div>
        </div>
    )
}
