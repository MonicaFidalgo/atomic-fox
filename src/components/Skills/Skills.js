import React from "react";
import Particle from "../Particle";
import Techstack from "./Techstack";
import { Container, Row } from "react-bootstrap";

import skills from "../../data/skills-icons";
import tools from "../../data/tools-icons";

function Skills() {

  const projectsArray = skills.map(skill => (
    <Techstack src={skill.icon} key={skill.id} title={skill.name} />
  ));

  const toolsArray = tools.map(tool => (
    <Techstack src={tool.icon} key={tool.id} title={tool.name} />
  ));

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {projectsArray}
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {toolsArray}
        </Row>
      </Container>
    </Container>

  )
}

export default Skills;