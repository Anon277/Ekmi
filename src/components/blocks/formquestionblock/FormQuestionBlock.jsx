import React from 'react';
import style from './formquestionblock.module.css'
import FormQuestion from '../formaqestion/FormQuestion';

const FormQuestionBlock = () => {
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className={style.content}>
                <div className={style.mainBlock}>
                    <FormQuestion/>
                </div>
            </div>
        </div>
    );
};

export default FormQuestionBlock;