import React from 'react';
import style from './customfurniturecard.module.css';
import mainImg from './../../../assets/img/backgrounds/leon2.png'
import CustomFurnitur from '../../ui/buttons/customfurnitur/CustomFurnitur';

const CustomFurnitureCard = () => {
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className={style.content}>
                <div className={style.blocknete}></div>
                <div className={style.mainblock}>
                    <div className={style.maincontent}>
                        <h1 className={`${'title'} ${style.title}`}><span className='first-letter'>И</span>ндивидуальная мебель</h1>
                        <h2 className={style.subtitle}>Полный цикл производства.</h2>
                        <div className={style.text}>Качество мягкой мебели начинается задолго до начала ее производства.</div>
                        <div className={style.button}><CustomFurnitur/></div>
                    </div>
                </div>
                <div className={style.blockimage}>
                    <img src={mainImg} alt="" />
                </div>
                <div className={style.orengeblocktop}><p>furniture</p></div>
                <div className={style.orengeblockbottom}></div>
            </div>
        </div>
    );
};

export default CustomFurnitureCard;