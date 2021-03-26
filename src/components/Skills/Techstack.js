import React from "react";
import { Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Techstack(props) {
  return (
    <Col xs={4} md={2} lg={2} className="tech-icons">
      <div className="card-small">
        <img src={props.src} alt="alternative" />
        <h4>{props.title}</h4>
      </div>
    </Col>
  );
}

export default Techstack;
