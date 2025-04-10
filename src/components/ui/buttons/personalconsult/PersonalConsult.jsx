import React, { useState, useContext } from 'react';
import style from './personalconsult.module.css';
import arrowActive from '../../../../assets/img/arrows/personal-arrow-white.svg';
import arrowPassive from '../../../../assets/img/arrows/personal-arrow-orange.svg';
import { OverlayContext } from './../../../../../src/App.jsx';
import FormQuestion from '../../../blocks/formaqestion/FormQuestion.jsx';

const PersonalConsult = () => {
    const [state, setState] = useState(0);
    const { ButtonClick } = useContext(OverlayContext);

    return (
        <div onClick={() => ButtonClick(<FormQuestion crossVisible = {true}/>, true)} 
            onMouseLeave={() => setState(0)} 
            onMouseEnter={() => setState(1)} 
            className={style.body}>

            <button className={style.button}>
                <p className={style.buttontext}>Персональная консультация</p>
                <img className={style.buttonarrow} src={state ? arrowPassive : arrowActive} alt="" />
            </button>
        </div>
    );
};

export default PersonalConsult;

