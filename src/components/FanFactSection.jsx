import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import featureImg01 from '../assets/img/feature/feature-img01.png';
import featureImg03 from '../assets/img/feature/feature-img03.png';


const FanFactSection = () => {
    const fanFacts = [
        {
            id: 1,
            image: featureImg01,
            title: "our teaching quality is best from other university",
            number: "15+",
            subtitle: "Institutes in University",
            content: "Edubost University hosts a variety of specialized institutes focused on advancing knowledge."
        },
        {
            id: 2,
            image: featureImg03,
            title: "our teaching quality is best from other university",
            number: "10+",
            subtitle: "library in University",
            content: "Edubost University hosts a variety of specialized institutes focused on advancing knowledge."
        },
        {
            id: 3,
            image: "assets/img/feature/feature-img01.png",
            title: "our teaching quality is best from other university",
            number: "15+",
            subtitle: "Institutes in University",
            content: "Edubost University hosts a variety of specialized institutes focused on advancing knowledge."
        }
    ];

    return (
        <section className="fanfact pos-rel">
            <div className="container">
                <div className="fanfact-wrapper">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true, el: '.swiper-pagination', type: 'bullets' }}
                        className="fanfact-slider swiper-container"
                    >
                        {fanFacts.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="xb-fanfact__wrapper pos-rel">
                                    <div className="xb-item--img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <h2 className="xb-item--title">{item.title}</h2>
                                    <div className="xb-item--holder">
                                        <h3 className="xb-item--number">{item.number}</h3>
                                        <h2 className="xb-item--text">{item.subtitle}</h2>
                                        <p className="xb-item--content">{item.content}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-pagination ul_li_center"></div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default FanFactSection;