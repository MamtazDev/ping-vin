import React, { useRef } from "react";
import "./Banner.css";
import ContactUsButton from "../../Shared/ContactUsButton/ContactUsButton";
import videoSource from "../../assets/video.mp4";
import { BsPause, BsPlay } from "react-icons/bs";

const Banner = () => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <section className="banner_bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 " data-aos="fade-right">
            <h1 className="fs_65 banner_title white_color mb_30" data-aos="fade-up" data-aos-delay="300">
              The start-up specialized in mass
              <span className="yellow"> moderation.</span>
            </h1>

            <p className="white_color banner_p" data-aos="fade-up" data-aos-delay="400">
              We are the start-up who build a moderation engine capable of
              flagging millions of illegal websites. With the goal of protecting
              our communities and children from harmful and disturbing content,
              we help private and governmental agencies to significantly reduce
              illegal content from social media and on the Internet overall. The
              engine will be available for public use on our upcoming website
              for 2024.
            </p>

            <ContactUsButton />
          </div>

          <div className="col-lg-5 offset-lg-1 banner_right " data-aos="fade-left">
            {/* video goes to here */}


              <video ref={videoRef} controls width="100%" height="auto">
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* <button onClick={handlePlayPause}>
                {videoRef.current && videoRef.current.paused ? <BsPlay color="red" /> : <BsPause color="green" />}
              </button> */}




          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
