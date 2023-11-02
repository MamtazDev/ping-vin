import React from "react";
import "./OurProduct.css";
import PageHeader from "../PageHeader/PageHeader";
import Moderation from "./Moderation";
import Flagging from "./Flagging";
import Protection from "./Protection";
const OurProduct = () => {
  return (
    <>
      <PageHeader pageHeaderName={"Our Product"} />
      <div className="container">
        <Moderation />
        <Flagging />
        <Protection />
      </div>
    </>
  );
};

export default OurProduct;
