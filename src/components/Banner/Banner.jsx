import React from "react";
import "./Banner.css";
import ContactUsButton from "../../Shared/ContactUsButton/ContactUsButton";

const Banner = () => {
  return (
    <section className="banner_bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 ">
            <h1 className="fs_65 banner_title white_color mb_30">
              The start-up specialized in mass
              <span className="yellow"> moderation.</span>
            </h1>
            <p className="white_color mb-2">
              We are the start-up who build a moderation engine capable of
              flagging millions of illegal websites. With the goal of protecting
              our communities and children from harmful and disturbing content,
              we help private and governmental agencies to significantly reduce
              illegal content from social media and on the Internet overall. The
              engine will be available for public use on our upcoming website
              for 2024.
            </p>
            <br />
            <ContactUsButton />
          </div>

          <div className="col-lg-5 offset-lg-1 banner_right">
            <h3 className="fs_32">Moderering Beta</h3>
            <input type="text" /> <br />
            <button className="fs_16 black2 search_btn ">Search</button>
            <p className="p_86 mt-4 fs_14">
              No result found. either we do not handle this industry yet or you
              made a typo =)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
