import React from 'react';
import style from './modelinfo.module.css'
import CostCalculationButton from '../../ui/buttons/сostсalculationbutton/CostCalculationButton';

const ModelInfo = () => {
    return (
        <div className={style.body}>
            <div className={style.content}>
                <h1 className={style.title}>Barcelona</h1>

                <h2 className={style.subTitle}>Коллекция: Modern</h2>

                <p className={style.text}>
                    Модель «Барселона»- главным преимуществом этого дивана является мобильность. 
                    Модель состоит из нескольких совершенно независимых друг от друга частей. 
                    Это своего рода конструктор, который каждый может сложить по-своему и создать 
                    уникальный предмет интерьера.
                </p>

                <p className={style.price}>от 65 000 uah</p>
                
                <CostCalculationButton/>
            </div>
        </div>
    );
};

export default ModelInfo;