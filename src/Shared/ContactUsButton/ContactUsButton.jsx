import React from "react";
import { Link } from "react-router-dom";

const ContactUsButton = () => {
  return (
    <>
      <Link to="/contact">
        <button className="fs_18 black2 contact_btn ">Contact Us</button>
      </Link>
    </>
  );
};

export default ContactUsButton;
