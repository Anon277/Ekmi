import React from 'react';
import style from './partnersrowwork.module.css'
import PartnersRow from '../partnersrow/PartnersRow';

const PartnersRowWork = () => {
    return (
        <div className={style.body + ' ' + 'pageBlockIndent'}>
            <div className='content'><h1 className='title'>С нами работают</h1></div>

            <PartnersRow/>
        </div>
    );
};

export default PartnersRowWork;