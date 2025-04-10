import React from 'react';
import style from './homeslider.module.css'

const HomeSlider = () => {
    return (
        <div className={style.homeslider}>
            <div className={style.body}>
                <swiper-container 
                delay={3000} 
                autoplay-disable-on-interaction="false" 
                speed={2500} 
                slidesPerView={1}
                loop="true" 
                pagination="true" 
                effect="fade" 
                autoplay="true" >
                    <swiper-slide>
                        <img className={style.img} src="./src/assets/img/backgrounds/bosfor.png" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className={style.img} src="./src/assets/img/backgrounds/leon2.png" alt="" />
                    </swiper-slide>
                    <swiper-slide>
                        <img className={style.img} src="./src/assets/img/backgrounds/ampir.png" alt="" />
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    );
};

export default HomeSlider;