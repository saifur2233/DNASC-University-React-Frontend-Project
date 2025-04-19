import React from 'react';
import programImg01 from '../assets/img/program/pro-img01.png';
import programImg02 from '../assets/img/program/pro-img02.png';
import programImg03 from '../assets/img/program/pro-img03.png';
import programImg04 from '../assets/img/program/pro-img04.png';
import programImg05 from '../assets/img/program/pro-img05.png';
import programImg06 from '../assets/img/program/pro-img06.png';
import programBg from '../assets/img/bg/pro-banner.png';
import programShape01 from '../assets/img/shape/book.png';
import programShape02 from '../assets/img/shape/camical.png';
import programShape03 from '../assets/img/shape/pen.png';
import programShape04 from '../assets/img/shape/stamp01.png';
import ratingIcon from '../assets/img/icon/rating.png';
import metaIcon01 from '../assets/img/icon/meta-icon01.png';
import clockIcon from '../assets/img/icon/clock.png';
import proBanner from '../assets/img/bg/pro-banner.png';
import learningIcon from '../assets/img/icon/learning.png';
import phoneIcon from '../assets/img/icon/calling-icon.png';

const ProgramSection = () => {
    const programs = [
        {
            id: 1,
            image: programImg01,
            category: "Medical",
            rating: "5.0",
            title: "MBA in Biomedical Engineering",
            seats: "200",
            duration: "14 Semester",
            link: "course-single.html"
        },
        {
            id: 2,
            image: programImg02,
            category: "Management",
            rating: "4.5",
            title: "MBA in Advanced Construction",
            seats: "250",
            duration: "14 Semester",
            link: "course-single.html"
        },
        {
            id: 3,
            image: programImg03,
            category: "Construction",
            rating: "5.0",
            title: "MBA in Management and Strategic",
            seats: "280",
            duration: "14 Semester",
            link: "course-single.html"
        },
        {
            id: 4,
            image: programImg04,
            category: "Engineering",
            rating: "5.0",
            title: "MBA in Mechanical Engineering",
            seats: "220",
            duration: "14 Semester",
            link: "course-single.html"
        },
        {
            id: 5,
            image: programImg05,
            category: "Energy",
            rating: "5.0",
            title: "MBA in Sustainable Energy",
            seats: "200",
            duration: "14 Semester",
            link: "course-single.html"
        },
        {
            id: 6,
            image: programImg06,
            category: "Real Estate",
            rating: "4.9",
            title: "MBA in Real Estate and Urban",
            seats: "230",
            duration: "14 Semester",
            link: "course-single.html"
        }
    ];

    return (
        <section className="program pos-rel pt-115">
            <div className="container">
                <div className="pro-top ul_li_between mb-40">
                    <div className="section-title mb-20">
                        <span className="sub-title">Our academics offerings</span>
                        <h1 className="title">Top Programs</h1>
                    </div>
                    <div className="pro-btn mb-20">
                        <a className="thm-btn thm-btn--stroke-black" href="courses.html">
                            view all programs
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 4.84993V16.7399C22 17.7099 21.21 18.5999 20.24 18.7199L19.93 18.7599C18.29 18.9799 15.98 19.6599 14.12 20.4399C13.47 20.7099 12.75 20.2199 12.75 19.5099V5.59993C12.75 5.22993 12.96 4.88993 13.29 4.70993C15.12 3.71993 17.89 2.83993 19.77 2.67993H19.83C21.03 2.67993 22 3.64993 22 4.84993Z" fill="#170006" />
                                    <path d="M10.71 4.70993C8.87999 3.71993 6.10999 2.83993 4.22999 2.67993H4.15999C2.95999 2.67993 1.98999 3.64993 1.98999 4.84993V16.7399C1.98999 17.7099 2.77999 18.5999 3.74999 18.7199L4.05999 18.7599C5.69999 18.9799 8.00999 19.6599 9.86999 20.4399C10.52 20.7099 11.24 20.2199 11.24 19.5099V5.59993C11.24 5.21993 11.04 4.88993 10.71 4.70993ZM4.99999 7.73993H7.24999C7.65999 7.73993 7.99999 8.07993 7.99999 8.48993C7.99999 8.90993 7.65999 9.23993 7.24999 9.23993H4.99999C4.58999 9.23993 4.24999 8.90993 4.24999 8.48993C4.24999 8.07993 4.58999 7.73993 4.99999 7.73993ZM7.99999 12.2399H4.99999C4.58999 12.2399 4.24999 11.9099 4.24999 11.4899C4.24999 11.0799 4.58999 10.7399 4.99999 10.7399H7.99999C8.40999 10.7399 8.74999 11.0799 8.74999 11.4899C8.74999 11.9099 8.40999 12.2399 7.99999 12.2399Z" fill="#170006" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>

                <div className="row mt-none-60">
                    {programs.map((program) => (
                        <div key={program.id} className="col-lg-4 col-md-6 mt-60">
                            <div className="xb-program__wrapper">
                                <div className="xb-item--img text-center">
                                    <a href={program.link}>
                                        <img src={program.image} alt={program.title} />
                                    </a>
                                </div>
                                <div className="xb-item--holder">
                                    <div className="xb-item--deprt ul_li_between">
                                        <span className="xb-item--group"># {program.category}</span>
                                        <div className="xb-item--rating">
                                            <span>{program.rating}</span>
                                            <img src={ratingIcon} alt="rating" />
                                        </div>
                                    </div>
                                    <h2 className="xb-item--title border-effect-2">
                                        <a href={program.link}>{program.title}..</a>
                                    </h2>
                                    <ul className="xb-item--meta ul_li">
                                        <li>
                                            <img src={metaIcon01} alt="seats" />
                                            {program.seats} Seat
                                        </li>
                                        <li>
                                            <img src={clockIcon} alt="duration" />
                                            {program.duration}
                                        </li>
                                    </ul>
                                    <div className="xb-item--dep-btn">
                                        <a href={program.link}>enroll now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="xb-cta bg_img mt-120 pos-rel" style={{ backgroundImage: `url(${proBanner})` }}>
                    <h2 className="mb-15">Get Your Quality Skills Certificate Through Edubost</h2>
                    <div className="xb-btn xb-cta-btn ul_li">
                        <a className="thm-btn btn-yellow mt-20" href="contact.html">
                            apply now
                            <span>
                                <img src={learningIcon} alt="learning" />
                            </span>
                        </a>
                        <span className="mt-20">
                            <img src={phoneIcon} alt="phone" />
                            +1 (415) 555‑0132
                        </span>
                    </div>
                </div>
            </div>

            <div className="program-shape">
                <div className="shape shape--one">
                    <img data-parallax='{"x":-50,"y":-80}' src={programShape01} alt="book" />
                </div>
                <div className="shape shape--two">
                    <img data-parallax='{"x":-50,"y":-80}' src={programShape02} alt="chemical" />
                </div>
                <div className="shape shape--three">
                    <img data-parallax='{"x":50,"y":80}' src={programShape03} alt="pen" />
                </div>
                <div className="shape shape--four">
                    <img data-parallax='{"x":50,"y":80}' src={programShape04} alt="stamp" />
                </div>
            </div>
        </section>
    );
};

export default ProgramSection;