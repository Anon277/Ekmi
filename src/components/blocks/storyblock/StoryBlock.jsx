import React from 'react';
import style from './storublock.module.css'
import img from './../../../assets/img/backgrounds/bosfor3.png'

const StoryBlock = () => {
    return (
        <div className={style.body}>
            <div className={style.infoBlock}> 
                <div className={style.infoBody}>
                    <div className={style.infoContent}>
                        <h2 className={style.title}>Наработки длинной в 25 лет</h2>  
                        <p className={style.text}>Каждый производитель заявляет, что делает все для своих покупателей, но не каждый производитель способен подтвердить свои заявления многолетней историей </p>
                    </div>
                </div>
            </div>
            <div className={style.imgBlock}>
                <img className={style.img} src={img} alt="" />
            </div>
            <div className={style.orangeBlock}></div>
        </div>
    );
};

export default StoryBlock;