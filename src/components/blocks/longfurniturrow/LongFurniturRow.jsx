import React from 'react';
import style from './longfurniturrow.module.css';
import FurniturRowBlock from '../furniturrowblock/FurniturRowBlock';

const LongFurniturRow = () => {
    return (
        <div className={style.body}>
            <div className={style.imgBlock}>
                <FurniturRowBlock slideNum={0} imgSrc="./src\assets\img\decorate\bosfor1.png"/>
            </div>
            <div className={style.imgBlock}>
                <FurniturRowBlock slideNum={1} imgSrc="./src\assets\img\decorate\ampir.png"/>
            </div>
            <div className={style.imgBlock}>
                <FurniturRowBlock slideNum={2} imgSrc="./src\assets\img\decorate\mario.png"/>
            </div>
            <div className={style.imgBlock}>
                <FurniturRowBlock slideNum={3}  imgSrc="./src\assets\img\decorate\bosfor2.png"/>
            </div>
        </div>
    );
};

export default LongFurniturRow;