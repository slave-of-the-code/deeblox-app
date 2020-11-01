import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import AboutUs from './components/aboutUs/AboutUs';
import Jobs from 'components/jobs/Jobs';
import Contact from 'components/contact/Contact';

import 'DeebloxApp.css';

const DeebloxApp = () => {
  return (
    <Router>
      <Layout>
        {/* children */}
        <Switch>
          <Route exact path="/">
            <>
              <AboutUs />
              <Jobs />
              <Contact />
            </>
          </Route>
          <Route path="/more-info">
            <>
              <h1>more info</h1>
            </>
          </Route>
        </Switch>
        {/* children */}
      </Layout>
    </Router>
  );
};

export default DeebloxApp;
