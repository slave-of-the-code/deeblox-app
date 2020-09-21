import React from 'react';
import Header from './shared/header/Header';
import Footer from './shared/footer/Footer';
import './Layout.css';

const Layout = ({ children }) => (
  <div id="container">
    <Header />
    <div id="content">{children}</div>
    <Footer />
  </div>
);

export default Layout;
