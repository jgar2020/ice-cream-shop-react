import React from "react";
import CtaSection from "./../components/CtaSection";
import FeaturesSection2 from "./../components/FeaturesSection2";

function IndexPage(props) {
  return (
    <>
      <CtaSection
        bg="dark"
        textColor="light"
        size="sm"
        bgImage="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
        bgImageOpacity={0.8}
        title="Heading"
        subtitle=""
        buttonText="Explore"
        buttonColor="light"
        buttonPath="/pricing"
      />
      <FeaturesSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
    </>
  );
}

export default IndexPage;
