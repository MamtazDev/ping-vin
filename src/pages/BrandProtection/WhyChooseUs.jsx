/* eslint-disable react/no-unescaped-entities */
import React from "react";
import moderation from "../../assets/choose.png";
const WhyChooseUs = () => {
  return (
    <>
      <section className="about_wrapper section_padding pb-0 mb_140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fs_48 about_text">
                Why Choose <span>Us</span>
              </h2>
              <div className="about_small_text black">
                <div className="moderation_text">
                  <p className="mb_20 fs_16">
                    <div className="box"></div>
                    <b>Proven Expertise: </b>
                     With years of experience, we've successfully safeguarded
                    countless brands and products from potential harm.
                  </p>
                  <p className="mb_20 fs_16">
                    <div className="box"></div>
                    <b>Cutting-Edge Technology: </b>
                     Our state-of-the-art moderation tool ensures a thorough and
                    efficient search process.
                  </p>
                  <p className="mb_20 fs_16">
                    <div className="box"></div>
                    <b>Customized Solutions: </b>
                     We tailor our services to meet your specific brand
                    protection needs.
                  </p>
                  <p className="mb_20 fs_16">
                    <div className="box"></div>
                    <b>Swift Action: </b>
                     Time is of the essence, and we prioritize swift detection
                    and resolution.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <img className="img-fluid" src={moderation} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
