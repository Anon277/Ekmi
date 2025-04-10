import React from 'react';
import style from './furnituredecorrow.module.css';
import DecorRowSlider from '../../sliders/decorrowslider/DecorRowSlider';
import DecorRowList from './../../helpers/decorRowList.js';

const FurnitureDecorRow = () => {
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className={`${style.content} ${"content"}`}>
                <div className={style.leftBlock}>
                    {DecorRowList.map((props) => {
                        if(props.id < 3){
                            return(
                            <div className={style.block} key={props.id}>
                                <div className={style.imgContainer}>
                                    <img className={style.img} src={props.img} alt="" />
                                </div>
                            </div>
                            )
                        }
                    })}
                </div>
                <div className={style.rightBlock}>
                    {DecorRowList.map((props) => {
                            if(props.id > 2){
                                return(
                                <div className={style.block} key={props.id}>
                                    <div className={style.imgContainer}>
                                        <img className={style.img} src={props.img} alt="" />
                                    </div>
                                </div>
                                )
                            }
                        })}
                </div>
                
            </div>
            <div className={style.slider}>
                <DecorRowSlider/>
            </div>
        </div>
    );
};

export default FurnitureDecorRow;