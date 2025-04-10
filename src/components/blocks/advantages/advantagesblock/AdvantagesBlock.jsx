import React from 'react';
import style from './advantagesblock.module.css'

const AdvantagesBlock = ({title, postTitle, text, img, reverse}) => {
    return (
        <div className={style.body} style={reverse ? {flexDirection: 'row-reverse'} : null}>
            <div className={style.infoBlock}>
                <h1 className={style.title}> {title} </h1>
                <h2 className={style.postTitle}> {postTitle} </h2>
                <p className={style.text}> {text} </p>
            </div>

            <div className={style.imgBlock} style={reverse ? {justifyContent: 'flex-start'} : null}>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default AdvantagesBlock;