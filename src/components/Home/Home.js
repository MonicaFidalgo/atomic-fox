import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/foxy_.png";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6}>
              <h1 className="mb-3">
                Hi There!
              </h1>

              <h1>
                I'm
                <strong className="main-name"> Mónica Fidalgo</strong>
              </h1>

              <div className="mt-4">
                <Type />
              </div>

              <ul className="home-about-social-links mt-5">
                <li className="social-icons">
                  <a
                    href="https://github.com/MonicaFidalgo"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/LovinLivinGivin"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/monicafidalgo/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.freecodecamp.org/news/author/monica/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <i className="fab fa-free-code-camp"></i>
                  </a>
                </li>
              </ul>
            </Col>

            <Col md={6} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
