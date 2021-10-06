import React from 'react'
import { Link } from 'react-router-dom'
import iris from "../images/Iris.png";
import medusa from "../images/medusa.png";
import poseidon from "../images/poseidon.png";
import zeus from "../images/zeus.png";
import ReactCardFlip from 'react-card-flip';
import Header from '../components/Header';
import {Button} from 'react-bootstrap';
import "../styles/scoreboard.css"

export default function Scoreboard() {

    const [isFlippedIris, setIsFlippedIris] = React.useState(false)
    const [isFlippedMedusa, setIsFlippedMedusa] = React.useState(false)
    const [isFlippedPoseidon, setIsFlippedPoseidon] = React.useState(false)
    const [isFlippedZeus, setIsFlippedZeus] = React.useState(false)
    const handleClickIris = (e)=> {
        e.preventDefault();
        setIsFlippedIris(!isFlippedIris);
      }
      const handleClickMedusa = (e)=> {
        e.preventDefault();
        setIsFlippedMedusa(!isFlippedMedusa);
      }
      const handleClickPoseidon = (e)=> {
        e.preventDefault();
        setIsFlippedPoseidon(!isFlippedPoseidon);
      }
      const handleClickZeus = (e)=> {
        e.preventDefault();
        setIsFlippedZeus(!isFlippedZeus);
      }

    return (
        <div ><Header/>
        <div style={{padding:"5vh 0 7vh 0", marginBottom:"3vh", marginTop:"5vh", overflowY:"scroll", height:"78vh"}} className="d-lg-flex justify-content-center">
                <ReactCardFlip flipSpeedFrontToBack="2" flipSpeedBackToFront="2" isFlipped={isFlippedIris} flipDirection="horizontal"
                style={{margin:"2vh 1.5vw", textDecoration:"none"}} >
                    <figure className="houses" onClick={handleClickIris}>
                        <img  style={{margin:"0.5vh 0",  height:"19rem", width:"15rem"}} src={iris} alt="loading error"  />
                        <figcaption style={{color:"white", fontFamily:"Stalemate", fontSize:"3rem"}}>Iris</figcaption>
                    </figure >
                    <div style={{height:"19rem", width:"15rem", margin:"5vh auto 10vh auto", background:"rgba(102,102,102,0.7)", backdropFilter: "blur(10px)", color:"white", padding:"40% 3vw"}} onClick={handleClickIris}>
                        <Button className="iris"><Link to="/scores/Iris" style={{textDecoration:"none", color:"inherit", fontFamily:"Romanus"}}>Check Scores</Link><br/></Button>
                        <Button className="iris"><Link to="/houses/Iris" style={{textDecoration:"none", color:"inherit", fontFamily:"Romanus"}} className="houses">See your Members</Link></Button>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip flipSpeedFrontToBack="2" flipSpeedBackToFront="2" isFlipped={isFlippedMedusa} flipDirection="horizontal"
                style={{margin:"2vh 1.5vw", textDecoration:"none"}} >
                    <figure className="houses" onClick={handleClickMedusa}>
                        <img  style={{margin:"0.8vh 0",  height:"19rem", width:"15rem"}} src={medusa} alt="loading error" />
                        <figcaption style={{color:"white", fontFamily:"Stalemate", fontSize:"3rem"}}>Medusa</figcaption>
                    </figure>
                    <div style={{height:"19rem", width:"15rem", margin:"5vh auto 10vh auto", background:"rgba(128,207,18,0.4)", backdropFilter: "blur(10px)", color:"white", padding:"40% 3vw"}} onClick={handleClickMedusa}>
                        <Button className="medusa" ><Link to="/scores/Medusa" style={{textDecoration:"none", color:"inherit", fontFamily:"Romanus"}}>Check Scores</Link></Button>
                        <Button className="medusa"><Link to="/houses/Medusa" style={{textDecoration:"none", color:"inherit", fontFamily:"Romanus"}} className="houses">See your Members</Link></Button>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip flipSpeedFrontToBack="2" flipSpeedBackToFront="2" isFlipped={isFlippedZeus} flipDirection="horizontal"
                style={{margin:"2vh 1.5vw", textDecoration:"none", height:"10rem !important"}} >
                    <figure className="houses" onClick={handleClickZeus}>
                        <img style={{margin:"0.5vh 0",  height:"19rem", width:"15rem"}} src={zeus} alt="loading error" />
                        <figcaption style={{color:"white", fontFamily:"Stalemate", fontSize:"3rem"}}>Zeus</figcaption>
                    </figure>
                    <div style={{height:"19rem", width:"15rem", margin:"5vh auto 10vh auto", background:"rgba(202, 85, 56,0.4)", backdropFilter: "blur(10px)", color:"white", padding:"40% 3vw"}} onClick={handleClickZeus}>
                        <Button className="zeus" ><Link to="/scores/Zeus" style={{textDecoration:"none", color:"inherit", fontFamily:"Romanus"}}>Check Scores</Link></Button>
                        <Button className="zeus"><Link to="/houses/Zeus" style={{textDecoration:"none", color:"inherit", fontFamily:"Romanus"}} className="houses">See your Members</Link></Button>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip flipSpeedFrontToBack="2" flipSpeedBackToFront="2" isFlipped={isFlippedPoseidon} flipDirection="horizontal"
                style={{margin:"2vh 1.5vw", textDecoration:"none"}} >
                    <figure className="houses" onClick={handleClickPoseidon}>
                        <img style={{margin:"0.5vh 0",  height:"19rem", width:"15rem"}} src={poseidon} alt="loading error" />
                        <figcaption style={{color:"white", fontFamily:"Stalemate", fontSize:"3rem"}}>Poseideon</figcaption>
                    </figure>
                    <div style={{height:"19rem", width:"15rem", margin:"5vh auto 10vh auto", background:"rgba(79,196,247,0.4)", backdropFilter: "blur(10px)", color:"white", padding:"40% 3vw"}} onClick={handleClickPoseidon}>
                        <Button className="poseidon"><Link to="/scores/Poseidon" style={{textDecoration:"none", color:"inherit", fontFamily:"Romanus"}}>Check Scores</Link></Button>
                        <Button className="poseidon"><Link to="/houses/Poseidon" style={{textDecoration:"none", color:"inherit", fontFamily:"Romanus"}} className="houses">See your Members</Link></Button>
                    </div>
                </ReactCardFlip>
            </div>
            </div>
    )
}
