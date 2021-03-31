import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./FeaturesSection2.scss";

function FeaturesSection2(props) {
  const items = [
    {
      title: "Feature01",
      description: "Paragraph",
      image: ""
    },
    {
      title: "Feature02",
      description: "Paragraph",
      image: ""
    },
    {
      title: "Feature03",
      description: "Paragraph",
      image: ""
    },
    {
      title: "Feature04",
      description: "Paragraph",
      image: ""
    }
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
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <div className="FeaturesSection2__features">
          {items.map((item, index) => (
            <Row className="align-items-center" key={index}>
              <Col xs={12} lg={6}>
                <SectionHeader
                  title={item.title}
                  subtitle={item.description}
                  spaced={true}
                  size={3}
                  className="text-center text-lg-left"
                />
              </Col>
              <Col>
                <figure className="FeaturesSection2__image-container">
                  <Image src={item.image} alt={item.title} fluid={true} />
                </figure>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FeaturesSection2;
