import React from 'react';
import Header from '../components/Header';
import iris from "../images/Iris.png";
import medusa from "../images/medusa.png";
import poseidon from "../images/poseidon.png";
import zeus from "../images/zeus.png";
import Hf from '../images/hf.png';
import {Link} from "react-router-dom";

// CSS imports
import '../styles/header.css'; 
import '../styles/home.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

function Home() {
    
    return (
        <div style={{minHeight: "100vh"}}>
            <Header/>
            <div className="d-flex justify-content-center" style={{margin:"0 auto"}}>
                <img src={Hf} style={{marginBottom:"-4vh", marginTop:"2vh"}} className="hero-img" height="65vh" alt="loading error" />
            </div>
            <div className="d-flex justify-content-center">
                <Link to="houses/Iris"><img  style={{margin:"2vh 3vw", height:"7rem", width:"7rem"}} src={iris}  /></Link>
                <Link to="houses/Medusa"><img  style={{margin:"2vh 3vw", height:"7rem", width:"7rem"}} src={medusa} /></Link>
                <Link to="houses/Zeus"><img style={{margin:"2vh 3vw", height:"7rem", width:"7rem"}} src={zeus} /></Link>
                <Link to="houses/Poseidon"><img style={{margin:"2vh 3vw", height:"7rem", width:"7rem"}} src={poseidon} /></Link>
            </div>
            <div className="d-flex justify-content-center">
                <h2 className="display-1 text-light" style={{fontFamily: 'Stalemate', fontSize:"4rem", marginTop:"2vh"}}>House of Heroes</h2>
            </div>
            
            
        </div>
    )
}

export default Home

