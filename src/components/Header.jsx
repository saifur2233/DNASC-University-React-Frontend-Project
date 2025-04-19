import React, { useState } from 'react';
import herotopIcon from '../assets/img/icon/hero_top-icon.png';
import logSvg from '../assets/img/logo/logo.svg';
import flag from '../assets/img/icon/flag.png'; 
import flagSaudiArabia from '../assets/img/icon/flag_saudi_arabia.webp';
import flagBangladesh from '../assets/img/icon/flag_bangladesh.webp';
import flagUSA from '../assets/img/icon/flag_usa.webp';
import flagPortugal from '../assets/img/icon/flag_portugal.webp';

import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header id="xb-header-area" className="header-area is-sticky">
            <div className="header-top_wrap">
                <div className="container">
                    <div className="header-top ul_li_between">
                        <div className="xb-help_desk">
                            <img src={herotopIcon} alt="" />
                                <p>Help Desk : <span>+1 (415) 555‑0132</span></p>
                        </div>
                        <div className="xb-info">
                            <ul className="ul_li align-items-end">
                                <li>Information For :</li>
                                <li><a href="#!">Students</a></li>
                                <li><a href="#!">Faculty</a></li>
                                <li><a href="#!">Alumni</a></li>
                                <li><a href="#!">Research</a></li>
                                <li><a href="#!">Community</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xb-header">
                <div className="container">
                    <div className="header__wrap ul_li_between">
                        <div className="header-logo">
                            <a href="/"><img src={logSvg} alt="" /></a>
                        </div>
                        <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
                            <nav className="main-menu collapse navbar-collapse">
                                <ul>
                                    <li className="menu-item-has-children active">
                                        <a href="/">Home</a>
                                        <ul className="submenu">
                                            <li className="active"><a href="/">University</a></li>
                                            <li><a href="home-2.html">College</a></li>
                                            <li><a href="home-3.html">High School</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/admission">Admission</a>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#!">Courses</a>
                                        <ul className="submenu">
                                            <li><a href="/courses">Courses</a></li>
                                            <li><a href="/course-single">Course Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#!">Pages</a>
                                        <ul className="submenu">
                                            <li><a href="/about">About Us</a></li>
                                            <li className="menu-item-has-children"><a href="/blog">Blog</a>
                                                <ul className="submenu">
                                                    <li><a href="/blog">Blog</a></li>
                                                    <li><a href="/blog-single">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="/event">Event</a>
                                                <ul className="submenu">
                                                    <li><a href="/event">Event</a></li>
                                                    <li><a href="/event-single">Event Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children"><a href="/team">Team</a>
                                                <ul className="submenu">
                                                    <li><a href="/team">Team</a></li>
                                                    <li><a href="/team-single">Team Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/tuition-fees">Tuition & Fees</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="xb-header-wrap">
                                <div className="xb-header-menu">
                                    <div className="xb-header-menu-scroll">
                                        <div className="xb-menu-close xb-hide-xl xb-close"></div>
                                        <div className="xb-logo-mobile xb-hide-xl">
                                            <a href="index.html" rel="home"><img src="assets/img/logo/logo.svg" alt="" /></a></div>
                                        <div className="xb-header-mobile-search xb-hide-xl">
                                            <form role="search" action="#">
                                                <input type="text" placeholder="Search..." name="s" className="search-field" />
                                                <button className="search-submit" type="submit"><i className="far fa-search"></i></button>
                                            </form>
                                        </div>
                                        <nav className="xb-header-nav">
                                            <ul className="xb-menu-primary clearfix">
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="index.html">Home</a>
                                                    <ul className="sub-menu">
                                                        <li className="active"><a href="index.html">University</a></li>
                                                        <li><a href="home-2.html">College</a></li>
                                                        <li><a href="home-3.html">High School</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="/admission">Admission</a>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="#!">Courses</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="/courses">Courses</a></li>
                                                        <li><a href="/course-single">Course Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="#!">Pages</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="/about">About Us</a></li>
                                                        <li className="menu-item menu-item-has-children"><a href="/blog">Blog</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item"><a href="/blog">Blog</a></li>
                                                                <li className="menu-item"><a href="/blog-single">Blog Details</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-has-children"><a href="/event">Event</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item"><a href="/event">Event</a></li>
                                                                <li className="menu-item"><a href="/event-single">Event Details</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item menu-item-has-children"><a href="/team">Team</a>
                                                            <ul className="sub-menu">
                                                                <li className="menu-item"><a href="/team">Team</a></li>
                                                                <li className="menu-item"><a href="/team-single">Team Details</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="menu-item"><a href="/tuition-fees">Tuition & Fees</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="/contact">Contact</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="xb-header-menu-backdrop"></div>
                            </div>
                        </div>
                        <div className="header-right ul_li">
                            <a className="header-search header-search-btn" href="javascript:void(0);">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 3.75H15" stroke="#170006" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5 6H12.75" stroke="#170006" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M15.75 8.625C15.75 12.5625 12.5625 15.75 8.625 15.75C4.6875 15.75 1.5 12.5625 1.5 8.625C1.5 4.6875 4.6875 1.5 8.625 1.5" stroke="#170006" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.5 16.5L15 15" stroke="#170006" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Search
                            </a>
                            <div className="language_dropdown dropdown">
                                <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="flag">
                                        <img src={flag} alt="USA" />
                                    </span>
                                    <span className="name">English</span>
                                </button>
                                <div className="dropdown-menu">
                                    <ul className="unordered_list_block">
                                        <li className="dropdown-item">
                                            <span className="flag">
                                                <img src={flagSaudiArabia} alt="Saudi Arabia" />
                                            </span>
                                            <span className="name">Arabic</span>
                                        </li>
                                        <li className="dropdown-item">
                                            <span className="flag">
                                                <img src={flagBangladesh} alt="Bangladesh" />
                                            </span>
                                            <span className="name">Bangali</span>
                                        </li>
                                        <li className="dropdown-item">
                                            <span className="flag">
                                                <img src={flagUSA} alt="USA" />
                                            </span>
                                            <span className="name">English</span>
                                        </li>
                                        <li className="dropdown-item">
                                            <span className="flag">
                                                <img src={flagPortugal} alt="Portugal" />
                                            </span>
                                            <span className="name">Portuguese</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header-bar-mobile side-menu d-lg-none">
                            <a className="xb-nav-mobile" href="javascript:void(0);"><i className="fal fa-bars"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;