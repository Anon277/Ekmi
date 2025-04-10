import React from 'react';
import style from './benefitsofwork.module.css'
import BenefitsOfWorkSlider from '../../sliders/benefitsofworkslider/BenefitsOfWorkSlider';

const BenefitsOfWork = () => {
    return (
        <div className={style.body + ' ' + 'pageBlockIndent'}>
            <div className={style.content + ' ' + 'content'}>
                <h1 className={style.title + ' ' + 'title'}>Почему с нами комфортно работать</h1>
                
                <BenefitsOfWorkSlider/>
            </div>
        </div>
    );
};

export default BenefitsOfWork;