import React from 'react';
import Header from 'layout/header/Header';
import Footer from 'layout/footer/Footer';
import './Layout.scss';

const Layout = ({ children }) => (
  <div id="container">
    <Header />
    <div id="content">{children}</div>
    <Footer />
  </div>
);

export default Layout;
