import React, { useEffect, useState, useRef } from 'react';
import style from './lastpublicationsslider.module.css';
import lastpublicationsLeist from './../../helpers/lastpublicationsLeist.js';
import './../../../assets/styles/publicationsslider.css';

import arrowPassive from '/src/assets/img/arrows/publications-passive.svg';
import arrowActive from '/src/assets/img/arrows/publications-active.svg';

const LastPublicationsSlider = () => {
    const swiperRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const scrollbarDrag = swiperRef.current?.shadowRoot?.querySelector('.swiper-scrollbar-drag');
        if (scrollbarDrag) {
            scrollbarDrag.style.backgroundColor = '#FF5733';
        }
    }, [swiperRef]);

    useEffect(() => {
        const handleResize = () => {
            setWindowInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function windowSize() {
        if (windowInnerWidth > 901) return 4;
        if (windowInnerWidth > 701) return 3;
        if (windowInnerWidth > 501) return 2;
        return 1;
    }

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.init();

            swiperRef.current.swiper.on('slideChange', () => {
                setCurrentIndex(swiperRef.current.swiper.activeIndex);
            });
        }
    }, [swiperRef]);

    return (
        <div className={windowSize() === 1 ? style.body : `${style.body} minContentPadding`}>
            {windowSize() === 1 ? null : 
                <button className={`${style.button} ${style.buttonPrev}`} onClick={() => swiperRef.current.swiper.slidePrev()}>
                    <img src={currentIndex === 0 ? arrowPassive : arrowActive} alt="" />
                </button>
            }

            <swiper-container 
                ref={swiperRef} 
                scrollbar={windowInnerWidth < 501} 
                className={style.swiper} 
                slides-per-view={windowSize()} 
                space-between="7"
                navigation={false}
            >
                {lastpublicationsLeist.map((props) => (
                    <swiper-slide key={props.id}>
                        <div className={style.imgContainer}>
                            <img className={style.img} src={props.img} alt="" />
                        </div>
                        <h1 className={style.title}>{props.title}</h1>
                    </swiper-slide>
                ))}
            </swiper-container>

            {windowSize() === 1 ? null : 
                <button className={`${style.button} ${style.buttonNext}`} onClick={() => swiperRef.current.swiper.slideNext()}>
                    <img src={currentIndex === lastpublicationsLeist.length - windowSize() ? arrowPassive : arrowActive} alt="" />
                </button>
            }
        </div>
    );
};

export default LastPublicationsSlider;