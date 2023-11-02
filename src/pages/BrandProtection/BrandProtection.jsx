import React from "react";
import "./BrandProtection.css";
import PageHeader from "./../PageHeader/PageHeader";
import UncoverBrand from "./UncoverBrand ";
import WhatWeOffer from "./WhatWeOffer";
import WhyChooseUs from "./WhyChooseUs";
import ProtectBrand from "./ProtectBrand";
const BrandProtection = () => {
  return (
    <>
      <PageHeader pageHeaderName={"Brand Protection"} />
      <div className="container">
        <UncoverBrand />
        <WhatWeOffer />
        <WhyChooseUs />
      </div>
      <ProtectBrand />
    </>
  );
};

export default BrandProtection;
