import {React, useState} from 'react';
import style from './language.module.css' ;
import ArrowActive from './../../../assets/img/arrows/language-arrow-active.svg' ;
import ArrowPassive from './../../../assets/img/arrows/language-arrow-passive.svg' ;

const Language = () => {

    const [arrowState, setArrowState] = useState(0);
    const [title, setTitle] = useState('RU');

    return (
        <div className={style.body} onMouseLeave={() => setArrowState(0)} onMouseEnter={() => setArrowState(1)}>
                <button className={style.title}>{title}</button>
                <img src={arrowState ? ArrowActive : ArrowPassive} className={style.arrow}></img>
                {arrowState ? 
                    <div className={style.menu}>
                        <button onClick={() => setTitle('RU')} className={style.menublock}>RU</button>
                        <button onClick={() => setTitle('UA')} className={style.menublock}>UA</button>
                        <button onClick={() => setTitle('EN')} className={style.menublock}>EN</button>
                    </div> : ''
                }
        </div>
    );
};

export default Language;