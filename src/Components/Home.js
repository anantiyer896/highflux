import React from 'react'
import '../App.css';
import '../Style/home.css'; 
import Navbar from './Navbar.js'
import highflux from "../images/highflux.png"


export default function Home() {
    return (
        <div className="home">
            <Navbar/>
                <img className="hero-banner" src={highflux} />
        </div>
    )
}
