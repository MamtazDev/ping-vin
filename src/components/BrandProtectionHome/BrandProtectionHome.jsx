import React from "react";
import brand from '../../assets/brand.png'
import './BrandProtectionHome.css'
const BrandProtectionHome = () => {
  return (
    <>
      <section className="brand_protection_wrapper section_padding" data-aos="fade-up">
        <div className="container">
          <div className="brand_protection text-center">
            <h1 className="fw_extrabold fs_48 text-white mb-4" data-aos="fade-up" data-aos-delay="300">
              Brand <span className="yellow">Protection</span>
            </h1>
            <p className="text-white fs-6" data-aos="fade-up" data-aos-delay="400">
              Think your brand or products appears somewhere it should not be? We can
              search and locate your specific brand in <br /> thousands of websites using our
              in-house moderation tool and moderators.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandProtectionHome;
