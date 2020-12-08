import emailjs from "emailjs-com";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Contacts.css";
import { ReactComponent as Logo } from "./assets/Logo.svg";
export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_00it3kc",
        "template_9yjnagn",
        e.target,
        "user_7EV5ZVrZzP2a4cLHtWL26"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="row contact-row">
        <div className="col-6 contact-form">
          <form onSubmit={sendEmail} className="forms">
            <div className="main">
              <h1 className="letUsKnow">Let Us Know What's Up!</h1>
              <div className="sub">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="sub">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="sub">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="sub">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <div className="sub">
                <input
                  type="submit"
                  className="form-control"
                  value="Send "
                ></input>
              </div>
            </div>
          </form>
        </div>
        <div className="col-6 ">
          <img
            src="/images/Rectangle2.png"
            alt="image"
            className="contact-img"
          />
        </div>
      </div>
    </div>
  );
}