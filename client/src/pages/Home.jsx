import React from "react";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <h1>Home</h1>
        {/* <Banner /> */}
        <Banner2 />
      </Container>
    </div>
  );
};

export default Home;
