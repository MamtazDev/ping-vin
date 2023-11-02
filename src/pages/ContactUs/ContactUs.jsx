import React from "react";
import PageHeader from "./../PageHeader/PageHeader";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import "./ContactUs.css";
import ContactUsButton from "../../Shared/ContactUsButton/ContactUsButton";
const ContactUs = () => {
  return (
    <>
      <PageHeader pageHeaderName={"Contact Us"} />

      <div className="container mb_140">
        <div className="row align-items-start">
          <div className="col-lg-5 mb-5">
            <div className="about_text pt-0">
              <p className="fs_48 mb_20">
                Get in <span>Touch</span>
              </p>
            </div>
            <small className="common_text">
              Get in Touch! Contact with us Get in Touch! Contact with us
            </small>

            <div className="contact_details">
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={location} alt="" />
                <div>
                  <h5>Address</h5>
                  <p className="common_text">
                    22 Baker Street, London, UnitedKingdom, W1U 3BW
                  </p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={phone} alt="" />
                <div>
                  <h5>Call Us Today</h5>
                  <p className="common_text">(+001) 123-456-7890</p>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center align-items-center">
                <img src={mail} alt="" />
                <div>
                  <h5>Email Us</h5>
                  <p className="common_text">company@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact_form">
              <h3 className="fs_32 blue mb_40">Send Us a Message</h3>
              <form>
                <div className=" row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your address"
                    />
                  </div>
                </div>
                <div className=" row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Type here..."
                  ></textarea>
                </div>
                <ContactUsButton />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
