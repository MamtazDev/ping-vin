import React from "react";
import moderation from "../../assets/protection.png";
const Protection = () => {
  return (
    <>
      <section className="about_wrapper section_padding pb-0 mb_140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fs_48 about_text">
                Community <span>and Protection</span>
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
                <h4>Content Analysis Algorithms:</h4>
                <div className="moderation_text">
                  <p className="mb_20 fs_16">
                    <div className="box"></div>
                    <b>Community Guidelines: </b>
                    Develop clear and concise community guidelines that outline
                    expected behaviors, values, and content standards. These
                    guidelines serve as the foundation for community building.
                  </p>
                  <p className="mb_20 fs_16">
                    <div className="box"></div>
                    <b>User Engagement: </b>
                    Foster user engagement through interactive features, such as
                    comments, forums, or groups, to encourage meaningful
                    interactions and connections.
                  </p>
                  <p className="mb_20 fs_16">
                    <div className="box"></div>
                    <b>Content Curation: </b>
                    Curate and showcase high-quality, valuable, or creative
                    content to encourage positive contributions and inspire
                    users to participate actively.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <img className="img-fluid" src={moderation} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Protection;
