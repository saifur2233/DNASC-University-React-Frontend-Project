import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import tesImg from '../assets/img/testimonial/tes-img.png';
import tesImg02 from '../assets/img/testimonial/tes-img02.png';
import tesImg03 from '../assets/img/testimonial/tes-img03.png';
import tesImg04 from '../assets/img/testimonial/tes-img04.png';
import quoteIcon from '../assets/img/icon/qua.png';
import tesShape from '../assets/img/shape/tes-shape.png';
import tesShape02 from '../assets/img/shape/tes-shape02.png';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

const TestimonialSection = () => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

    const testimonials = [
        {
            id: 1,
            mainImage: tesImg,
            thumbImage: tesImg02,
            quote: "Edubost University has been a game-changer for me. The expert faculty, practical learning experiences, and supportive community have prepared me well for my career. The campus life and top-notch facilities.",
            name: "Dr. William Harris",
            position: "Dean of Humanities"
        },
        {
            id: 2,
            mainImage: tesImg04,
            thumbImage: tesImg03,
            quote: "Edubost University has been a game-changer for me. The expert faculty, practical learning experiences, and supportive community have prepared me well for my career. The campus life and top-notch facilities.",
            name: "Jessica Taylor",
            position: "Student Council President"
        },
        {
            id: 3,
            mainImage: tesImg,
            thumbImage: tesImg02,
            quote: "Edubost University has been a game-changer for me. The expert faculty, practical learning experiences, and supportive community have prepared me well for my career. The campus life and top-notch facilities.",
            name: "Ryan Stewart",
            position: "IT Services Manager"
        },
        {
            id: 4,
            mainImage: tesImg04,
            thumbImage: tesImg03,
            quote: "Edubost University has been a game-changer for me. The expert faculty, practical learning experiences, and supportive community have prepared me well for my career. The campus life and top-notch facilities.",
            name: "Sarah Parker",
            position: "Student Affairs Coordinator"
        }
    ];

    return (
        <section className="testimonial pt-120 pb-120 pos-rel">
            <div className="container">
                <div className="row align-items-center mt-none-30">
                    <div className="col-lg-6 mt-30">
                        <div className="xb-testimonial-left pos-rel wow fadeInLeft" data-wow-delay="0ms" data-wow-duration=".6s">
                            {/* Main Image Slider */}
                            <Swiper
                                modules={[Navigation, Thumbs]}
                                spaceBetween={10}
                                thumbs={{ swiper: thumbsSwiper }}
                                className="testimonial-slider"
                            >
                                {testimonials.map((testimonial) => (
                                    <SwiperSlide key={`main-${testimonial.id}`}>
                                        <div className="tes-img">
                                            <img src={testimonial.mainImage} alt={testimonial.name} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Thumbnail Slider */}
                            <Swiper
                                modules={[Navigation, Thumbs]}
                                spaceBetween={10}
                                slidesPerView={3}
                                watchSlidesProgress
                                onSwiper={setThumbsSwiper}
                                className="testimonial-slider-nav"
                            >
                                {testimonials.map((testimonial) => (
                                    <SwiperSlide key={`thumb-${testimonial.id}`}>
                                        <div className="testimonial-nav-item">
                                            <img src={testimonial.thumbImage} alt={testimonial.name} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Navigation Arrows */}
                            <div className="testimonial-carousel">
                                <div className="xb-swiper-arrow xb-swiper-arrow-next">
                                    <FaAngleDown />
                                </div>
                                <div className="xb-swiper-arrow xb-swiper-arrow-prev">
                                    <FaAngleUp />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-30">
                        <div className="xb-testimonial-right wow fadeInRight" data-wow-delay="100ms" data-wow-duration=".6s">
                            <div className="section-title mb-70">
                                <span className="sub-title">Our Student Stories</span>
                                <h1 className="title">Happy Student Feedback</h1>
                            </div>

                            {/* Testimonial Content Slider */}
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={30}
                                navigation={{
                                    nextEl: '.xb-swiper-arrow-next',
                                    prevEl: '.xb-swiper-arrow-prev'
                                }}
                                className="testimonial-slider"
                            >
                                {testimonials.map((testimonial) => (
                                    <SwiperSlide key={`content-${testimonial.id}`}>
                                        <div className="xb-item--holder">
                                            <div className="xb-item--quote mb-35">
                                                <img src={quoteIcon} alt="quote" />
                                            </div>
                                            <p className="xb-item--content">"{testimonial.quote}"</p>
                                        </div>
                                        <div className="xb-item--author mt-60">
                                            <span className="xb-item--name">{testimonial.name}</span>
                                            <span className="xb-item--desig">{testimonial.position}</span>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shapes */}
            <div className="xb-tes-shape">
                <span className="shape shape--one">
                    <img src={tesShape} alt="decoration1" />
                </span>
                <span className="shape shape--two">
                    <img src={tesShape02} alt="decoration2" />
                </span>
            </div>
        </section>
    );
};

export default TestimonialSection;