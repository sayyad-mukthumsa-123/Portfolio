import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* <Row> */}
        <Row className="align-items-center">

          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an enthusiastic and dedicated individual who blends hard work with smart strategies.
              My adaptability allows me to thrive in any environment while continuously learning and solving problems creatively.
              <br />
              <br />Passionate about technology, I specialize in full-stack development with
              <i>
                <b className="purple"> React, Node.js, MongoDB, and Express.</b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  AI/ML, &nbsp;
                </b>
              </i>
              exploring how data-driven solutions can enhance real-world applications
              <br />
              <br />
              My curiosity drives me to innovate, build impactful projects, and contribute to cutting-edge advancements.
              With a collaborative spirit, I aim to create meaningful solutions that push the boundaries of technology.           </p>
          </Col>
          {/* <Col md={4} className="myAvtar"> */}
          <Col md={4} className="myAvtar d-flex justify-content-center">

            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"  style={{ width: "150%", maxWidth: "300px" }}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sayyad-mukthumsa-123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sayyad-mukthumsa-426492243/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
