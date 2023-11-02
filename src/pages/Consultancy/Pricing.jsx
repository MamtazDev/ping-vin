import React from "react";
import arrow from "../../assets/yelloconsultIcon.png";

const Pricing = () => {
  return (
    <>
      <section className="mb_140 overflow-hidden">
        <div className="container">
          <h2 className="pricing_title mb_70" data-aos="fade-up" data-aos-delay="300">Pricing</h2>
          <div className="row">

            <div className="col-lg-4 mb-lg-0 mb-5">
              <div className="pricing_card d-flex flex-column h-100" data-aos="fade-right" data-aos-delay="300">
                <div className="pricing_main_conent">
                  <div className="pricing-header">
                    <div className="d-flex justify-content-between">
                      <h3 className="yellow price_number">€889</h3>
                      <p className="price_access">PRO</p>
                    </div>
                    <hr />
                  </div>

                  <div className="pricing_details_wrapper">
                    <div className="pricing_details">
                      <h3 className="mb_30">ANNUAL Subscription</h3>
                      <p>
                        <img src={arrow} alt="" />
                        Full Access to the Moderation DataBase{" "}
                      </p>
                      <p>
                        <img src={arrow} alt="" />
                        Dedicated Moderator
                      </p>
                      <p>
                        <img src={arrow} alt="" />
                        Unlimited Site Check
                      </p>
                      <p style={{ marginBottom: "26px" }}>
                        <img src={arrow} alt="" />
                        Trainings & Consultancy
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pricing_btn_wrapper">
                  <small>
                    Local terms & conditions in high-quality language, and easy
                    access to information, will help customers perceive your
                    webshop as trustworthy.
                  </small>
                  <button className="pricing_btn mt_40">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-lg-0 mb-5">
              <div className="pricing_card d-flex flex-column h-100" data-aos="fade-up" data-aos-delay="400">
                <div className="pricing_main_conent flex-grow-1">
                  <div className="pricing-header">
                    <div className="d-flex justify-content-between">
                      <h3 className="yellow price_number">€999</h3>
                      <p className="price_access">BASIC</p>
                    </div>
                    <hr />
                  </div>

                  <div className="pricing_details_wrapper">
                    <div className="pricing_details">
                      <h3 className="mb_30">6 MONTH Subscription</h3>
                      <p>
                        <img src={arrow} alt="" />
                        Full Access to the Moderation DataBase{" "}
                      </p>
                      <p>
                        <img src={arrow} alt="" />
                        Dedicated Moderator
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pricing_btn_wrapper">
                  <small>
                    Local terms & conditions in high-quality language, and easy
                    access to information, will help customers perceive your
                    webshop as trustworthy.
                  </small>
                  <button className="pricing_btn mt_40">Buy Now</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-lg-0 mb-5">
              <div className="pricing_card d-flex flex-column h-100" data-aos="fade-left" data-aos-delay="500">
                <div className="pricing_main_conent flex-grow-1">
                  <div className="pricing-header">
                    <div className="d-flex justify-content-between">
                      <h3 className="yellow price_number">€1200</h3>
                      <p className="price_access">TEST</p>
                    </div>
                    <hr />
                  </div>

                  <div className="pricing_details_wrapper">
                    <div className="pricing_details">
                      <h3 className="mb_30">1 MONTH TEST</h3>
                      <p>
                        <img src={arrow} alt="" />
                        Full Access to the Moderation DataBase{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pricing_btn_wrapper">
                  <small>
                    Local terms & conditions in high-quality language, and easy
                    access to information, will help customers perceive your
                    webshop as trustworthy.
                  </small>
                  <button className="pricing_btn mt_40">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
