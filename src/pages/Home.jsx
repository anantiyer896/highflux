import React from 'react';
import Header from '../components/Header';
import Hf from '../images/hf.png';
import highflux from "../images/Highflux.png"

// CSS imports
import '../styles/header.css'; 
import '../styles/home.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

function Home() {
    /*
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
      }*/

    return (
        <div style={{minHeight: "100vh", overflow:"hidden"}}>
            <Header/>
            <div className="d-flex justify-content-center" style={{margin:"0 auto"}}>
                <img src={Hf} style={{marginBottom:"2vh", marginTop:"2vh"}} className="hero-img" alt="loading error" />
            </div>
            <div className="d-flex justify-content-center">
                <img src={highflux}  style={{marginBottom:"2vh", marginTop:"2vh", height:"4rem", width:"25rem"}} alt="loading error"/>
            </div>
            <div className="d-flex justify-content-center">
                <h2 className="display-1 text-light" style={{fontFamily: 'Stalemate', fontSize:"3.5rem", marginBottom:"2vh", opacity:"80%"}}>House of Heroes</h2>
            </div>
            
            {/*
            <div className="d-lg-flex justify-content-center">
                <ReactCardFlip flipSpeedFrontToBack="2" flipSpeedBackToFront="2" isFlipped={isFlippedIris} flipDirection="horizontal"
                style={{margin:"2vh 1.5vw", textDecoration:"none"}} >
                    <figure className="houses" onClick={handleClickIris}>
                        <img  style={{margin:"0.5vh 0",  height:"20rem", width:"15rem"}} src={iris}  />
                        <figcaption style={{color:"white", fontFamily:"Stalemate", fontSize:"3rem"}}>Iris</figcaption>
                    </figure >
                    <div style={{height:"18rem", width:"15rem", margin:"5vh auto 7vh auto", backgroundColor:"rgba(102,102,102,0.7)", color:"white", padding:"40% 3vw"}} onClick={handleClickIris}>
                        <h4 style={{ marginBottom:"3vh"}}><Link to="/scores/Iris" style={{textDecoration:"none", color:"white", fontFamily:"Romanus"}}>Check Scores</Link></h4>
                        <Link to="/houses/Iris" style={{textDecoration:"none", color:"white", fontFamily:"Romanus"}} className="houses">See your Members</Link>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip flipSpeedFrontToBack="2" flipSpeedBackToFront="2" isFlipped={isFlippedMedusa} flipDirection="horizontal"
                style={{margin:"2vh 1.5vw", textDecoration:"none"}} >
                    <figure className="houses" onClick={handleClickMedusa}>
                        <img  style={{margin:"0.5vh 0",  height:"20rem", width:"15rem"}} src={medusa} />
                        <figcaption style={{color:"white", fontFamily:"Stalemate", fontSize:"3rem"}}>Medusa</figcaption>
                    </figure>
                    <div style={{height:"18rem", width:"15rem", margin:"5vh auto 7vh auto", backgroundColor:"rgba(128,207,18,0.4)", color:"white", padding:"40% 3vw"}} onClick={handleClickMedusa}>
                        <h4 style={{ marginBottom:"3vh"}}><Link to="/scores/Medusa" style={{textDecoration:"none", color:"white", fontFamily:"Romanus"}}>Check Scores</Link></h4>
                        <Link to="/houses/Medusa" style={{textDecoration:"none", color:"white", fontFamily:"Romanus"}} className="houses">See your Members</Link>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip flipSpeedFrontToBack="2" flipSpeedBackToFront="2" isFlipped={isFlippedZeus} flipDirection="horizontal"
                style={{margin:"2vh 1.5vw", textDecoration:"none", height:"10rem !important"}} >
                    <figure className="houses" onClick={handleClickZeus}>
                        <img style={{margin:"0.5vh 0",  height:"20rem", width:"15rem"}} src={zeus} />
                        <figcaption style={{color:"white", fontFamily:"Stalemate", fontSize:"3rem"}}>Zeus</figcaption>
                    </figure>
                    <div style={{height:"18rem", width:"15rem", margin:"5vh auto 7vh auto", backgroundColor:"rgba(252,117,0,0.4)", color:"white", padding:"40% 3vw"}} onClick={handleClickZeus}>
                        <h4 style={{ marginBottom:"3vh"}}><Link to="/scores/Zeus" style={{textDecoration:"none", color:"white", fontFamily:"Romanus"}}>Check Scores</Link></h4>
                        <Link to="/houses/Zeus" style={{textDecoration:"none", color:"white", fontFamily:"Romanus"}} className="houses">See your Members</Link>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip flipSpeedFrontToBack="2" flipSpeedBackToFront="2" isFlipped={isFlippedPoseidon} flipDirection="horizontal"
                style={{margin:"2vh 1.5vw", textDecoration:"none"}} >
                    <figure className="houses" onClick={handleClickPoseidon}>
                        <img style={{margin:"0.5vh 0",  height:"20rem", width:"15rem"}} src={poseidon} />
                        <figcaption style={{color:"white", fontFamily:"Stalemate", fontSize:"3rem"}}>Poseideon</figcaption>
                    </figure>
                    <div style={{height:"18rem", width:"15rem", margin:"5vh auto 7vh auto", backgroundColor:"rgba(79,196,247,0.4)", color:"white", padding:"40% 3vw"}} onClick={handleClickPoseidon}>
                        <h4 style={{ marginBottom:"3vh"}}><Link to="/scores/Poseidon" style={{textDecoration:"none", color:"white", fontFamily:"Romanus"}}>Check Scores</Link></h4>
                        <Link to="/houses/Poseidon" style={{textDecoration:"none", color:"white", fontFamily:"Romanus"}} className="houses">See your Members</Link>
                    </div>
                </ReactCardFlip>
            </div>
            */}
           
            
            
        </div>
    )
}

export default Home

