import React from "react";

import { Container, Form, Button } from "react-bootstrap";

const Message = () => {
  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <h1 className="mb-4">Let's Chat</h1>
      <Form style={{ width: 300 }}>
        <Form.Group>
          <Form.Label htmlFor="Name">Name</Form.Label>
          <Form.Control id="Name" type="text" placeholder="Name" name="name" />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button type="submit">Send Message</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Message;
