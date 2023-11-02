import React from "react";
import c1 from "../../assets/cw1.png";
import c2 from "../../assets/cw2.png";
import c3 from "../../assets/cw3.png";

const WhatCanHelp = () => {
  return (
    <>
      <section className="text-center mt_140 mb_140">
        <div className="container">
          <div className="what_title">
            <p className="blue fs_20">WHAT</p>
            <h1 className="yellow fs_48">WE CAN HELP YOU WITH </h1>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card_bg mb-lg-0 mb-4">
                <div className="icon_bg">
                  <img className="img-fluid" src={c1} alt="send-icon" />
                </div>

                <p className="fs_24 blue">Local culture</p>
                <small className="fs_18 grey">
                  Our Localisation Specialists will help you tailor your website
                  to fit local standards and meet customers expectations.
                </small>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card_design mb-lg-0 mb-4">
                <div className="icon_bg2">
                  <img className="img-fluid" src={c2} alt="send-icon" />
                </div>
                <p className="fs_24 blue">Conversion rate</p>
                <small className="fs_18 grey">
                  Our Localisation Specialists will help you tailor your website
                  to fit local standards and meet customers expectations.
                </small>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card_design mb-lg-0 mb-4">
                <div className="icon_bg2">
                  <img className="img-fluid" src={c3} alt="send-icon" />
                </div>
                <p className="fs_24 blue">GTM strategy</p>
                <small className="fs_18 grey ">
                  Our Localisation Specialists will help you tailor your website
                  to fit local standards and meet customers expectations.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatCanHelp;
