import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from 'layout/Layout';

import MoreInfo from 'pages/moreInfo/MoreInfo';
import AboutUs from 'pages/aboutUs/AboutUs';
import Jobs from 'pages/jobs/Jobs';
import Contact from 'pages/contact/Contact';

const DeebloxApp = () => {
	return (
		<Router>
			<Layout>
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
							<MoreInfo />
						</>
					</Route>
				</Switch>
			</Layout>
		</Router>
	);
};

export default DeebloxApp;
