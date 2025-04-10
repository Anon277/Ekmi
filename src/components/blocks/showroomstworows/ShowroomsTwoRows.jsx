import React from 'react';
import style from './showroomstworows.module.css';
import LongFurniturRow from '../longfurniturrow/LongFurniturRow.jsx';

const ShowroomsTwoRows = () => {
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className={style.row}>
                <LongFurniturRow/>
            </div>
            <div className={style.row}>
                <LongFurniturRow/>
            </div>
        </div>
    );
};

export default ShowroomsTwoRows;