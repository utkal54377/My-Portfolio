import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiGit, DiJava } from "react-icons/di";
import { SiHtml5,SiCss3, SiMysql } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

function TechStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>   
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <SiCss3 />
       </Col>
      <Col xs={4} md={2} className="tech-icons">
          <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
           <FaGithub />
      </Col>
    </Row>
  );
}

export default TechStack;