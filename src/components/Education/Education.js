import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import { ImPointRight } from "react-icons/im";

function Education() {
  return (
    <Container fluid className="skill-section" id="education">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong className="orange">Qualifications</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    Hi Everyone, I am{" "}
                    <span className="orange">Fazil Rahman Z.</span> from{" "}
                    <span className="orange">Chennai, Tamil Nadu, India.</span>
                    <br />
                    <br />
                    I am a graduate with a{" "}
                    <span className="orange">
                      B.Tech degree in Computer Science and Engineering
                    </span>{" "}
                    from{" "}
                    <span className="orange">
                      B.S. Abdur Rahman Crescent Institute of Science and
                      Technology, Vandalur, Chennai
                    </span>
                    <br />
                    <br />
                    I completed my HSE at{" "}
                    <span className="orange">
                      Springfield Matriculation Higher Secondary School, Chennai.
                    </span>
                    <br />
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
