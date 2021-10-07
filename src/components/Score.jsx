import React from 'react'
import {Card, Row} from "react-bootstrap"
import Header from './Header'

export default function Score({match}) {

    const house = match.params.house
    const medusa_scores1 = [{name:"The Hesperides", score:0}, {name:"Sthenno", score:0}, {name:"Euryale", score:0}, {name:"The Graea", score:0}, {name:"Thoosa", score:0}]
    const medusa_scores2 = [ {name:"Scylla", score:0}, {name:"Ladon", score:0} , {name:"Hades", score:0},{name:"Demeter", score:0},{name:"Hestia", score:0}]
    const iris_scores1 = [{name:"Arke", score:0}, {name:"Aello", score:0}, {name:"Celaeno", score:0}, {name:"Ocypete", score:0} ,{name:"Hydaspes", score:0} ]
    const iris_scores2 = [{name:"Zephyrus", score:0} ,{name:"Pothos", score:0}, {name:"Eros", score:0},{name:"Thaumus", score:0},{name:"Electra", score:0}]
    const zeus_scores1 = [{name:"Aphrodite", score:0},{name:"Apollo", score:0},{name:"Artemis", score:0},{name:"Athena", score:0},{name:"Angelos", score:0}]
    const zeus_scores2 = [{name:"Heracles", score:0},{name:"Hermes", score:0},{name:"Perseus", score:0},{name:"The Graces", score:0},{name:"The Muses", score:0}]
    const poseidon_scores1 = [ {name:"Theseus", score:0},{name:"Criton", score:0},{name:"Polyphemus", score:0},{name:"Orion", score:0},{name:"Belus", score:0}]
    const poseidon_scores2 = [{name:"Agenor", score:0},{name:"Neleus", score:0},{name:"Atlas", score:0},{name:"Pegasus", score:0},{name:"Chrysaor", score:0}]

    const items1 = (house)=>{
        if (house==="Iris")
        return iris_scores1.map((name) =>
        <Card.Subtitle style={{letterSpacing:"0.2rem",fontSize:"1rem", padding:"2vh 4vw"}}>{name.name}: {name.score}</Card.Subtitle>)

        else if (house==="Medusa")
        return medusa_scores1.map((name) =>
        <Card.Subtitle style={{letterSpacing:"0.2rem",fontSize:"1rem", padding:"2vh 4vw"}}>{name.name}: {name.score}</Card.Subtitle>)

        else if (house==="Zeus")
        return zeus_scores1.map((name) =>
        <Card.Subtitle style={{letterSpacing:"0.2rem",fontSize:"1rem", padding:"2vh 4vw"}}>{name.name}: {name.score}</Card.Subtitle>)

        else
        return poseidon_scores1.map((name) =>
        <Card.Subtitle style={{letterSpacing:"0.2rem",fontSize:"1rem", padding:"2vh 4vw"}}>{name.name}: {name.score}</Card.Subtitle>)
    } ;

    const items2 = (house)=>{
        if (house==="Iris")
        return iris_scores2.map((name) =>
        <Card.Subtitle style={{letterSpacing:"0.2rem",fontSize:"1rem", padding:"2vh 4vw"}}>{name.name}: {name.score}</Card.Subtitle>)

        else if (house==="Medusa")
        return medusa_scores2.map((name) =>
        <Card.Subtitle style={{letterSpacing:"0.2rem",fontSize:"1rem", padding:"2vh 4vw"}}>{name.name}: {name.score}</Card.Subtitle>)

        else if (house==="Zeus")
        return zeus_scores2.map((name) =>
        <Card.Subtitle style={{letterSpacing:"0.2rem",fontSize:"1rem", padding:"2vh 4vw"}}>{name.name}: {name.score}</Card.Subtitle>)

        else
        return poseidon_scores2.map((name) =>
        <Card.Subtitle style={{letterSpacing:"0.2rem",fontSize:"1rem", padding:"2vh 4vw"}}>{name.name}: {name.score}</Card.Subtitle>)
    } ;

    return (

        <div  className="justify-content-center" >
            <Header/>
            <h1 style={{marginTop:"2vh", color:"white", fontFamily:"Stalemate", fontSize:"3.4rem"}}>{house} Scoreboard</h1>
            <h1 style={{ color:"white", fontWeight:"400", fontSize:"1.3rem"}}>Total Score: 0</h1>
            <h1 style={{color:"white",  fontSize:"1.3rem", fontWeight:"400"}}>Rank: NA</h1>
        <Row className="d-lg-flex justify-content-center" style={{padding:"2vh 0 2vh 0", marginBottom:"1vh", overflowX:"hidden" , overflowY:"auto", height:"55vh", width:"100vw"}}>
            <Card className="padding mx-3 my-3 shadow-lg d-flex justify-content-center"
             style={{ width: "18rem", borderRadius:"10px", padding: "0.5vh 0.5vw", color:"white", fontFamily:"Russo One",fontWeight:"400",
             backgroundColor:(house==="Poseidon")?"rgba(79,196,247,0.4)":(house==="Iris")?"rgba(102,102,102,0.4)":(house==="Medusa")?"rgba(128,207,18,0.4)":"rgba(252,117,0,0.4)", backdropFilter: "blur(10px)" }}>
               {items1(house)}

             </Card>
            <Card className="padding mx-3 my-3 shadow-lg d-flex justify-content-center"
            style={{ width: "18rem", borderRadius:"10px", padding: "0.5vh 0.5vw", color:"white", fontFamily:"Russo One",fontWeight:"400",
            backgroundColor:(house==="Poseidon")?"rgba(79,196,247,0.4)":(house==="Iris")?"rgba(102,102,102,0.4)":(house==="Medusa")?"rgba(128,207,18,0.4)":"rgba(252,117,0,0.4)", backdropFilter: "blur(10px)" }}>
                {items2(house)}
            </Card>
        </Row>
        </div>
    )
}
