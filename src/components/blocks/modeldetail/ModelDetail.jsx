import {React, useState} from 'react';
import style from './modeldetail.module.css';
import ModelPartsCircleUI from '../modelpartscircleui/ModelPartsCircleUI';
import ModelDetailInfo from '../modeldetailinfo/ModelDetailInfo';

const ModelDetail = () => {

    const [part, setPart] = useState(3);
    
    return (
        <div className={`${style.body} ${"pageBlockIndent"} ${"content-two"}`}>
            <h1 className={style.title + ' ' + 'title'}>
                <span className='first-letter'>Д</span>етали Barcelona
            </h1>
            <div className={style.info}><ModelDetailInfo part={part} setPart={setPart}/></div>
                
            <div className={style.circle}><ModelPartsCircleUI  part={part} setPart={setPart}/></div>
        </div>
    );
};

export default ModelDetail;