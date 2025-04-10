import React from 'react';
import style from './ourpartners.module.css';
import PartnersRow from '../partnersrow/PartnersRow';
import PartnersBlock from '../partnersblock/PartnersBlock';

const OurPartners = () => {
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className="content">
                <h1 className={`${style.title} + ${"title"}`}>
                    <span className='first-letter'>
                        Н
                    </span>
                    аши партнеры
                </h1>
            </div>
            <div className={style.mainBlock}>
                <PartnersBlock/>
            </div>
            <div className={style.row}>
                <PartnersRow/>
            </div>
        </div>
    );
};

export default OurPartners;