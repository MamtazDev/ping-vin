import React from "react";
import moderation from "../../assets/moderation.png";
const Moderation = () => {
  return (
    <>
      <section className="about_wrapper section_padding pb-0 mb_140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="fs_48 about_text">
                Moderation <span>Engine</span>
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
                    <b>Text Analysis: </b>
                    The engine uses natural language processing (NLP) algorithms
                    to analyze text content for hate speech, harassment, spam,
                    or any form of prohibited language.
                  </p>
                  <p className="mb_20 fs_16">
                    <div className="box"></div>
                    <b>Image and Video Analysis:</b>
                    It employs computer vision and image recognition algorithms
                    to scan images and videos for explicit or harmful content,
                    such as nudity or violence.
                  </p>
                  <p className="mb_20 fs_16">
                    <div className="box"></div>
                    <b>Audio Analysis: </b>
                    For platforms that support audio content, the engine can use
                    speech recognition to identify inappropriate or illegal
                    content in audio files.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <img className="img-fluid" src={moderation} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Moderation;
