import React from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowUp, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

// Import images
import breadcrumbBg from '../assets/img/bg/breadcrumb_bg.jpg';
import callIcon from '../assets/img/icon/call-calling.svg';
import smsIcon from '../assets/img/icon/sms-edit.svg';
import locationIcon from '../assets/img/icon/location-add.svg';
import footerBg from '../assets/img/bg/footer-bg.jpg';
import callingIcon from '../assets/img/icon/calling-icon01.png';
import footerAvatar from '../assets/img/footer/footer-avatar.png';
import logoWhite from '../assets/img/logo/logo_white.svg';
import logo from '../assets/img/logo/logo.svg';
import preloader from '../assets/img/logo/preloader.png';
import heroTopIcon from '../assets/img/icon/hero_top-icon.png';
import flag from '../assets/img/icon/flag.png';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Contact = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isSearchOpen, setIsSearchOpen] = React.useState(false);

    const handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="body_wrap">

            {/* Back to Top Button */}
            <div className="xb-backtotop">
                <button onClick={handleBackToTop} className="scroll">
                    <FaArrowUp />
                </button>
            </div>

            {/* Preloader - Would typically be conditionally rendered */}
            <div id="preloader" style={{ display: 'none' }}>
                <div id="loader" className="loader">
                    <div className="loader-container">
                        <div className="loader-icon">
                            <img src={preloader} alt="preloader" />
                        </div>
                    </div>
                </div>
            </div>

            
            {/* Search Form */}
            <div className={`header-search-form-wrapper ${isSearchOpen ? 'active' : ''}`}>
                <div className="xb-search-close xb-close" onClick={() => setIsSearchOpen(false)}>
                    <IoClose />
                </div>
                <div className="header-search-container">
                    <form role="search" className="search-form" action="#">
                        <input type="search" className="search-field" placeholder="Search …" defaultValue="" name="s" />
                        <button type="submit" className="search-submit"><FiSearch /></button>
                    </form>
                </div>
            </div>
            <div className={`body-overlay ${isSearchOpen || isMenuOpen ? 'active' : ''}`} onClick={() => {
                setIsSearchOpen(false);
                setIsMenuOpen(false);
            }}></div>

            {/* Main Content */}
            <main>
                {/* Breadcrumb Section */}
                <section className="breadcrumb bg_img ul_li" style={{ backgroundImage: `url(${breadcrumbBg})` }}>
                    <div className="container">
                        <div className="breadcrumb__content text-center">
                            <h2 className="breadcrumb__title">contact us</h2>
                            <p className="breadcrumb__desc">Get in Touch with Our edubost</p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="contact_section section_space" style={{ backgroundColor: '#F1F1E9' }}>
                    <div className="container">
                        <div className="row justify-content-lg-between mt-none-30">
                            <div className="col-lg-7 mt-30">
                                <div className="contact_form mb-0">
                                    <h3 className="title">send us a message 👍🏻</h3>
                                    <p className="content">
                                        Give us chance to serve and bring magic to your brand.
                                    </p>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="input_title" htmlFor="input_name">Full Name</label>
                                                    <input id="input_name" className="form-control" type="text" name="name" placeholder="Goladra Gomaz" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="input_title" htmlFor="input_email">Your Email</label>
                                                    <input id="input_email" className="form-control" type="email" name="email" placeholder="edubost@example.com" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="input_title" htmlFor="input_phone">Your Phone</label>
                                                    <input id="input_phone" className="form-control" type="tel" name="phone" placeholder="+8250-3560 6565" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="input_title" htmlFor="input_textarea">Message</label>
                                                    <textarea id="input_textarea" className="form-control" name="message" placeholder="How can we help you?"></textarea>
                                                </div>
                                                <button type="submit" className="thm-btn">
                                                    Send Message
                                                    <span>
                                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.0364 2.63798C11.6702 1.79536 10.0512 1.33203 8.37891 1.33203C3.82654 1.33203 0 4.72368 0 9.06641C0 10.589 0.473 12.0486 1.37148 13.3092L0.116359 17.2497C-0.0162422 17.6659 0.295539 18.0898 0.730598 18.0898C0.83007 18.0898 0.930188 18.0669 1.02257 18.0198L4.83957 16.0791C4.99413 16.1456 5.15062 16.2076 5.3087 16.265C4.42496 14.8857 3.95312 13.3023 3.95312 11.6445C3.95312 6.70755 8.10726 2.91208 13.0364 2.63798Z" fill="#170006"></path>
                                                            <path d="M20.6285 15.8873C21.527 14.6267 22 13.1671 22 11.6445C22 7.30022 18.1718 3.91016 13.6211 3.91016C9.06873 3.91016 5.24219 7.30181 5.24219 11.6445C5.24219 15.9888 9.07036 19.3789 13.6211 19.3789C14.8421 19.3789 16.0588 19.1301 17.1602 18.6571L20.9774 20.598C21.2091 20.7157 21.4889 20.6829 21.6869 20.5146C21.885 20.3463 21.9626 20.0755 21.8837 19.8278L20.6285 15.8873ZM11 12.2891C10.644 12.2891 10.3555 12.0005 10.3555 11.6445C10.3555 11.2886 10.644 11 11 11C11.356 11 11.6445 11.2886 11.6445 11.6445C11.6445 12.0005 11.356 12.2891 11 12.2891ZM13.5781 12.2891C13.2222 12.2891 12.9336 12.0005 12.9336 11.6445C12.9336 11.2886 13.2222 11 13.5781 11C13.9341 11 14.2227 11.2886 14.2227 11.6445C14.2227 12.0005 13.9341 12.2891 13.5781 12.2891ZM16.1562 12.2891C15.8003 12.2891 15.5117 12.0005 15.5117 11.6445C15.5117 11.2886 15.8003 11 16.1562 11C16.5122 11 16.8008 11.2886 16.8008 11.6445C16.8008 12.0005 16.5122 12.2891 16.1562 12.2891Z" fill="#170006"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-5 mt-30">
                                <div className="gmap_canvas ps-lg-5">
                                    <iframe
                                        title="Google Maps Location"
                                        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="contact_info_box_inner pt-110">
                            <h2 className="text-center">Let us know how we can help</h2>
                        </div>

                        <div className="contact_info_box row mt-none-30">
                            <div className="col-lg-3 col-md-6 col-sm-6 mt-30">
                                <div className="contact_iconbox">
                                    <div className="iconbox_icon">
                                        <img src={callIcon} alt="Calling SVG Icon" />
                                    </div>
                                    <div className="iconbox_content">
                                        <h2 className="iconbox_title">Call Us On</h2>
                                        <p>Mon-Fri from 8am to 5pm</p>
                                        <h3>+1 (415) 555‑0132</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 mt-30">
                                <div className="contact_iconbox">
                                    <div className="iconbox_icon">
                                        <img src={callIcon} alt="Calling SVG Icon" />
                                    </div>
                                    <div className="iconbox_content">
                                        <h2 className="iconbox_title">Call Us On</h2>
                                        <p>Mon-Fri from 8am to 5pm</p>
                                        <h3>+1 (415) 654‑325</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 mt-30">
                                <div className="contact_iconbox">
                                    <div className="iconbox_icon">
                                        <img src={smsIcon} alt="SMS SVG Icon" />
                                    </div>
                                    <div className="iconbox_content">
                                        <h2 className="iconbox_title">Email Us</h2>
                                        <p>Speak to our Friendly team.</p>
                                        <h3>edubost@example.com</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 mt-30">
                                <div className="contact_iconbox">
                                    <div className="iconbox_icon">
                                        <img src={locationIcon} alt="Location SVG Icon" />
                                    </div>
                                    <div className="iconbox_content">
                                        <h2 className="iconbox_title">Our Location</h2>
                                        <p>Visit our edubost university.</p>
                                        <h3>#33-01, 77 USA Road</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default Contact;