import React from 'react';
import style from './sliderarrow.module.css';

const SliderArrow = ({ onClick }) => {
    return (
            <button onClick={onClick}> 
                <img src='src\assets\img\arrows\novelties-arrow.svg'  alt="" />
            </button>
    );
};

export default SliderArrow;