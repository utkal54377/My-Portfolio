import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyImage from "../../Assets/Avatar.svg";
import Tilt from "react-parallax-tilt";
import {AiFillGithub,AiOutlineTwitter,AiFillInstagram} from "react-icons/ai";
import { FaLinkedinIn} from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️ 
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript and Mysql </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Reactjs</b> and
              <i>
                <b className="purple">
                  {" "}
                  Java 
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Reactjs and Java</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={MyImage} className="img-fluid" alt="Avatar" />
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
                <a href="https://github.com/utkal54377" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://x.com/utkal54?t=EbmOmWR0OHUZwHvUYMnHjw&s=08" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/utkal-keshari-dalabehera-257955301/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons" >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/u_t_k_a_l_54/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" >
                  <AiFillInstagram />
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

