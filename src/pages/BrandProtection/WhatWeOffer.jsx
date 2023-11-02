import React from "react";
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";
const WhatWeOffer = () => {
  return (
    <>
      <section className="text-center ">
        <div className="about_text">
          <p className="fs_48 mb_70">
            What We <span>Offer</span>
          </p>
        </div>

        {/* card */}
        <div className="row">
          <div className="col-lg-3">
            <div className="mb-4 mb-lg-0">
              <div className="whatweoffer_card card1">
              <img src={w1} alt="" />
              <p>
                Advanced Brand <br />
                Monitoring
              </p>
            </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-4 mb-lg-0">
              <div className="whatweoffer_card card2">
              <img src={w2} alt="" />
              <p>Expert Moderators</p>
            </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-4 mb-lg-0">
              <div className="whatweoffer_card card3">
              <img src={w3} alt="" />
              <p>
                Swift Detection and <br />
                Removal
              </p>
            </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-4 mb-lg-0">
              <div className="whatweoffer_card card4">
              <img src={w4} alt="" />
              <p>
                Comprehensive
                <br />
                Protection
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeOffer;
