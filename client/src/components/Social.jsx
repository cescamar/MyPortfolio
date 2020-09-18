import React from "react";
import { Container } from "react-bootstrap";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Social = () => {
  return (
    <div>
      <Container fluid>
        <h1>Let's Connect</h1>
        <div>
          <div>
            <a href="https://www.linkedin.com/in/fmarq/" target="_blank">
              <img src={linkedin} width="50" alt="linkedin" />
            </a>
            <a href="https://github.com/cescamar" target="_blank">
              <img src={github} width="50" alt="github" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Social;
