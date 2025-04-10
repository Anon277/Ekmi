import React from 'react';
import style from './formsinputs.module.css'

const NameInput = () => {
    return (
        <div className={style.inputBlock}><input type="input" className={style.input} placeholder='Ваше имя*'/></div>
    );
};

const EmailInput = () => {
    return (
        <div className={style.inputBlock}><input type="input" className={style.input} placeholder='Ваш e-mail*'/></div>
    );
};

const TelInput = () => {
    return (
        <div className={style.inputBlock}><input type="tel" className={style.input} placeholder='Ваш номер телефона*'/></div>
    );
};

const TownInput = () => {
    return (
        <div className={style.inputBlock}><input type="input" className={style.input} placeholder='Ваш город*'/></div>
    );
};

const CompanyInput = () => {
    return (
        <div className={style.inputBlock}><input type="input" className={style.input} placeholder='Компания'/></div>
    );
};

const MessageInput = () => {
    return (
        <div className={style.inputBlock}><input type="input" className={style.input} placeholder='Сообщение'/></div>
    );
};

const CountryInput = () => {
    return (
        <div className={style.inputBlock}><input type="input" className={style.input} placeholder='Страна'/></div>
    );
};

const CommentInput = () => {
    return (
        <div id="commentInputId" className={style.inputBlock}><input type="input" className={style.input} placeholder='Комментарий'/></div>
    );
};


const CheckboxBlock = () => {
    return (
        <div className={style.checkboxBlock}>
            <label className={style.checkboxLabel}>
                <input type="checkbox" className={style.checkbox} />
                <span className={style.customSheckbox}></span>
            </label>
                        
            <p className={style.checkboxText}>
                Подтверждая заказ, я принимаю условия пользовательского соглашения
            </p>
        </div>
    );
};

export {NameInput, EmailInput, TelInput, TownInput, CompanyInput, MessageInput, CountryInput, CommentInput, CheckboxBlock};