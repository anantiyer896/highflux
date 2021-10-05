import React, { useState } from "react";
import { Card, Row, } from "react-bootstrap";
import Data from "../data/data.json";
import card_back from "../images/card_back.png"
import "../styles/cards.css"

function MemberCard() {

    const [searchString, setSearchString] = useState(''); 

  return (
    <>
    <div className="input-group" style={{position:"fixed", width:"100vw", height:"20vh", padding:"0 20vw"}}>
        <input type="text" className="form-inline  d-flex justify-content-center"
        style={{position:"fixed",fontSize:"0.9rem",color:"#FF8832",  margin:"5vh auto", borderRadius:"5px", padding: "1vh 1vw", width:"60%", opacity:"0.5"}} 
        placeholder="Find your teammates" onChange={event => setSearchString(event.target.value.toLowerCase())}/>
        
      </div>
    <div className="container" >
      

      <Row
        className="d-flex justify-content-center"
        id="scrollableDiv"
        style={{ padding: "0 2rem ", marginTop:"15vh" , overflowY:"scroll", height:"70vh"}}
      >
        {Data
          .filter(member => {
              return (
                member.name.toLowerCase().match(searchString) ||
                member.house.toLowerCase().match(searchString)
              );
          })
          .map((member, key) => {
            return (
              <Card
                style={{ width: "15.5rem",borderRadius:"10px", padding: "0.2rem", fontFamily:"Russo One" }}
                key={key}
                bg="dark"
                className="col-lg-4 padding mx-3 my-3 shadow-lg"
              >
                <Card.Img style={{padding:0,borderRadius:"10px"}} src={card_back}/>
                <Card.ImgOverlay>
                <Card.Body>
                  
                  <Card.Title style={{fontSize:"1.2rem", fontWeight:"600", fontFamily:"Old English Text MT Regular"}}>{member.name}</Card.Title>
                  <Card.Subtitle style={{fontSize:"1rem"}} className="mb-2 ">
                    {member.level}
                  </Card.Subtitle>
                  <Card.Subtitle style={{fontSize:"0.9rem", fontWeight:"900"}} className="mb-2">
                    {member.house}{" "}
                  </Card.Subtitle>
                  <Card.Text style={{fontSize:"0.8rem", color:"", fontFamily:"Harrington", fontWeight:"900"}}>
                    From the house of {member.house}, the clan of{" "}
                    {member.subHouse}; Come meet your {member.level}
                  </Card.Text>
                  <Card.Link style={{"textDecoration":"none", "color":"#800000", fontSize:"0.85rem", fontWeight:"600"}} href={`mailto:${member.email}`} target="_blank">
                    {member.email}
                  </Card.Link>
                  
                </Card.Body>
                </Card.ImgOverlay>
              </Card>
            );
          })}
      </Row>
    </div>
    </>
  );
}
export default MemberCard;
