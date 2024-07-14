import React from 'react';
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.css";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
      e.preventDefault();
      emailjs
          .sendForm(
              "service_gtih0k5",
              "template_y8ptv7c",
              form.current,
              "o7wLgsMl878QM-c3Y"
          )
          .then(
              (result) => {
                  console.log(result.text);
                  setDone(true);
              },
              (error) => {
                  console.log(error.text);
              }
          );
  };

  return (
      <>
          <div className="c-right">
            <div className="contact-text">Contact Me</div>
              <div className="contact-form-container">
                  <div className="contact-form">
                      <form ref={form} onSubmit={sendEmail}>
                          <div className="container">
                              <input
                                  type="text"
                                  name="user_name"
                                  className="user"
                                  placeholder="Name"
                                  required
                              />
                          </div>
                          <div className="container">
                              <input 
                                  type="email"
                                  name="user_email"
                                  className="user"
                                  placeholder="Email"
                                  required
                              />
                          </div>
                          <div className="container">
                              <textarea
                                  name="message"
                                  className="user"
                                  placeholder="Message"
                                  required
                              />
                          </div>
                          <div className="contact-button-container">
                              <div className="ct-button">
                                  <input
                                      type="submit"
                                      value="Send"
                                      className="contact-button"
                                  />
                              </div>
                          </div>
                          <span>{done && "Thanks for Contacting me"}</span>
                          <div
                              className="blur c-blur1"
                              style={{ background: "var(--purple)" }}
                          ></div>
                      </form>
                  </div>
              </div>
          </div>

      </>
  );
};
export default Contact
