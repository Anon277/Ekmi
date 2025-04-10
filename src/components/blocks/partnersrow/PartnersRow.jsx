import React from 'react';
import style from './partnersrow.module.css'

const PartnersRow = () => {
    return (
        <div className={style.body}>
            <div className={`${style.content} ${"content"}`}>
                <div className={style.imgBlock}><img className={style.img} src="./src\assets\img\partners\vogue-logo.png" alt="" /></div>
                <div className={style.imgBlock}><img className={style.img} src="./src\assets\img\partners\apple-logo.png" alt="" /></div>
                <div className={style.imgBlock}><img className={style.img} src="./src\assets\img\partners\zara-logo.png" alt="" /></div>
                <div className={style.imgBlock}><img className={style.img} src="./src\assets\img\partners\samsung-logo.png" alt="" /></div>
            </div>
        </div>
    );
};

export default PartnersRow;