import React from 'react';
import style from './threefacts.module.css';

const ThreeFacts = () => {
    return (
        <div className={`${style.body} `}>
            <div className={`${"content"} ${style.content} ${"pageBlockIndent"}`}>
                <div className={style.block}>
                    <p className={style.text}>
                        Осуществляемые компанией «Экми-Мебель» постоянные инвестиции в сертификацию своей продукции, 
                        убедительно подтверждают лидерство компании на украинском рынке высококачественной мягкой мебели.
                    </p>
                    <div className={style.backgroundNumber}>1</div>
                </div>
                <div className={style.block}>
                    <p className={style.text}>
                        Фабрика «Экми-мебель» сертифицирована по системе менеджмента качества ISO 9001:2000 на соответствие 
                        международным стандартам, представительством «Бюро Веритас» в Украине.
                    </p>
                    <div className={style.backgroundNumber}>2</div>
                </div>
                <div className={style.block}>
                    <p className={style.text}>
                        Компания «Экми-Мебель» первой из украинских производителей мягкой мебели обеспечила свою мебель 
                        полноценной  гарантией и первой обоснованно заявила о лучшем качестве производимой мебели.
                    </p>
                    <div className={style.backgroundNumber}>3</div>
                </div>
            </div>
        </div>
    );
};

export default ThreeFacts;