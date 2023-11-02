import React from "react";
import moderation from "../../assets/Flagging.png";
const Flagging = () => {
  return (
    <>
      <section className="about_wrapper section_padding pb-0 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 ">
              <img className="img-fluid" src={moderation} alt="" />
            </div>
            <div className="col-lg-6 offset-lg-1">
              <h2 className="fs_48 about_text">
                Content <span>Flagging</span>
              </h2>
              <div className="about_small_text black">
                <p>
                  Welcome to Moderering, your trusted partner in content
                  moderation solutions. At Moderering, we believe that a safe
                  and positive online environment is essential for businesses
                  and their users. Our mission is to help companies maintain a
                  high standard of user-generated content by providing adequate
                  and efficient moderation services.
                </p>
                <h4>User-Initiated Reporting</h4>
                <div className="moderation_text">
                  <p className="mb_20 fs_16">
                    <div className="box"></div>
                    <b>Automated Flagging: </b>
                    Content flagging often begins with users reporting
                    problematic content. Most platforms have a Report or Flag
                    button that allows users to alert platform administrators or
                    moderators to content that they believe violates the rules.
                  </p>
                  <p className="mb_20 fs_16">
                    <div className="box"></div>
                    <b>Common Reasons for Flagging: </b>
                    Users can typically flag content for various reasons,
                    including hate speech, harassment, spam, explicit or adult
                    content, violence, copyright violations, misinformation, or
                    any other policy violations.
                  </p>
                  <p className="mb_20 fs_16">
                    <div className="box"></div>
                    <b>Customizable Flagging Categories:</b>
                    Platform administrators can often customize the flagging
                    categories to align with their specific content guidelines
                    and community standards.
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

export default Flagging;
