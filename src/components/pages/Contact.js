//shortcut rsf
//resource (https://react-bootstrap.github.io/docs/components/buttons)
//resource(https://react-bootstrap.github.io/docs/layout/grid)
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Marquee from "react-fast-marquee";

function Contact() {
  return (
    <section
      id="contact"
      className="block contact-block"
      style={{ marginBottom: "50px" }}
    >
      {" "}
      <Marquee autoFill>
        <Container>
          <Row>
            <Col>
              <Button
                href="#"
                variant="link"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Contact 1
              </Button>{" "}
            </Col>
            <Col>
              <Button
                href="#"
                variant="link"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Contact 2
              </Button>{" "}
            </Col>
            <Col>
              <Button
                href="#"
                variant="link"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Contact 3
              </Button>{" "}
            </Col>
            <Col>
              <Button
                href="#"
                variant="link"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Contact 4
              </Button>{" "}
            </Col>
            <Col>
              <Button
                href="#"
                variant="link"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Contact 5
              </Button>
            </Col>
          </Row>
        </Container>
      </Marquee>
    </section>
  );
}

export default Contact;
