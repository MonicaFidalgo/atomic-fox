import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Aboutcard from "./AboutCard";
import myImg from "../../Assets/programmer.svg";
import bookImg from "../../Assets/book_lover.svg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row>
          <Col md={7} className="text-left">
            <h2 style={{ fontSize: "2.6em" }}>
              <span className="purple"> About </span> me
            </h2>
            <div className="home-about-body">
              <p>
                I’m a frontend developer with special care on the user experience.
            </p>
              <p>Passionate for learning new technologies and methodologies.</p>
            </div>

          </Col>
          <Col md={5} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={bookImg} alt="about" className="img-fluid" />
          </Col>
          <Col
            md={7}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
            className="align-items-center d-flex"
          >
            <Aboutcard />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
