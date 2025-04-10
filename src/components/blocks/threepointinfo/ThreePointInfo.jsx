import React from 'react';
import RowPointInfoBlock from '../rowpointinfoblock/RowPointInfoBlock';
import style from './threepointinfo.module.css';

const ThreePointInfo = () => {
    return (
        <div className={style.body + ' ' + 'pageBlockIndent'}>
            <div className={style.block}>
                <RowPointInfoBlock 
                    title='Качество'
                    text='Изучая качество мебели производства компании «Экми-Мебель» важно понимать, 
                        что за этим словом стоят не только лучшие материалы и комплектующие, многолетний опыт, 
                        отработанные технологические процессы, все необходимые сертификаты соответствия и 
                        высокопрофессиональный персонал, но, прежде всего, философия компании, которой «Экми-Мебель» 
                        следует с самого своего создания.'
                    titlePadding={42}
                    img='.\src\assets\img\backgrounds\regina.png'
                    swap={false}
                />
            </div>
            <div className={style.block}>
                <RowPointInfoBlock 
                    title='Почему нам можно доверять'
                    text='Вся продукция компании «Экми-Мебель» прошла государственную сертификацию системы УкрСЕПРО,
                        осуществляемую органом по сертификации продукции ЗАО «Украинский Институт Мебели». Мягкая мебель 
                        производства компании «Экми-Мебель» соответствует санитарно-гигиеническим требованиям действующего 
                        законодательства Украины — что подтверждено заключениями санитарно-гигиенической экспертизы Министерства 
                        здравоохранения Украины, и требованиям ГОСТ 19917-93 -«Мебель для сидения и лежания. Общие технические условия», 
                        что подтверждено государственными сертификатами соответствия.'
                    titlePadding={58}
                    img='.\src\assets\img\backgrounds\arni2.png'
                    swap={true}
                />
            </div>
           <dic className={style.block}>
                <RowPointInfoBlock 
                    title='Гарантия'
                    text='Компания «Экми-Мебель» первой из украинских производителей мягкой мебели обеспечила свою мебель полноценной  
                        гарантией и первой обоснованно заявила о лучшем качестве производимой мебели.'
                    titlePadding={66}
                    img='.\src\assets\img\backgrounds\leon.png'
                    swap={false}
                />
           </dic>
        </div>
    );
};

export default ThreePointInfo;