import {React, useState} from 'react';
import style from './modelrotates.module.css'
import ModelRotate from '../../ui/modelrotate/ModelRotate';

const ModelRotates = () => {

    const [imgState, setImgState] = useState(0);


    return (
        <div className={style.body}>
            <div className={style.imgBlock}>
                <img className={style.img} src="./src/assets/img/model/model.png" alt="" 
                    style={imgState ? {transform: 'scaleX(-1)'}  : {}}/>
            </div>

            <div className={style.rotateBlock}><ModelRotate imgState={imgState} setImgState={setImgState}/></div>
        </div>
    );
};

export default ModelRotates;