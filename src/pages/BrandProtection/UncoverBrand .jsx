/* eslint-disable react/no-unescaped-entities */
import React from "react";
import brand from "../../assets/brand1.png";
const UncoverBrand = () => {
  return (
    <>
      <section className="about_wrapper section_padding pb-0 mb_140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid" src={brand} alt="" />
            </div>
            <div className="col-lg-6  offset-lg-1">
              <h2 className="fs_48 about_text brand_text">
                Uncover Brand <span>Discrepancies with Precision</span>
              </h2>
              <div className="about_small_text black mt_40">
                <p>
                  Are you worried that your brand or products might be making
                  unsanctioned appearances across the vast online landscape?
                  Don't leave it to chance – we've got the solution. <br /> At
                  [Your Company Name], we specialize in brand monitoring and
                  protection. With our cutting-edge in-house moderation tool and
                  a team of dedicated moderators, we offer you the power to find
                  and address any unauthorized use of your brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UncoverBrand;
