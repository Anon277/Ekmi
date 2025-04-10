import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './modelinInterior.module.css';
import 'swiper/swiper-bundle.css';
import './paginationstyles.css'
const ModelInInterior = () => {

    function slidesRender(numSlides) {
        let slides = [];
        for (let i = 0; i < numSlides; i++) {
            slides.push(
                <SwiperSlide style={{maxWidth: 'none'}}>
                    <div className={style.slide}>
                        <div className={style.leftBlock}>
                            <img className={style.smallImg} src="./src\assets\img\some\10000_Post01.png" alt="" />
                            <img className={style.smallImg} src="./src\assets\img\some\10000_Post01.png" alt="" />
                        </div>
                        <div className={style.rightBlock}>
                            <img className={style.smallImg} src="./src\assets\img\some\Милан.png" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
            )
            
        }
        return slides;
    }

    return (
        <div className={style.body + ' ' + 'pageBlockIndent' + ' ' + 'ModelInInterior'}>
            <div className='content'><h1 className={ style.title + ' ' + "title"}>Диван Barcelona в интерьере</h1></div>
            <Swiper
                slidesPerView={2} 
                spaceBetween={12}
                style={{margin: '0', width: '100%', paddingBottom: '43px'}}
                pagination={{
                    renderBullet: function (index, className) {
                        return `<span class="${className}"></span>`;
                    },
                }}
                >
                {slidesRender(6)}
            </Swiper>
        </div>
    );
};

export default ModelInInterior;