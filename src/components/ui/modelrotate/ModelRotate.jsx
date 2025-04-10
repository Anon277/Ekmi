import React from 'react';
import style from './modelrotate.module.css';

const ModelRotate = ({ imgState, setImgState }) => {
    return (
        <div className={style.body}>
            <div className={style.circle}>
                <div className={style.arowsBlock}>
                    <div className={style.arrowLeft}>
                        <button onClick={() => setImgState(!imgState)} className={style.button}>
                            <img className={style.arrowImg} src="./src/assets/img/arrows/publications-active.svg" alt="" />
                        </button>
                    </div>
                    <div className={style.arrowRight}>
                        <button onClick={() => setImgState(!imgState)} className={style.button}>
                            <img className={style.arrowImg} src="./src/assets/img/arrows/publications-active.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div className={style.inscription}>360°</div>
            
            <img src="./src\assets\img\model\rotate.png" alt="" />
        </div>
    );
};

export default ModelRotate;