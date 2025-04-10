import React from 'react';
import style from './arowbutton.module.css';

const ArrowButton = ({ direction, onClick, img }) => {
    return (
        <div className={style.sliderarrow}>
            <button className={direction === 'prev' ? style.buttonprev : style.buttonnext} onClick={onClick}>
                <img src={img} alt={direction === 'prev' ? 'Previous' : 'Next'} />
            </button>
        </div>
    );
};

export default ArrowButton;