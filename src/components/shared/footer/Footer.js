import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="data">
          <ul className="detail">
            <li>
              <span>
                <i className="fas fa-phone-alt"></i>
                +54 11 2821 9000
              </span>
            </li>
            <li>
              <span>
                <i className="fas fa-envelope"></i>
                contact@deeblox.com
              </span>
            </li>
            <li>
              <span>
                <i className="fas fa-map-marker-alt"></i>
                Avda. Ricardo Balbín 2437 - CABA - Buenos Aires.
              </span>
            </li>
          </ul>

          <ul className="socialNetwork">
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
            <li>
              <i className="fab fa-youtube"></i>
            </li>
            <span>/Deeblox</span>
          </ul>
        </div>
        <div className="info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vulputate at felis sed condimentum. Curabitur lorem nunc, dictum at
            nulla dictum, tempus tristique tortor. Nulla facilisi. Nullam mollis
            ligula a ullamcorper ultricies. Nulla odio est, facilisis sed mauris
            id, malesuada gravida ipsum.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
