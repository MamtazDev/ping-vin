import React from "react";
import { ourProductData } from "./../../data/data";
import "./OurProduct.css";

const OurProduct = () => {
  return (
    <section className="our_product">
      <div className="container">
        <div className="section_heading text-center pb_60">
          <h1 className="about_text mb-4" data-aos="fade-up" data-aos-delay="300">
            Our <span className="yellow">Product</span>
          </h1>

          <p className="fs-6 fw-medium" data-aos="fade-up" data-aos-delay="400">
            We have built a moderation engine that can detect millions of
            illegal websites without needing a human to look at disturbing{" "}
            <br /> content. This engine also helps our highly trained moderators
            to filter out user generated content which makes them faster <br />{" "}
            and more accurate than a moderator without the engine.
          </p>
        </div>
        <div className="row">
          {ourProductData.map((productInfo, index) => (
            <div className="col-lg-4" key={index}>
              <div className="product_card mb-4 mb-lg-0">
                <div className="product_img">
                  <img src={productInfo.icon} alt="icon" />
                </div>

                <h4 className="fs-4 fw-semibold mb-3">
                  {productInfo.productName}
                </h4>

                <p className="fs-6 fw-normal">{productInfo.productInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
