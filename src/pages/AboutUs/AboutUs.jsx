/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./AboutUs.css";
import PageHeader from "../PageHeader/PageHeader";
import about from "../../assets/groupAbout.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/g3.png";
import ContactUsButton from "../../Shared/ContactUsButton/ContactUsButton";
const AboutUs = () => {
  return (
    <>
      <PageHeader pageHeaderName={"About"} pageHeaderName2={'Us'} />
      <section className="about_wrapper section_padding pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="mb-4 mb-lg-0">

                <img className="img-fluid" src={about} alt="" />
              </div>
            </div>

            <div className="col-lg-6 offset-lg-1 sec1_about">
              <div className="mb-4 mb-lg-0">
                <p className="fs_20 blue" data-aos="fade-up" data-aos-delay="100">WHO WE ARE</p>
                <h2 className="fs_48 about_text mt-2 pt-0 mb_40" data-aos="fade-up" data-aos-delay="200">
                  Welcome to <span>Moderering</span>
                </h2>
                <div className="" data-aos="fade-up" data-aos-delay="300">
                  <small>
                    Your unwavering partner in cutting-edge content moderation
                    solutions. At Moderering, we hold a steadfast belief that a
                    safe and positive online environment is not just a luxury but
                    an absolute necessity for businesses and their cherished
                    users. Our core mission is to empower companies by enabling
                    them to uphold the highest standards of user-generated content
                    through the provision of comprehensive and highly efficient
                    moderation services.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_wrapper about_wrapper2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="mb-4 mb-lg-0">
                <h2 className="fs_48 yellow about_text2 mt-2 pt-0" data-aos="fade-up" data-aos-delay="100">
                  Our Dedication to a Safer Online World
                </h2>
                <div className="about_small_text  black mt_40">
                  <p className="white_color" data-aos="fade-up" data-aos-delay="200">
                    At Moderering, we are more than just a service provider; we
                    are advocates for a safer and more positive digital landscape.
                    We understand that the internet is the lifeblood of countless
                    businesses, serving as a vital channel of communication and
                    commerce. In light of this, we take it upon ourselves to offer
                    solutions that enable companies to navigate the online realm
                    with confidence and assurance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 offset-lg-1">
              <div className="mb-4 mb-lg-0">
                <img className="img-fluid img_about_2" src={about2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_wrapper mt_140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="mb-4 mb-lg-0" data-aos="fade-right">

                <img className="img-fluid img_about_2" src={about3} alt="" />
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 sec3_about">
              <div className="mb-4 mb-lg-0">
                <h2 className="fs_48 about_text mt-2 pt-0 " data-aos="fade-up" data-aos-delay="100">
                  A Game-Changing <span>Solution</span>
                </h2>
                <div className="about_small_text black">
                  <p className="black fs_20" data-aos="fade-up" data-aos-delay="200">
                    We're proud to introduce a groundbreaking solution that is
                    revolutionizing content moderation. Our innovative technology
                    empowers governmental institutions to swiftly and accurately
                    identify millions of illegal websites in a matter of mere
                    hours. This represents a significant leap forward in the
                    global effort to combat online criminal activity.
                    Concurrently, private companies have the opportunity to
                    leverage our expertise, ensuring that potential partnerships
                    are devoid of the taint of illegal activities or morally
                    questionable business practices. Your reputation is
                    invaluable, and we are committed to safeguarding it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_wrapper3 text-center">
        <div className="container">
          <p className="white_color mb-5 sec4_about" data-aos="fade-up" data-aos-delay="300">
            Today, we extend our hand to you, urging you to get in touch with us
            to explore the full spectrum of services we offer. Together, we can
            forge a partnership that will redefine your digital landscape,
            offering your users and clients a more enriching and secure online
            experience. In an era where the digital world plays a pivotal role
            in business success, it's paramount to have a dependable ally like
            Moderering by your side. Reach out to us today and let's embark on
            this transformative journey together.
          </p>
          <ContactUsButton />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
