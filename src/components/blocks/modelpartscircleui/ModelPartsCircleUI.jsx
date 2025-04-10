import {React, useState} from 'react';
import style from './modelpartscircleui.module.css';

const ModelPartsCircleUI = ({part, setPart}) => {
    
    const getPoints = (points) =>{
        const massPoints = [];
        for(let i = 0; i < points; i++){
            massPoints.push(
                <button onClick={() => setPart(i)} className={style.pointBlock} key={'pointCircleModel' + i}>
                    <img 
                    className={ part === i ? `${style.point} ${style.pointActive}` : style.point} 
                    src="./src/assets/img\icons\circlePoint.svg" alt="" />
                    { part === i ? 
                            <div className={style.pointCenter}></div> 
                        : null }
                </button>
            )
        }
        return massPoints;
    }

    return (
        <div className={style.body}>
            <div className={style.circle}>
                {getPoints(5)}
            </div>
        </div>
    );
};

export default ModelPartsCircleUI;
