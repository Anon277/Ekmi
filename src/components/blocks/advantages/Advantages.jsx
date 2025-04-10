import React from 'react';
import style from './advantages.module.css'
import AdvantagesBlock from './advantagesblock/AdvantagesBlock';

import imgOne from './../../../assets/img/backgrounds/Alba.png'
import imgTwo from './../../../assets/img/backgrounds/image6.png'
import imgThree from './../../../assets/img/backgrounds/Toscana.png'

const Advantages = () => {
    return (
        <div className={'pageBlockIndent' + ' ' + style.body}>
            <div className={style.content}>
                <div className={style.block}>
                    <AdvantagesBlock 
                    title='Ведущий производитель' 
                    postTitle='Реализовываем ваш потенциал.' 
                    text='Мы успешно реализовали большое количество проектов по 
                        индивидуальным эскизам наших клиентов, так как это является нащим основным преимуществом на рынке.' 
                    img={imgOne} 
                    reverse={false} />
                </div>
                <div className={style.block}>
                    <AdvantagesBlock 
                    title='Выгодные условия' 
                    postTitle='Условия сотрудничества' 
                    text='Мы предлагаем простые и понятные условия сотрудничества. Процесс устроен так: связываемся с Вами, 
                    обсуждаем наши ближайшие задачи, смотрим ваши наработки и находим общее решение для перспективного сотрудничества.' 
                    img={imgTwo} 
                    reverse={true} />
                </div>
                <div className={style.block}>
                    <AdvantagesBlock 
                    title='Оперативность' 
                    postTitle='' 
                    text='У нас большая складская программа, большинство материалов и фурнитуры постоянно есть на складе. 
                    В таком случае, заказы изготавливаются за 13-15 дней.' 
                    img={imgThree} 
                    reverse={false} />
                </div>
            </div>
        </div>
    );
};

export default Advantages;