import React from 'react';
import style from './showroomsmap.module.css';

const ShowroomsMap = () => {
    const linkToBlock = [
        'Киев',
        'Киев',
        'Черновцы',
        'Полтава',
        'Харьков',
        'Днепр',
    ];

    const scrollToElementById = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const buttons = () => {
        const buttonElements = []; 
        for (let i = 0; i < linkToBlock.length; i++) {
            buttonElements.push(
                <button key={i} className={style.button} onClick={() => scrollToElementById(linkToBlock[i])}>
                    <img src="./src/assets/img/map-point.svg" alt="" />
                </button>
            );
        }
        return buttonElements;
    };

    return (
        <div className={style.body}>
            {buttons()}
        </div>
    );
};

export default ShowroomsMap;