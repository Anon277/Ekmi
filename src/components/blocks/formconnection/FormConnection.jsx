import React from 'react';
import style from './formconnection.module.css'
import FormBlock from '../formblock/FormBlock';
import SendButton from '../../ui/buttons/sendbutton/SendButton';

const FormConnection = () => {
    return (
        <div className={style.body}>
            <div className={style.form}>
                <FormBlock 
                    inputs={[1, 1, 1, 1, 1, 1, 0, 0, 1]}
                    height={516}
                    narrowWinHeight={0}
                    postTitle='Заполните форму'
                    postTitlePadding={7}
                    postTitlePaddingNarrowWin={0}
                    title='Свяжитесь с нами'
                    titlePadding={20}
                    titlePaddingNarrowWin={0}
                    titlesSwipe={false}
                    button={<SendButton/>}
                    letter= 'С'
                    letterCord={
                        {
                         top: '-40px',
                         left: '-63px',
                        }
                    }/>
            </div>
        </div>
    );
};

export default FormConnection;