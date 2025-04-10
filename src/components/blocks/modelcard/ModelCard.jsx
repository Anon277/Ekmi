import React from 'react';
import style from './modelcard.module.css';
import ModelInfo from '../modelinfo/ModelInfo';
import ModelRotates from '../modelrotates/ModelRotates';

const ModelCard = () => {
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className={style.content}>
                <div className={style.LeftBlock}>
                    <ModelRotates/>
                </div>

                <div className={style.RightBlock}>
                    <ModelInfo/>
                </div>
            </div>
        </div>
    );
};

export default ModelCard;