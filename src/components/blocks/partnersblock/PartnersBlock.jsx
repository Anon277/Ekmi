import React from 'react';
import style from './partnersblock.module.css';

const PartnersBlock = () => {
    return (
        <div className={style.body}>
            <div className={style.infoBlock}>
                    <div className={style.infoBlockBody}>
                        <h2 className={style.infoTitle}>
                            Компании сотрудничают с нами по всему миру
                        </h2>
                        <div className={style.infoTextBlock}>
                            <p className={style.infoText}>
                                На данный момент дилерская сеть фабрики «Экми-Мебель» насчитывает более 30 салонов по всей Украине. Сейчас мы заинтересованы в расширении сети и предлагаем выгодные условия для сотрудничества. 
                            </p>
                            <p className={style.infoText}>
                                Основным преимуществом фабрики является изготовление любого индивидуального изделия, мягкой мебели и аксессуаров из наших основных коллекций. Также присутствует линейка оригинальных интерьерных корпусных изделий.
                            </p>
                        </div>
                    </div>
            </div>
            <div className={style.rightBlock}>
                <img className={style.img} src="./src\assets\img\backgrounds\arni.png" alt="" />
            </div>
            <div className={style.orangeBlockSmall}></div>
            <div className={style.orangeBlockBig}></div>
        </div>
    );
};

export default PartnersBlock;