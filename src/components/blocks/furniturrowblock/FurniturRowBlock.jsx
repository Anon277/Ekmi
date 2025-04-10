import {React, useState, useContext} from 'react';
import style from './furniturrowblock.module.css';
import { OverlayContext } from './../../../../src/App.jsx';
import FormQuestion from '../formaqestion/FormQuestion.jsx';
import ModelsRowSlider from '../../sliders/modelsrowslider/ModelsRowSlider.jsx';

const FurniturRowBlock = (props) => {

    const { ButtonClick, overlayVisible, overlayCard } = useContext(OverlayContext);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button onClick={() => ButtonClick(<ModelsRowSlider slideNum={props.slideNum}/>, true)} className={style.body}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className={style.img} src={props.imgSrc} alt="" />

            {isHovered ? 
                <div className={style.imgLiner}>
                    <img src='./src/assets/img/magnifier.svg' alt="" />
                </div> : undefined
            }
        </button>
    );
};

export default FurniturRowBlock;