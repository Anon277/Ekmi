import React from 'react';
import style from './keybenefitsblock.module.css'

const KeyBenefitsBlock = () => {

    const bodyStyle = "pageBlockIndent" + ' ' + "" + ' ' + style.body ;

    return (
        <div className={bodyStyle}>
            <div className={style.bodyContent}>
                <div className={style.infoBlock}>
                    <h1 className={style.title}>Почему индивидуальная мебель, является ключевым преимуществом компании?</h1>
                    <p className={style.text}>Многолетний опыт специалистов цеха разработки позволяет компании «Экми-Мебель» 
                                            воплотить любую фантазию заказчика, касающуюся мягкой мебели — естественно,
                                             по индивидуальному заказу.</p>
                </div>
                <div className={style.imgBlock}>
                    <img className={style.img} src=".\src\assets\img\backgrounds\ampir-front.png" alt="" />
                    <div className={style.backgroundColorBlock}></div>
                </div>
            </div>
        </div>
    );
};

export default KeyBenefitsBlock;