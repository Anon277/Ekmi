import React from 'react';
import style from './brandblock.module.css';

const BrandBlock = () => {
    return (
        <div className='pageBlockIndent'>
            <div className={style.body}>
                <div className={style.imgBlock}>
                    <img className={style.mainImg} src= './src/assets/img/backgrounds/mario-front.png' alt="" />
                </div>
                <div className={style.infoBlock}>
                        <h1 className={style.decorationTitle}>brand</h1>
                        <div className={style.mainBlock}>
                            <div className={style.mainBlocBody}>
                                <h1 className={style.title}>Наработки длинной в 25 лет</h1>
                                <p className={style.text}>
                                    Очень важным фактором является системность, упорядоченность 
                                    и четкое регламентирование сроков при производстве.
                                </p>
                                <p className={style.text}>
                                    В компании «Экми-Мебель» это достигается за счет применения 
                                    современных компьютерных программных систем автоматизации 
                                    производственной деятельности, разработанных специально под технологическую цепочку,
                                </p>
                                <p className={style.text}>
                                    От приема каждого, по своему индивидуального, заказа до отгрузки готовой продукции потребителю. 
                                </p>
                            </div>
                        </div>
                </div>
                <div className={style.strokeBlock}></div>
            </div>
        </div>
    );
};

export default BrandBlock;