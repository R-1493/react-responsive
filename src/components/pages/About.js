//shortcut rsf
//resource ( https://react-bootstrap.github.io/docs/layout/grid )
//resource(https://react-bootstrap.github.io/docs/components/progress)
//resource(https://react-bootstrap.github.io/docs/components/cards)
//resource(https://react-bootstrap.github.io/docs/components/placeholder)
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

function About() {
  const html = 70;
  const python = 60;
  const UiUx = 95;

  return (
    <section
      id="about"
      className="block about-block"
      style={{ marginBottom: "70px" }}
    >
      <Container fluid>
        <div className="title-holder text-center">
          <h2>About</h2>
        </div>
        <Row>
          <Col sm={6}>
            {/* <Image src="/" /> */}
            <Card style={{ height: "18rem", backgroundColor: "gray" }}></Card>
          </Col>
          <Col sm={6}>
            <p>
              <Placeholder xs={6} />
              <Placeholder className="w-75" />{" "}
              <Placeholder style={{ width: "25%" }} />{" "}
            </p>
            <p>
              <Placeholder xs={6} />
              <Placeholder className="w-75" />{" "}
              <Placeholder style={{ width: "25%" }} />{" "}
            </p>
            <div className="progress-block">
              <h4>HTML / CSS / Javascript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>python</h4>
              <ProgressBar now={python} label={`${python}%`} />
            </div>
            <div className="progress-block">
              <h4>Ui/Ux</h4>
              <ProgressBar now={UiUx} label={`${UiUx}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
