import React from 'react';
import eventImg01 from '../assets/img/event/event-img01.png';
import eventImg02 from '../assets/img/event/event-img02.png';
import eventImg03 from '../assets/img/event/event-img03.png';
import eventImg04 from '../assets/img/event/event-img04.png';
import eventImg05 from '../assets/img/event/event-img05.png';
import notebookIcon from '../assets/img/icon/note-book.svg';
import stampImg from '../assets/img/shape/stamp.png';
import unionImg from '../assets/img/shape/Union.png';

const EventSection = () => {
    const events = [
        {
            id: 1,
            image: eventImg01,
            date: "24, Nov 2024",
            location: "139 W, 46th Street, New York.",
            title: "Celebrating Diversity through Art and Performance..",
            link: "event-single.html"
        },
        {
            id: 2,
            image: eventImg02,
            date: "24, Nov 2024",
            location: "New York, NY 10036, USA.",
            title: "Global Perspectives Bridging Cultures, Shaping Futures..",
            link: "event-single.html"
        },
        {
            id: 3,
            image: eventImg03,
            date: "24, Nov 2024",
            location: "New York, NY 10036, USA.",
            title: "Throw an event to kick off a mentorship program..",
            link: "event-single.html"
        }
    ];

    const featuredEvent = {
        image: eventImg04,
        date: "24, Dec 2024",
        location: "46th Street, Financial District, New York",
        title: "Hongbo Chi, Ph.D., Integrating systems immunology with..",
        link: "event-single.html"
    };

    return (
        <section className="event event-bg-clr pos-rel pt-115">
            <div className="container">
                <div className="section-title text-center mb-40">
                    <span className="sub-title">Our Events</span>
                    <h1 className="title">Our upcoming events</h1>
                </div>

                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        {events.map(event => (
                            <div key={event.id} className="xb-event-wrapper mt-20">
                                <div className="xb-event-left ul_li align-items-center">
                                    <div className="xb-item--img pos-rel">
                                        <img src={event.image} alt={event.title} />
                                        <span className="xb-item--date">{event.date}</span>
                                    </div>
                                    <div className="xb-item--author">
                                        <span className="xb-item--location">
                                            <LocationIcon />
                                            {event.location}
                                        </span>
                                        <h2 className="xb-item--title border-effect">
                                            <a href={event.link}>{event.title}</a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-xl-6 col-lg-8">
                        <div className="xb-event-item mt-20">
                            <div className="xb-item--img">
                                <img src={featuredEvent.image} alt={featuredEvent.title} />
                            </div>
                            <div className="ul_li xb-item--wrap">
                                <div className="xb-item--content">
                                    <span className="xb-item--location">
                                        <LocationIcon />
                                        {featuredEvent.location}
                                    </span>
                                    <h2 className="xb-item--title border-effect">
                                        <a href={featuredEvent.link}>{featuredEvent.title}</a>
                                    </h2>
                                    <div className="xb-event-btn pt-15">
                                        <a className="thm-btn" href={featuredEvent.link}>
                                            get a tickets
                                            <span className="icon">
                                                <ArrowIcon />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="xb-item--date-inner text-center">
                                    <div className="xb-item--icon">
                                        <img src={notebookIcon} alt="Notebook" />
                                    </div>
                                    <span className="xb-item--date">{featuredEvent.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="event-btns pos-rel z-1 text-center mt-40">
                        <a className="more-btn" href="event.html">
                            view more events
                            <span>
                                <ArrowIcon />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="xb-event-bottom">
                <img src={eventImg05} alt="Event background" />
            </div>

            <div className="event-shape">
                <div className="shape shape--one">
                    <img data-parallax='{"x":-50,"y":-80}' src={stampImg} alt="Stamp" />
                </div>
                <div className="shape shape--two">
                    <img src={unionImg} alt="Union shape" />
                </div>
            </div>
        </section>
    );
};

// Reusable SVG components
const LocationIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 11.1917C11.436 11.1917 12.6 10.0276 12.6 8.5917C12.6 7.15576 11.436 5.9917 10 5.9917C8.56408 5.9917 7.40002 7.15576 7.40002 8.5917C7.40002 10.0276 8.56408 11.1917 10 11.1917Z" stroke="#292D32" strokeWidth="1.5" />
        <path d="M3.01663 7.07484C4.65829 -0.141827 15.35 -0.133494 16.9833 7.08317C17.9416 11.3165 15.3083 14.8998 13 17.1165C11.325 18.7332 8.67496 18.7332 6.99163 17.1165C4.69163 14.8998 2.05829 11.3082 3.01663 7.07484Z" stroke="#292D32" strokeWidth="1.5" />
    </svg>
);

const ArrowIcon = () => (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4795 21C9.10959 21 7.81507 20.7539 6.59589 20.2617C5.37671 19.7695 4.30137 19.0962 3.36986 18.2417C2.43836 17.3872 1.67808 16.3857 1.08904 15.2373C0.486301 14.0752 0.123288 12.8311 0 11.5049V11.4639H8.56849V14.3145C8.56849 14.5742 8.66096 14.7998 8.84589 14.9912C9.03082 15.1826 9.25342 15.2783 9.5137 15.2783C9.65068 15.2783 9.7774 15.251 9.89384 15.1963C10.0103 15.1416 10.1096 15.0732 10.1918 14.9912L14.0137 11.1768C14.0959 11.0947 14.1644 10.9956 14.2192 10.8794C14.274 10.7632 14.3014 10.6367 14.3014 10.5C14.3014 10.3633 14.274 10.2368 14.2192 10.1206C14.1644 10.0044 14.0959 9.90527 14.0137 9.82324L10.1918 6.00879C10.1096 5.92676 10.0103 5.8584 9.89384 5.80371C9.7774 5.74902 9.65068 5.72168 9.5137 5.72168C9.25342 5.72168 9.0274 5.81738 8.83562 6.00879C8.64384 6.2002 8.54794 6.42578 8.54794 6.68555V9.53613H0C0.123288 8.19629 0.486301 6.94531 1.08904 5.7832C1.67808 4.62109 2.44178 3.61279 3.38014 2.7583C4.31849 1.90381 5.39041 1.23047 6.59589 0.738281C7.81507 0.246094 9.10959 0 10.4795 0C11.9315 0 13.2945 0.273439 14.5685 0.820312C15.8425 1.38086 16.9555 2.13623 17.9075 3.08643C18.8596 4.03662 19.6096 5.14746 20.1575 6.41895C20.7192 7.69043 21 9.05078 21 10.5C21 11.9492 20.7192 13.3096 20.1575 14.5811C19.6096 15.8662 18.8596 16.9839 17.9075 17.9341C16.9555 18.8843 15.8425 19.6328 14.5685 20.1797C13.2945 20.7266 11.9315 21 10.4795 21Z" fill="#170006" />
    </svg>
);

export default EventSection;