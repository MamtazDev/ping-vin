/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ContactUsButton from "./../../Shared/ContactUsButton/ContactUsButton";

const ProtectBrand = () => {
  return (
    <>
      <section
        className="about_wrapper3 text-center mb-0"
        style={{ paddingBottom: "110px" }}
      >
        <div className="container">
          <h1 className="yellow fs_48 fw-bold">Protect Your Brand Today</h1>
          <p className="white_color mb-5 sec4_about">
            Don't let your brand's reputation be compromised. Trust [Your
            Company Name] to monitor, locate, and protect your brand <br /> with
            unwavering dedication. Take control of your brand's online presence
            – get started today.
          </p>
          <ContactUsButton title="Get Started" />
        </div>
      </section>
    </>
  );
};

export default ProtectBrand;
