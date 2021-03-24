import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import ContactPage from "./contact";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";

function App(props) {
  return (
    <Router>
      <>
        <NavbarCustom
          bg="white"
          variant="light"
          expand="md"
          logo="https://uploads.divjoy.com/logo.svg"
        />

        <Switch>
          <Route exact path="/" component={IndexPage} />

          <Route exact path="/about" component={AboutPage} />

          <Route exact path="/contact" component={ContactPage} />

          <Route component={NotFoundPage} />
        </Switch>

        <Footer
          bg="white"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={1}
          description="A short description of what you do here"
          copyright="© 2020 Company"
          logo="https://uploads.divjoy.com/logo.svg"
        />
      </>
    </Router>
  );
}

export default App;
