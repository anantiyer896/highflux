import React from 'react'
import Header from './Header'
import '../styles/header.css';
import iris from "../images/Iris_logo.png";
import medusa from "../images/medusa_logo.png";
import poseidon from "../images/poseidon_logo.png";
import zeus from "../images/zeus_logo.png";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import {Row, Card} from 'react-bootstrap'
import Data from "../data/data.json";

export default function Houses({match}) {
    const house = match.params.house
    return (
        <div style={{minHeight: "100vh",height: '100vh',
        width: '100vw',
        overflow: 'hidden',}}>
        <Header/>
        {console.log(house)}
        <h1 style={{color:"white", fontFamily:"Stalemate", marginTop:"2vh", fontSize:"4rem"}}>House of {house}</h1>
        <Row
        className="d-flex justify-content-center"
        id="scrollableDiv"
        style={{ padding: "0 2rem ", marginTop:"2vh" , overflowY:"scroll", height:"68vh"}}
      >
        {Data
          .filter(member => {
              return (
                
                member.house.toLowerCase().includes(house.toLowerCase())
              );
          })
          .map((member, key) => {
            return (
              <Card
                style={{ width: "15rem", borderRadius:"10px", padding: "0.2rem", color:"white", fontFamily:"Russo One",fontWeight:"400",
                backgroundColor:(house==="Poseidon")?"rgba(79,196,247,0.4)":(house==="Iris")?"rgba(102,102,102,0.4)":(house==="Medusa")?"rgba(128,207,18,0.4)":"rgba(252,117,0,0.4)" }}
                key={key}
                className="padding mx-3 my-3 shadow-lg d-flex justify-content-center"
              >
                <Card.Img src={(house==="Iris")?iris:(house==="Medusa")? medusa:(house==="Zeus")? zeus:poseidon} style={{height:"6rem", width:"6rem", margin:"auto"}}/>
                
                <Card.Body>
                  
                  <Card.Title style={{fontSize:"1.2rem", fontWeight:"600", fontFamily:"Old English Text MT Regular"}}>{member.name}</Card.Title>
                  <Card.Subtitle style={{fontSize:"1rem"}} className="mb-2">
                    {member.level}
                  </Card.Subtitle>
                  <Card.Text style={{fontSize:"0.8rem", color:"", fontFamily:"Harrington", fontWeight:"900"}}>
                    From the house of {member.house}, the clan of{" "}
                    {member.subHouse}; Come meet your {member.level}
                  </Card.Text>
                  <Card.Link style={{"textDecoration":"none", fontSize:"0.85rem", fontWeight:"600"}} href={`mailto:${member.email}`} target="_blank">
                    {member.email}
                  </Card.Link>
                  
                </Card.Body>
               
              </Card>
            );
          })}
      </Row>
        </div>
    )
}
