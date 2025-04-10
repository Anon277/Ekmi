import React from 'react';
import style from './benefitsofworkslider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import benefits from '../../helpers/benefitsOfWorkList';
import './paginationstyles.css'

const BenefitsOfWorkSlider = () => {
    return (
        <div className={style.body + ' ' + 'BenefitsOfWorkSlider'}>
            <div className={style.content }>
                <Swiper
                    style={{width: '100%'}}
                    slidesPerView={1}
                    effect="fade" 
                    speed={500} 
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        renderBullet: function (index, className) {
                            return `<span class="${className}"></span>`;
                        },
                    }}
                >
                    {benefits.map((props) =>(
                        <SwiperSlide style={{maxWidth: 'none'}} key={props.id}>
                            <div className={style.slideBody}>
                                <img className={style.slideImg} src={props.img} alt="" />
    
                                <div className={style.slideInfoBlock}>
                                    <h2 className={style.slidePostTitle}>Факты:</h2>
                                    <h1 className={style.slideTitle}>{props.title}</h1>
                                    <p className={style.slideText}>{props.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BenefitsOfWorkSlider;