import React, { useEffect } from 'react';
import './Footer.css';
import footerLogo from '../../assets/ping_vin_footer_logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import mailIcon from '../../assets/mail.svg'



const Footer = () => {
    const location = useLocation()
    const currentPage = location.pathname
    return (
        <footer className={currentPage === '/' ? 'footerPt2' : 'footerPt1'} >
            <div className="container">
                <div className="footer_wrapper">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="nav_logo mb-5 mb-lg-0">
                                <img src={footerLogo} alt="footer-logo" />
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="footer_nav mb-5 mb-lg-0">
                                <div className="footer_header">
                                    <h3 className='fs-5 fw-semibold text-white'>
                                        Link
                                    </h3>

                                    <ul className='mt-4'>
                                        <li className='text-white fs-6 fw-normal mb-3'>
                                            <Link to={"#"} className='text-white text-decoration-none'>
                                                About Us
                                            </Link>
                                        </li>

                                        <li className='text-white fs-6 fw-normal mb-3'>
                                            <Link to={"#"} className='text-white text-decoration-none'>
                                                Consultancy
                                            </Link>
                                        </li>

                                        <li className='text-white fs-6 fw-normal mb-3'>
                                            <Link to={"#"} className='text-white text-decoration-none'>
                                                Brand Protection
                                            </Link>
                                        </li>

                                        <li className='text-white fs-6 fw-normal mb-3'>
                                            <Link to={"#"} className='text-white text-decoration-none'>
                                                Our Product
                                            </Link>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="footer_nav mb-5 mb-lg-0">
                                <div className="footer_header">
                                    <h3 className='fs-5 fw-semibold text-white'>
                                        Support
                                    </h3>

                                    <ul className='mt-4'>
                                        <li className='text-white fs-6 fw-normal mb-3'>
                                            <Link to={"#"} className='text-white text-decoration-none'>
                                                Privacy Policy
                                            </Link>
                                        </li>

                                        <li className='text-white fs-6 fw-normal mb-3'>
                                            <Link to={"#"} className='text-white text-decoration-none'>
                                                Terms and condition
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="footer_nav mb-5 mb-lg-0">
                                <div className="footer_header">
                                    <h3 className='fs-5 fw-semibold text-white'>
                                        Contact
                                    </h3>

                                    <div className='mt-4'>
                                        <Link to={'mailto: ashiqur687@gamil.com'}>
                                            <span className='p-2 rounded-circle bg_yellow me-2'>
                                                <img src={mailIcon} alt="icon" />
                                            </span>
                                            <span className='text-white'>
                                                email@moderering.com
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="text-center py-3">
                    <span className='text-white fs-6 fw-light'>
                        copyright ©  2023 Pingvin Skfold. All right reserved
                    </span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;