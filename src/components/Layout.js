import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.css";

const Layout = ({ children }) => (
  <div id="container">
    <Header />
    <div id="content">{children}</div>
    <Footer />
  </div>
);

export default Layout;
