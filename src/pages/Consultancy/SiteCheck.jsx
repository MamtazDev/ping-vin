import React from "react";
import "./Consultancy.css";
import arrow from "../../assets/yelloconsultIcon.png";
const SiteCheck = () => {
  return (
    <>
      <section className="sitecheck_bg mt_140">
        <div className="container">
          <div className="row">
            {/* button */}

            {/* button */}
            <div className="col-lg-6 position-relative">
              <div className="upBtn">
                <button className="yellow_btn">Mainstream Media</button>
              </div>
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

                <div>
                  <small className="">
                    Our report gives valuable insights and empowers you to make
                    informed decisions to successfully navigate the specific
                    market. It provides an understanding of the localisation
                    level of your webshop and pin-points room for improvements
                    to increase your overall conversion rate.
                  </small>
                  <h2 className="mt_40 mb-3 fs_32">€665</h2>
                  <button className="buy_now_btn">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <div className="upBtn">
                <button className="yellow_btn">Adult Website</button>
              </div>
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

                <div>
                  <small className="">
                    Our detailed report will provide you with a comprehensive
                    analysis of your website, uncover its strengths and
                    weaknesses, and present actionable localization
                    recommendations to enhance its overall performance in the
                    given market.
                  </small>
                  <h2 className="mt_40 mb-3 fs_32">€2,140</h2>
                  <button className="buy_now_btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SiteCheck;
