import React from 'react';
import footerBackgroundImg from '../assets/img/bg/footer-bg.jpg';
import callingIcon from '../assets/img/icon/calling-icon01.png';
import footerAvatar from '../assets/img/footer/footer-avatar.png';
import logoWhite from '../assets/img/logo/logo_white.svg';

const Footer = () => {

    return (
        <footer className="footer bg_img pos-rel pt-20" style={{ backgroundImage: `url(${footerBackgroundImg})` }}>
            <div className="xb-footer-wrap">
                <div className="container">
                    <div className="footer-cta ul_li_between mb-35">
                        <div className="xb-item--holder ul_li mt-30">
                            <div className="xb-item--icon-avatar ul_li">
                                <span><img src={callingIcon} alt="" /></span>
                                <div className="xb-item--avatar">
                                    <img src={footerAvatar} alt="" />
                                </div>
                            </div>
                            <div className="xb-item--content">
                                If you have questions, order a free conversation <br /> with our consultant.
                            </div>
                        </div>
                        <div className="xb-item--contact mt-30">
                            <span>or use our hotline 24h</span>
                            <h3>+1 (415) 555‑0132</h3>
                        </div>
                    </div>
                </div>
                <div className="xb-footer-main pt-70 pb-60">
                    <div className="container">
                        <div className="row mt-none-30">
                            <div className="col-xl-3 col-lg-4 col-md-6 mt-30">
                                <div className="footer-widget mt-10">
                                    <div className="xb-item--logo mb-30"><a href="#!"><img src={logoWhite} alt="" /></a></div>
                                    <span className="xb-item--details">25/1, N.I.A. Post Office, Balewadi, <br /> Bristol – BS1 5TA, England, <br /> United Kingdom</span>
                                        <div className="xb-item--meta mt-20">
                                            <span>Social media</span>
                                            <ul className="xb-item--social_link ul_li">
                                                <li><a href="#!"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#!"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.52217 6.77491L15.4785 0H14.0671L8.89516 5.88256L4.76437 0H0L6.24656 8.89547L0 16H1.41155L6.87321 9.78782L11.2356 16H16L9.52183 6.77491H9.52217ZM7.58887 8.97384L6.95596 8.08805L1.92015 1.03974H4.0882L8.15216 6.72795L8.78507 7.61374L14.0677 15.0075H11.8997L7.58887 8.97418V8.97384Z" fill="white" />
                                                </svg></a></li>
                                                <li><a href="#!"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#!"><i className="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6 mt-30">
                                    <div className="footer-widget">
                                        <h3 className="xb-item--title">Admissions</h3>
                                        <ul className="xb-item--links list-unstyled">
                                            <li><a href="#!">How to apply</a></li>
                                            <li><a href="#!">Schedule</a></li>
                                            <li><a href="#!">Procedure</a></li>
                                            <li><a href="#!">Eligibility</a></li>
                                            <li><a href="#!">Fee structure</a></li>
                                            <li><a href="#!">Scholarships</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6 mt-30">
                                    <div className="footer-widget chng-mr">
                                        <h3 className="xb-item--title">Quick Links</h3>
                                        <ul className="xb-item--links list-unstyled">
                                            <li><a href="#!">Press & Media</a></li>
                                            <li><a href="#!">Alumni Portal</a></li>
                                            <li><a href="#!">Newsletters</a></li>
                                            <li><a href="#!">Departments</a></li>
                                            <li><a href="#!">People Directory</a></li>
                                            <li><a href="#!">Careers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 mt-30">
                                    <div className="footer-widget change-mr">
                                        <h3 className="xb-item--title">Additional Links</h3>
                                        <ul className="xb-item--links list-unstyled">
                                            <li><a href="#!">Open House</a></li>
                                            <li><a href="#!">Summer School</a></li>
                                            <li><a href="#!">ICCRIP 2024</a></li>
                                            <li><a href="#!">WIC Forum</a></li>
                                            <li><a href="#!">Placements</a></li>
                                            <li><a href="#!">Terms & Condition</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-6 mt-30">
                                    <div className="footer-widget">
                                        <ul className="xb-item--links-btn list-unstyled">
                                            <li><a className="thm-btn" href="#!">applying</a></li>
                                            <li><a className="thm-btn" href="#!">visiting</a></li>
                                            <li><a className="thm-btn" href="#!">careers</a></li>
                                            <li><a className="thm-btn" href="#!">contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom pb-25 pt-25">
                        <div className="copyright text-center">
                            <p>Copyright © 2024 <a href="index.html">Edubost</a>. All rights reserved.</p>
                        </div>
                    </div>
                </div>
        </footer>
    );
};
export default Footer;