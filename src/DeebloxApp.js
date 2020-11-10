import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from 'layout/Layout';

import MoreInfo from 'pages/moreInfo/MoreInfo';
import Home from 'layout/home/Home';

const DeebloxApp = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/more-info">
            <>
              <MoreInfo />
            </>
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default DeebloxApp;
