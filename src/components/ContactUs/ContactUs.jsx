import React from 'react'
import './ContactUs.css'
import contactUsImg from '../../assets/contact_us_img.png';
import ContactUsButton from '../../Shared/ContactUsButton/ContactUsButton';

const ContactUs = () => {
    return (
        <section className='contact_us section_padding pb-0'>
            <div className="container">
                <div className="contact_us_wrapper">
                    <div className="contact_us_main">
                        <div className="contact_us_left">
                            <img className='img-fluid' src={contactUsImg} alt="image" />
                        </div>

                        <div className="contact_us_right">
                            <div className="contact_us_content">
                                <h1 className="contact_us_heading fw_extrabold fs_48 text-white mb-4">
                                    Our <span className="yellow">Product</span>
                                </h1>
                                <form action="">
                                    <div className="name mb-3">
                                        <input className='w-100' type="text" placeholder='Enter your name' />
                                    </div>
                                    <div className='e_mail mb-3'>
                                        <input className='w-100' type="mail" placeholder='Enter your email address' />
                                    </div>

                                    <div className='text_area'>
                                        <textarea className='w-100' name="" id="" cols="30" rows="10" placeholder='Type here...'></textarea>
                                    </div>

                                </form>
                                <ContactUsButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs