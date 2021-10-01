import React from 'react'
import Header from './Header'
import '../styles/header.css';
import iris from "../images/Iris.png";
import medusa from "../images/medusa.png";
import poseidon from "../images/poseidon.png";
import zeus from "../images/zeus.png";
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
                style={{ width: "18rem", borderRadius:"10px", padding: "0.2rem", color:"white", fontFamily:"Russo One",fontWeight:"400",
                backgroundColor:(house==="Poseidon")?"#4FC4F7":(house==="Iris")?"#666666":(house==="Medusa")?"#80CF12":"#FC7500" }}
                key={key}
                className="padding mx-3 my-3 shadow-lg d-flex justify-content-center"
              >
                <Card.Img src={(house==="Iris")?iris:(house==="Medusa")? medusa:(house==="Zeus")? zeus:poseidon} style={{height:"6rem", width:"6rem", margin:"auto"}}/>
                
                <Card.Body>
                  
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2">
                    {member.level}
                  </Card.Subtitle>
                  <Card.Text>
                    From the house of {member.house}, the clan of{" "}
                    {member.subHouse}; Come meet your {member.level}
                  </Card.Text>
                  <Card.Link style={{"textDecoration":"none"}} href={`mailto:${member.email}`} target="_blank">
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
