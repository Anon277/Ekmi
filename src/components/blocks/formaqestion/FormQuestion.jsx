import {React} from 'react';

import style from './formaqestion.module.css'
import FormBlock from '../formblock/FormBlock';
import RequestTel from '../../ui/buttons/requesttel/RequestTel.jsx';

const FormQuestion = () => {

    return (
        <div className={style.body}>
            <FormBlock 
                inputs={[1, 0, 1, 0, 0, 0, 1, 1, 1]} 
                height={417}
                narrowWinHeight={320}
                postTitle='Заполните форму'
                postTitlePadding={15}
                postTitlePaddingNarrowWin={10}
                title='остались вопросы?'
                titlePadding={0}
                titlePaddingNarrowWin={0}
                titlesSwipe={true}
                button={<RequestTel/>}
                letter= 'O'
                letterCord={
                    {
                     top: '-34px',
                     left: '-78px',
                    }
                }/>
        </div>
    );
};

export default FormQuestion;