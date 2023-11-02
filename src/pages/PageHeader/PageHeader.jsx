import React from "react";
import "./PageHeader.css";
import { Link, useLocation, useParams } from "react-router-dom";
const PageHeader = () => {
  const location = useLocation();
  const currentLocation = location.pathname.slice(1);
  return (
    <>
      <div className="page_banner text-center white_color">
        <h1 className="about_text1 mb-3">
          About <span className="white_color">Us</span>
        </h1>

        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb justify-content-center align-items-center">
            <li class="breadcrumb-item text-white">
              <Link to={"/"} className="text-white fs_18 fw-medium" >Home</Link>
            </li>

            <li class="breadcrumb-item text-white active text-capitalize fs_18 fw-medium" aria-current="page">
              {currentLocation}
            </li>
          </ol>
        </nav>

      </div>
    </>
  );
};

export default PageHeader;
