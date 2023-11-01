import React from "react";
import "./Consultancy.css";
import yellowicon from "../../assets/yelloconsultIcon.png";
import c1 from "../../assets/consultancy1.png";
import c2 from "../../assets/consultancy2.png";
import c3 from "../../assets/consultancy3.png";
import ContactUsButton from "../../Shared/ContactUsButton/ContactUsButton";
const Consultancy = () => {
  return (
    <>
      <div className="container mt_140">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="fs_48 about_text blue">Consultancy</h2>
            <div className="consultancy_small_text black">
              <p>
                <img src={yellowicon} className="me-1" alt="" /> Helping Private
                and Governmental agencies assess the legality of a website.
              </p>
              <p>
                <img src={yellowicon} className="me-1" alt="" /> Providing Site
                checks and consulting services.
              </p>
              <p>
                <img src={yellowicon} className="me-1" alt="" /> Go to the
                contact page to get in touch with the correct service.
              </p>
            </div>
            <ContactUsButton />
          </div>
          <div className="col-lg-6">
            <div className="consultancy_right">
              <img className="img-fluid" src={c1} alt="" />

              <div className="time_design">
                <h1>20+</h1>
                <p>Years</p>
              </div>

              <div className="row mt-3 pe-0 ps-0">
                <div className="col-lg-6 pe-0 ps-0 ps-lg-3 ">
                  <img className="img-fluid" src={c2} alt="" />
                </div>
                <div className="col-lg-6 pe-0 ps-0 ">
                  <img className="img-fluid" src={c3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultancy;