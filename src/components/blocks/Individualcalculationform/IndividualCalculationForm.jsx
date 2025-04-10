import React from 'react';

import style from './Individualcalculationform.module.css'
import FormBlock from '../formblock/FormBlock';
import RequestTel from '../../ui/buttons/requesttel/RequestTel';

const IndividualCalculationForm = () => {
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className={style.content}>
                <div className={style.mainBlock}>
                <FormBlock
                    inputs={[1, 0, 1, 0, 0, 0, 1, 1, 1]} 
                    height={448}
                    narrowWinHeight={350}
                    postTitle='Заполните форму, и мы с вами свяжемся'
                    postTitlePadding={15}
                    postTitlePaddingNarrowWin={10}
                    title='Индивидуальный просчет'
                    titlePadding={0}
                    titlePaddingNarrowWin={0}
                    titlesSwipe={true}
                    button={<RequestTel/>}
                    letter= ''/>
                </div>
            </div>
        </div>
    );
};

export default IndividualCalculationForm;