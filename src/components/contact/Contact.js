import React from 'react';
import { useForm } from 'react-hook-form';

import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import Button from '../shared/button/Button';
import SocialNetwork from '../shared/socialNetwork/SocialNetwork';

import imageEnvelope from '../../assets/img-site/envelope.png';
import './Contact.css';

import { Data } from '../../data/data';

function EmailForm({ inputs, textArea, buttonSend }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="inputs">
        {inputs.map((input, index) => {
          return (
            <div key={index}>
              <span className="inputLabel">{input.title}</span>
              <input
                ref={register({ required: true })}
                className="inputText"
                name={input.name}
                // defaultValue={input.value}
                //onChange={this.handleChange}
              ></input>
              {/* {errors.exampleRequired && <span>This field is required</span>} */}
            </div>
          );
        })}
      </div>
      <div className="input-textarea">
        <span className="inputLabel">{textArea.title}</span>
        <textarea
          className="inputTextArea"
          name={textArea.name}
          // defaultValue={textArea.value}
          // onChange={this.handleChangeTextArea}
        ></textarea>
      </div>
      <div className="button-Send">
        <Button type={buttonSend.type} text={buttonSend.text} />
      </div>
    </form>
  );
}

export default class Contact extends React.Component {
  constructor() {
    super();

    const { SocialNetwork, Contact: page } = Data;

    this.state = {
      inputs: page.inputs,
      textArea: page.textArea,
      mainTitle: page.mainTitle,
      buttonSend: page.buttonSend,
      listSocialNetwork: [
        { url: SocialNetwork.urlTwitter, icon: faTwitter },
        { url: SocialNetwork.urlFacebook, icon: faFacebookF },
        { url: SocialNetwork.urlInstagram, icon: faInstagram },
        { url: SocialNetwork.urlYoutube, icon: faYoutube }
      ],
      imageEnvelopeStyle: {
        background: `url(${imageEnvelope}) no-repeat center center`,
        backgroundSize: 'contain'
      }
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   const elName = event.target.name;
  //   const elValue = event.target.value;

  //   let inputs = [...this.state.inputs];
  //   let input = inputs.find((input) => input.name === elName);

  //   input.value = elValue;

  //   this.setState({ inputs });
  // }

  // handleChangeTextArea(event) {
  //   this.setState({
  //     textArea: {
  //       value: event.target.value
  //     }
  //   });
  // }

  // onSubmit(data) {
  //   console.log(data);
  //   // let inputsAll = [...this.state.inputs, this.state.textArea];
  //   // console.table(inputsAll);
  //   // event.preventDefault();
  // }

  render() {
    const {
      mainTitle,
      inputs,
      textArea,
      buttonSend,
      listSocialNetwork,
      imageEnvelopeStyle
    } = this.state;

    return (
      <>
        <section id="contact">
          <div className="container">
            <div className="contacto">
              <span className="title">{mainTitle}</span>
              <EmailForm
                inputs={inputs}
                textArea={textArea}
                buttonSend={buttonSend}
              />
            </div>
            <SocialNetwork listSocialNetwork={listSocialNetwork} />
            <div className="imageEnvelope" style={imageEnvelopeStyle}></div>
          </div>
        </section>
      </>
    );
  }
}
