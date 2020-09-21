import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AboutUs from "./components/AboutUs";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";

const DeebloxApp = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <>
              <AboutUs />
              <Jobs />
            </>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default DeebloxApp;
