import axios from "axios";
import React, { useState } from "react";
import Menu from "./Header/menu";
import Footer from "./Main/Footer";

const contactUs = () => {


  const [fullName, setFullName] = useState(null);
  const [emailAddress, setEmailAddress] = useState(" ");
  const [message, setMessage] = useState(" ");

  const handleMessage = (event) => {
    event.preventDefault();
    setFullName(" ");
    setEmailAddress(" ");
    setMessage(" ");

    postMessage();
  };
  const postMessage = () => {
    axios
      .post("http://localhost:8000/contactusQueries", {
        full_name: fullName,
        email_address: emailAddress,
        message: message
      })
      .then((res) => getRating())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Menu />
      <div className="container">
        <div className="d-flex contact-container mt-5">
          <div className="contact-header">
            <div className="rounded-circle img-fluid border contact-img">
              <img
                src="/assets/img/icons/phone-final.jpg"
                className="rounded-circle img-fluid border contact-img"
              />
            </div>
            <div className="contact-header-text-container">
              <span>
                <b>Phone:</b>
              </span>
              <span className="contact-header-text-detail">
                &nbsp; 1111111111
              </span>
            </div>
          </div>
          <div className="contact-header">
            <div className="rounded-circle img-fluid border contact-img">
              <img
                src="/assets/img/send-final.jpg"
                className="rounded-circle img-fluid border contact-img"
              />
            </div>
            <div className="contact-header-text-container">
              <span>
                <b>Email:</b>
              </span>
              <span className="contact-header-text-detail">
                &nbsp; test@test.com
              </span>
            </div>
          </div>
          <div className="contact-header">
            <div className="">
              <img
                src="/assets/img/icons/website-final.jpg"
                className="rounded-circle img-fluid border contact-img"
              />
            </div>
            <div className="contact-header-text-container">
              <span>
                <b>Website:</b>
              </span>
              <span className="contact-header-text-detail">
                &nbsp; payless.com
              </span>
            </div>
          </div>
        </div>

        <div className="card contact-card">
          <div className="card-body">
            <div className="card-title border-bottom p-2 contact-heading">Let's Talk!</div>
            <div className="d-flex">
              <div>
                <div className="card-text">
                  <form className="card_form">
                    <div className="d-flex form-header-contact">
                      <div className="d-flex flex-column detail-container">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Full Name"
                          className="contact-input mt-2"
                          name="full_name"
                        />
                      </div>
                      <div className="d-flex flex-column detail-container">
                        <label className="form-label">Email Address</label>
                        <input
                          type="text"
                          onChange={(e) => setEmailAddress(e.target.value)}
                          placeholder="Email"
                          className="contact-input mt-2 "
                          name="email_address"
                        ></input>
                      </div>
                    </div>
                      <div className="d-flex flex-column mt-5">
                        <label className="form-label">Message</label>
                        <input
                          type="text"
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Message"
                          className="contact-input mt-2 message"
                          name="message"
                        />
                      </div>
                  </form>
                </div>
                <div>
                  <button className="compare-btn" onClick={handleMessage}>Send Message</button>
                </div>
              </div>
              <div className="contact-image-container">
                <img src="/assets/img/contact.jpg" className="contact-us-image"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default contactUs;
