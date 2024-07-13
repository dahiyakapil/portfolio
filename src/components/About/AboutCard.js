import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Kapil Dahiya </span>
            from <span className="purple"> Panipat, Haryana.</span>
            <br />
            I am a MERN Stack Developer.
            <br />
            I am graduate Computer Science student from Chandigarh uniersity.
            <br />
            I look forward to the opportunity to bring my skills and passion to your next project.
            <br />
            Apart from coding, some other activities that I love to do!
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Listeing To Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">kapil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
