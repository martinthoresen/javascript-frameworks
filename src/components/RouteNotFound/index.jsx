import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function RouteNotFound() {
  return (
    <Container className="">
      <Col>
        <Row>
          <p>Oops... Could not find the page you're looking for.</p>
        </Row>
      </Col>
    </Container>
  );
}

export default RouteNotFound;
