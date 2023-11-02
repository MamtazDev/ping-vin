import React from "react";
import arrow from "../../assets/yelloconsultIcon.png";

const Pricing = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* top */}
              <div className="d-flex justify-content-between">
                <h3>€889</h3>
                <p>PRO</p>
              </div>
              <hr />
              <div className="site_card">
                <h3 className="mb_40">SITE CHECK</h3>
                <p>
                  <img src={arrow} alt="" />
                  Evaluation of the website Legality
                </p>
                <p>
                  <img src={arrow} alt="" />
                  Localization of your brand presence on the website
                </p>
                <p>
                  <img src={arrow} alt="" />
                  Incriminating materials provided: Screenshots, videos, links
                </p>
                <p style={{ marginBottom: "40px" }}>
                  <img src={arrow} alt="" />
                  Thorough report by moderation specialists
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
