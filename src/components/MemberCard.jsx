import React, { useState } from "react";
import { Card, Row, } from "react-bootstrap";
import Data from "../data/data.json";
import card_back from "../images/card_back.png"
import "../styles/cards.css"

function MemberCard() {

    const [searchString, setSearchString] = useState(''); 

  return (
    <div className="container" >
      <div className="input-group">
        <input type="text" className="form-inline  d-flex justify-content-center"
        style={{position:"fixed",fontSize:"1.1rem",color:"#FF8832",  marginTop: "5vh", marginBottom: "15vh", borderRadius:"5px" , marginLeft:"15vw", padding: "1vh 1vw", width:"57vw", opacity:"0.5"}} 
        placeholder="Find your teammates" onChange={event => setSearchString(event.target.value.toLowerCase())}/>
        
      </div>

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
                style={{ width: "18rem",borderRadius:"10px", padding: "0.2rem", fontFamily:"Russo One" }}
                key={key}
                bg="dark"
                className="col-lg-4 padding mx-3 my-3 shadow-lg"
              >
                <Card.Img style={{padding:0,borderRadius:"10px"}} src={card_back}/>
                <Card.ImgOverlay>
                <Card.Body>
                  
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {member.level}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    {member.house}{" "}
                  </Card.Subtitle>
                  <Card.Text>
                    From the house of {member.house}, the clan of{" "}
                    {member.subHouse}; Come meet your {member.level}
                  </Card.Text>
                  <Card.Link style={{"textDecoration":"none", "color":"#FF0078"}} href={`mailto:${member.email}`} target="_blank">
                    {member.email}
                  </Card.Link>
                  
                </Card.Body>
                </Card.ImgOverlay>
              </Card>
            );
          })}
      </Row>
    </div>
  );
}
export default MemberCard;
