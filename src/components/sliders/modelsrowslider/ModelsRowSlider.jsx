import {React,  useRef, useEffect } from 'react';
import style from './modelsrowslider.module.css';
import arrowActive from './../../../assets/img/arrows/personal-arrow-white.svg';

const ModelsRowSlider = ({slideNum}) => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(slideNum);
        }
    }, []);

    return (
        <div className={style.body}>
            <div className={style.content}>
                <button className={`${style.button} ${style.buttonPrev}`} onClick={() => swiperRef.current.swiper.slidePrev()}>
                    <img src={arrowActive} alt="" />
                </button>
                <swiper-container 
                    ref={swiperRef}
                    slidesPerView={1}
                    initialSlide={3}
                >
                    <swiper-slide>
                        <img className={style.img} src="./src/assets/img/decorate/bosfor1.png" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className={style.img} src="./src/assets/img/decorate/ampir.png" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className={style.img} src="./src/assets/img/backgrounds/mario.png" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className={style.img} src="./src/assets/img/decorate/bosfor2.png" alt="" />
                    </swiper-slide>
                </swiper-container>
                <button className={`${style.button} ${style.buttonNext}`} onClick={() => swiperRef.current.swiper.slideNext()}>
                    <img src={arrowActive} alt="" />
                </button>
            </div>
        </div>
    );
};

export default ModelsRowSlider;