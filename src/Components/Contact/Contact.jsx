import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ch1dtgl", "template_4w54b7a", form.current, {
        publicKey: "lKvpc0ugmUE06VYXd",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setDone(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textArea name="message" className="user" placeholder="Message" />
          <input type="Submit" value="Send" className="button" />
          <span>{done && "Thanks for contacting me!"} </span>
          <div
            className="blur c-blur2"
            style={{ background: "var(--purpke)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
