import React from 'react';
import style from './sliderblock.module.css';

const SliderBlock = (props) => {
    return (
        <div className={style.body}>
            <div className={style.imgContainer}>
                <img className={style.img} src={props.img} alt="" />
            </div>
            <h1 className={style.title}>{props.title}</h1>
            <p className={style.price}>{props.price}</p>
        </div>
    );
};

export default SliderBlock;