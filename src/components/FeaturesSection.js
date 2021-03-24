import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import SectionHeader from "./SectionHeader";
import "./FeaturesSection.scss";

function FeaturesSection(props) {
  const items = [
    {
      title: "Chat",
      description:
        "Imagine a world where you can chat with your friends without having to see their dumb faces.",
      iconClass: "fas fa-comments",
      iconColor: "primary",
    },
    {
      title: "Play",
      description:
        "We embedded a bunch free flash games inside our app. What we lack in quality we make up in quantity.",
      iconClass: "fas fa-gamepad",
      iconColor: "danger",
    },
    {
      title: "Cats",
      description:
        "Our market research told us people like cats so we put some cat icons on our website.",
      iconClass: "fas fa-cat",
      iconColor: "dark",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-left">
            <figure className="FeaturesSection__image-container mx-auto">
              <Image src={props.image} fluid={true} />
            </figure>
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0 ">
            {items.map((item, index) => (
              <Row className="py-4 align-items-center" key={index}>
                <Col xs="auto">
                  <div
                    className={`FeaturesSection__icon text-${item.iconColor} d-inline-flex justify-content-center`}
                  >
                    <i className={`${item.iconClass}`} />
                  </div>
                </Col>
                <Col sx="auto" className="pl-4">
                  <SectionHeader
                    title={item.title}
                    subtitle={item.description}
                    size={5}
                    spaced={false}
                    className="mb-0"
                  />
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
