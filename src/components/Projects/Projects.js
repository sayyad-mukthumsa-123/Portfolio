import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vsm from "../../Assets/vsm.jpg"
import MV from "../../Assets/MV.jpg"
import BC from "../../Assets/BC.jpg"
import DM from "../../Assets/DM.jpg"

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
          <Col md={4} className="project-card"  style={{ display: "flex" }}>
            <ProjectCard
              imgPath={vsm}
              isBlog={false}
              title="Virtual Study Mugen"
              description="Virtual Study Mugen (VSM) is a collaborative study platform that empowers students to communicate effectively through real-time messaging and seamless file sharing. It enables users to exchange notes, documents, and study materials effortlessly, fostering an engaging learning environment where students can also form study groups."
              ghLink="https://github.com/Somepalli-Venkatesh/vsm"
              demoLink="https://vsm-virtual-study-front.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card"  style={{ display: "flex" }}>
            <ProjectCard
              imgPath={MV}
              isBlog={false}
              title="MovieVerse"
              description="Explore a vast universe of movies, from the latest blockbusters to timeless classics. Join MovieVerse to discover and enjoy cinematic brilliance like never before."
              ghLink="https://github.com/sayyad-mukthumsa-123/Movie_Verse.git"
              demoLink="https://movie-verse-frontend.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={BC}
              isBlog={false}
              title="BuzzChat"
              description="A responsive chat app that allows users to send and receive messages in real time, featuring emoji support for enhanced communication.It adapts to any device, providing a smooth and engaging user experience."
              ghLink="https://github.com/sayyad-mukthumsa-123/Buzz-Chat.git"
              demoLink="https://buzzchat-frontend-ilm3.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card" style={{ display: "flex" }}>
            <ProjectCard
              imgPath={DM}
              isBlog={false}
              title="DevMania"
              description="Create a developer profile and showcase your skills, projects, and experience. Share posts, write articles, and engage with other developers in the community. Get help, give feedback, and collaborate on coding challenges and projects."
              ghLink="https://github.com/sayyad-mukthumsa-123/DevMania"
              demoLink="https://devmania-frontend.onrender.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
