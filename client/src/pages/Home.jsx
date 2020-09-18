import React from "react";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <h1>Home</h1>
      </Container>
    </div>
  );
};

export default Home;
