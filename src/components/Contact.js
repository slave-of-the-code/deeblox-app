import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <div className="contacto">
            <span>Contacto</span>
            <div className="inputs">
              <div>
                <span className="inputLabel">Nombre</span>
                <input className="inputText"></input>
              </div>
              <div>
                <span className="inputLabel">Apellido</span>
                <input className="inputText"></input>
              </div>
              <div>
                <span className="inputLabel">Email</span>
                <input className="inputText"></input>
              </div>
              <div>
                <span className="inputLabel">Telefono</span>
                <input className="inputText"></input>
              </div>
            </div>
            <div>
              <span className="inputLabel">Mensaje</span>
              <textarea className="inputTextArea"></textarea>
            </div>
            <input type="submit" value="Enviar" className="button"></input>
            <article className="socialNetwork">
              <a href="#twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
