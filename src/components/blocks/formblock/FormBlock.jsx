import {React, useState, useContext, useEffect} from 'react';
import {NameInput, EmailInput, TelInput, TownInput, CompanyInput, MessageInput, CountryInput, CommentInput, CheckboxBlock} from '../../ui/inputs/FormsInputs/FormsInputs.jsx';

import style from './formblock.module.css'

import {OverlayContext} from '../../../App.jsx';

const FormBlock = (props) => {

    const {ButtonClick, overlayVisible, overlayCard } = useContext(OverlayContext);

    function inputsRender(propsInputs) {
        const allInputs = 
        [<NameInput />, <EmailInput/>, <TelInput />, <TownInput/>, <CompanyInput/>, <MessageInput/>, 
        <CountryInput />, <CommentInput />, <CheckboxBlock/>];
    
        return (
            allInputs.map((input, i) => (
                propsInputs[i] ? 
                    <div className={style.input} key={i}>
                        {input}
                    </div> 
                : null
            ))
        );
    }

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div style={windowWidth > 525 ? {height: `${props.height}px`} : {height: `${props.narrowWinHeight}px`}} className={style.body}>
            <div className={style.content}>
                <div className={style.titlesBlock}>
                    <h1 style={{
                            order: props.titlesSwipe ? 2 : 1,
                            paddingBottom: windowWidth > 525 && props.titlePadding ? `${props.titlePadding}px` : `${props.titlePaddingNarrowWin}px`
                        }} className={style.title}>
                        {props.title}
                    </h1>
                    <h2 style={{
                            order: props.titlesSwipe ? 1 : 2,
                            paddingBottom: windowWidth > 525 && props.postTitlePadding ? `${props.postTitlePadding}px` : `${props.postTitlePaddingNarrowWin}px`
                        }} className={style.postTitle}>
                        {props.postTitle}
                    </h2>
                </div>
                <div className={style.inputsBlock}>
                    {inputsRender(props.inputs)}
                </div>

                {props.inputs[-1] ?
                    <CheckboxBlock/> : null
                }

                <div className={style.button}>
                    {props.button}
                </div>
            </div>
            { props.letter ? <div className={style.decorationLetter} style={props.letterCord}> {props.letter} </div> : null}
            <div className={style.cross}>
                {overlayVisible ? 
                    <button onClick={() => ButtonClick( null,!overlayVisible)}><img className={style.crossImg} src="./src/assets/img/icons/form-cross.svg" alt="" /></button> 
                : null}
            </div>
        </div>
    );
};

export default FormBlock;