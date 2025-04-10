import React from 'react';
import style from './novelties.module.css';
import NoveltiesSlider from '../../sliders/noveltiesslider/NoveltiesSlider';

const Novelties = () => {
    const title = "title" + ' ' + style.title ;
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className="content">
                <h1 className={title}>
                    <span className='first-letter'>Н</span>овинки
                </h1>
                <div className={style.slyderbody}>
                   <NoveltiesSlider/> 
                </div>
            </div>
        </div> 
    );
};

export default Novelties;