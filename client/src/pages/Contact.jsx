import React from "react";
import Social from "../components/Social";
import Navigation from "../components/Navigation";
import Message from "../components/Message";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Social />
        <Message />
      </Container>
    </div>
  );
};

export default Contact;
