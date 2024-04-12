import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Utkal Keshari Dalabehera </span>
            from <span className="purple"> Bhubaneswar,Odisha, India.</span>
            <br />
            I am currently a Fresher.
            <br />
            I have completed Master's in Computer Applications(MCA) in SOA University,
            Bhubaneswar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Listining Songs 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "brown" }}>
          {/*  rgb(155 126 172) */}
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">utkal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;