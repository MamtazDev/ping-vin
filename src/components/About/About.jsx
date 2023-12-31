import React from "react";
import "./About.css";
import about from "../../assets/about.png";
const About = () => {
  return (
    <>
      <section className="about_wrapper section_padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="mb-4 mb-lg-0">
                <img className="img-fluid" src={about} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-4 mb-lg-0">
                <h2 className="fs_48 about_text" data-aos="fade-up" data-aos-delay="300">
                  About <span>Us</span>
                </h2>
                <div className="about_small_text black" data-aos="fade-up">
                  <p data-aos="fade-up" data-aos-delay="400">
                    Welcome to Moderering, your trusted partner in content
                    moderation solutions. At Moderering, we believe that a safe and
                    positive online environment is essential for businesses and
                    their users. Our mission is to help companies maintain a high
                    standard of user-generated content by providing adequate and
                    efficient moderation services.
                  </p>
                  <p data-aos="fade-up" data-aos-delay="400">
                    We came up with a new solution that allows governmental
                    institutions to detect millions of illegal websites in only a
                    few hours, while private companies can benefit from our help to
                    ensure that a potential partner is not going to harm their
                    reputation by dealing in illegal activities or immoral business.
                  </p>
                  <p data-aos="fade-up" data-aos-delay="500">
                    Whether you run a social media platform, an e-commerce website,
                    or any other online community, Moderering ensures that your
                    content and your brand remains safe, relevant, and in compliance
                    with community guidelines and legal requirements.
                  </p>
                  <p data-aos="fade-up" data-aos-delay="600">
                    Contact us today to learn more about our services and how we can
                    assist you in creating a positive online experience for your
                    users and clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
