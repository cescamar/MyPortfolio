import React from "react";
import Navigation from "../components/Navigation";
import { Container, Image, Button } from "react-bootstrap";
import headshot from "../assets/headshot.png";
import Fmarquez_Resume from "../assets/Fmarquez_Resume.pdf";

const About = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <h1>About Francesca</h1>
        <Image
          src={headshot}
          alt="Francesca Marquez"
          width={200}
          height={200}
          roundedCircle
        />
        <p>
          Hello World, My name is Francesca Marquez. People usually call me
          Cesca. I'm an experienced Digital Marketing Manager with over 5 years
          experience. I'm currently transitioning into becoming a Junior Web
          Developer/Product Manager and I'm looking for new job opportunities. I
          have a passion for learning and creating new things. I graduated from
          Florida International University with a Bachelors in International
          Business and Marketing. During my time at FIU, I had the opportunity
          to study abroad and attend ESIC Campus de Madrid. This is where my
          passion for traveling started.
        </p>
        <a href={Fmarquez_Resume} download className="menu-bars1">
          <Button variant="primary">DOWNLOAD CV</Button>
        </a>
      </Container>
    </div>
  );
};

export default About;
