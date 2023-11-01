import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import ContactUsButton from "../ContactUsButton/ContactUsButton";
const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg white">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="">
                <i className="fa-solid fa-bars-staggered"></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse pb-lg-0 pb-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active white_color fs_18 px-4"
                    aria-current="page"
                    href="#"
                  >
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link white_color fs_18 px-4" href="#">
                    Consultancy
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link white_color fs_18 px-4" href="#">
                    Brand Protection
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link white_color fs_18 px-4" href="#">
                    Our Product
                  </a>
                </li>
              </ul>
              <form className="d-flex justify-content-center" role="search">
                <ContactUsButton />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
