/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ContactUsButton = ({ title }) => {
  return (
    <>
      <Link to="/contact">
        <button className="fs_18 black2 contact_btn">
          {title ? title : "Contact Us"}
        </button>
      </Link>
    </>
  );
};

export default ContactUsButton;
