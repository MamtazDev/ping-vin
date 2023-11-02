import React from "react";
import "./Consultancy.css";
import PageHeader from "./../PageHeader/PageHeader";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import SiteCheck from "./SiteCheck";
import WhatCanHelp from "./WhatCanHelp";
import Pricing from "./Pricing";
import Succeed from "./Succeed";
const Consultancy = () => {
  return (
    <>
      <PageHeader />
      <section className="text-center">
        <div className="container">
          <div className="consultancy_section1">
            <p className="blue fs_20 mb_10">OUR Moderation SPECIALISTS</p>
            <h1 className="yellow fs_48 mb_30">HELP YOU STAY ETHICAL</h1>
            <small className="fs_16">
              Entering a new market without localisation makes it difficult to
              compete with local businesses, as understanding the local culture,{" "}
              <br />
              language, and best practices is crucial in order to avoid missed
              opportunities and unhappy customers. Our team of in-house e-{" "}
              <br />
              commerce experts covers 15 markets and can ensure that you are
              ready for expansion.
            </small>
          </div>

          <div className="row gap-5   w-100 mt_80">
            <div className="col-lg-2">
              <img src={c1} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={c2} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={c3} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={c4} alt="" />
            </div>
            <div className="col-lg-2">
              <img src={c5} alt="" />
            </div>
          </div>
        </div>
      </section>

      <SiteCheck />
      <WhatCanHelp />
      <Pricing />
      <Succeed />
    </>
  );
};

export default Consultancy;
