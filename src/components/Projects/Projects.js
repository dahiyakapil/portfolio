import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import hungryhub from "../../Assets/Projects/hungryhub.png";


function Projects() {
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
          

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hungryhub}
              isBlog={false}
              title="Hungry Hub"
              description="A website creating restraurants and order online with searching features and payment features. "
              ghLink="https://github.com/dahiyakapil/mern-food-ordering-app-frontend"
              demoLink=""    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
