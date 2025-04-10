import React from 'react';
import GoToCatalog from '../../ui/buttons/gotocatalog/GoToCatalog';
import style from './homebanner.module.css'
import HomeSlider from '../../sliders/homeslider/HomeSlider';
 
const HomeBanner = () => {

    const content = style.gridContent + ' ' + "content"

    return (
        <div className={style.homebanner}>
            <div className={style.body}>
                <div className={content}>

                    <div className={style.foundation}>
                        <h1 className={style.foundationTitle}>
                            Основано в 1993 году
                        </h1>
                    </div>

                     <h1 className={style.mainTitle}>
                        <span className='first-letter'>Л</span>УЧШАЯ ЖИЗНЬ, СОЗДАННАЯ ДЛЯ ВАС!
                    </h1>

                    <div className={style.button}>
                        <GoToCatalog/>
                    </div>
      
                    <div className={style.slider}>
                        <div className={style.sliderBody}>
                            <HomeSlider/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;