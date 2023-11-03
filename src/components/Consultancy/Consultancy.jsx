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
      <div className="container section_padding pb-0">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="mb-4 mb-lg-0">
              <h2 className="fs_48 about_text blue" data-aos="fade-up" data-aos-delay="300">Consultancy</h2>
              <div className="consultancy_small_text black" data-aos="fade-up">
                <p data-aos="fade-up" data-aos-delay="400">
                  <img src={yellowicon} className="me-1" alt="" /> Helping Private
                  and Governmental agencies assess the legality of a website.
                </p>
                <p data-aos="fade-up" data-aos-delay="500">
                  <img src={yellowicon} className="me-1" alt="" /> Providing Site
                  checks and consulting services.
                </p>
                <p data-aos="fade-up" data-aos-delay="600">
                  <img src={yellowicon} className="me-1" alt="" /> Go to the
                  contact page to get in touch with the correct service.
                </p>
              </div>
              <ContactUsButton />
            </div>
          </div>
          <div className="col-lg-6">

            <div className="consultancy_right mb-4 mb-lg-0" data-aos="fade-left">
              <img className="w-100" src={c1} alt="" />

              <div className="time_design">
                <h1>20+</h1>
                <p>Years</p>
              </div>

              <div className="row mt-3 pe-0 ps-0">
                <div className="col-lg-6 pe-0 ps-0">
                  <div className="mb-4 mb-lg-0 text-center">

                    <img className="img-fluid" src={c2} alt="" />
                  </div>
                </div>

                <div className="col-lg-6 pe-0 ps-0 ">
                  <div className="mb-4 mb-lg-0 text-center">

                    <img className="img-fluid" src={c3} alt="" />
                  </div>
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
