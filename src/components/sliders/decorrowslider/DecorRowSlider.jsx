import React from 'react';
import style from './decorrowslider.module.css';
import DecorRowList from './../../helpers/decorRowList.js';

const DecorRowSlider = () => {
    return (
        <div className={style.body}>
            <div className={style.slider}>
                <swiper-container 
                autoplay-disable-on-interaction="false" 
                speed={3000} 
                slidesPerView={1}
                loop="true" 
                pagination="true" 
                effect="fade" 
                autoplay="true" >
                    {DecorRowList.map((props) => {
                    return(
                        <swiper-slide key={props.id}>
                            <div className={style.imgContainer}>
                                <img className={style.img} src={props.img} alt="" />
                            </div>
                        </swiper-slide>
                        )
                    })}
                </swiper-container>
            </div>
        </div>
    );
};

export default DecorRowSlider;