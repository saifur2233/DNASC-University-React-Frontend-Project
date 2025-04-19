import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import campusImg01 from '../assets/img/campus/campus-img01.png';
import campusImg02 from '../assets/img/campus/campus-img02.png';
import campusImg03 from '../assets/img/campus/campus-img03.png';
import campusBg from '../assets/img/bg/campus-bg.jpg';

const CampusSection = () => {
    const campusItems = [
        {
            id: 1,
            image: campusImg01,
            title: "Cultural Experiences",
            link: "#!"
        },
        {
            id: 2,
            image: campusImg02,
            title: "Cultural Experiences",
            link: "#!"
        },
        {
            id: 3,
            image: campusImg03,
            title: "Cultural Experiences",
            link: "#!"
        }
    ];

    return (
        <section className="campus pos-rel bg_img z-1 pt-195 pb-200" style={{ backgroundImage: `url(${campusBg})` }}>
            <div className="section-title mb-60 mt-80 text-center">
                <span className="sub-title">Our Campus Life</span>
                <h1 className="title">Our Campus Life</h1>
            </div>
            <div className="campus-slider mr-set">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                        type: 'bullets'
                    }}
                    breakpoints={{
                        576: {
                            slidesPerView: 1
                        },
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {campusItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="xb-campus__wrapper pos-rel">
                                <div className="xb-item--img pos-rel">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title">{item.title}</h3>
                                    <div className="xb-btn_thm ul_li">
                                        <a className="thm-btn btn-yellow" href={item.link}>
                                            read more
                                            <span>
                                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13 0.999999C13 0.447714 12.5523 -1.14869e-06 12 -1.40157e-06L3 -6.00782e-07C2.44772 -9.37957e-07 2 0.447715 2 0.999999C2 1.55228 2.44772 2 3 2L11 2L11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10L13 0.999999ZM1.70711 12.7071L12.7071 1.70711L11.2929 0.292892L0.292893 11.2929L1.70711 12.7071Z" fill="black" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination ul_li_center"></div>
                </Swiper>
            </div>
        </section>
    );
};

export default CampusSection;