import React from 'react'
import '../Style/home.css'; 
import Navbar from './Navbar.js'
import highflux from "../images/highflux.png"


export default function Home() {
    return (
        <div >
            <Navbar page="home"/>
            <img className="hero-banner" src={highflux} />
        </div>
    )
}
