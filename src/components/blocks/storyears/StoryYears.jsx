import React from 'react';
import style from './storyears.module.css'

const StoryYears = () => {
    return (
        <div className={style.body}>
            <h2 className={style.year}>1993</h2>
            <h1 className={style.bigYear}>25 лет</h1>
            <h2 className={style.year}>2021</h2>
        </div>
    );
};

export default StoryYears;