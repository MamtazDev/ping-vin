import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Consultancy from "../Consultancy/Consultancy";
import BrandProtectionHome from "../BrandProtectionHome/BrandProtectionHome";
import OurProduct from "../OurProduct/OurProduct";
import './Home.css'
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="side_shape">
        <About />
        <Consultancy />
      </div>
      <BrandProtectionHome />
      <OurProduct />
      <ContactUs />
      
    </>
  );
};

export default Home;
