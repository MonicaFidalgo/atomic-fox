import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data/data";


function Projects() {

  const projectsArray = data.map(data => (
    <Col md={6} className="project-card" key={data.id} >
      <ProjectCard
        imgPath={data.img}
        isBlog={data.project}
        title={data.name}
        description={data.description}
        link={data.url}
        id={data.id}
      /></Col>
  ));

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsArray}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
