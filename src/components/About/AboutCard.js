import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arpit Pandey </span>
            from <span className="purple"> Varansi, India.</span>
            <br />
            I am currently employed as a software developer at NuralTech.
            <br />
            I have completed Master's Degree in Computer Application at National Institute of Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking 
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Bringing innovation and excellence to every project, from concept to completion."{" "}
          </p>
          <footer className="blockquote-footer">Arpit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
