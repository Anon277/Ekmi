import React from 'react';
import style from './productioncycleblock.module.css';
import ContactTheManager from '../../ui/buttons/contactthemanager/ContactTheManager';

const ProductionCycleBlock = () => {
    return (
        <div className={style.body}>
            <div className={style.orangeBlock}>
                <p className={style.orangeBlockText}>furniture</p>
            </div>
            <div className={style.mainImgBlock}>
                <img className={style.mainImg} src="./src\assets\img\backgrounds\leon-front.png" alt="" />
            </div>
            <div className={style.infoBlock}>
                <div className={style.infoBlockBody}>
                    <div className={style.mainTitle}><span className='first-letter'>П</span>олный цикл производства</div>
                    <div className={style.mainText}>
                        Качество мягкой мебели начинается задолго до начала ее производства.
                    </div>
                    <div className={style.button}>
                        <ContactTheManager/>
                    </div> 
                </div>
            </div>
            <div className={style.backgroundBlock}></div>
            <div className={style.withBlockShit}></div>
        </div>
    );
};

export default ProductionCycleBlock;