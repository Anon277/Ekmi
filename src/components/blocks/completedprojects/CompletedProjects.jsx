import React from 'react';
import style from './completedprojects.module.css'
import ShowroomsTwoRows from '../showroomstworows/ShowroomsTwoRows';
import LongFurniturRow from '../longfurniturrow/LongFurniturRow';

const CompletedProjects = () => {
    return (
        <div className={style.body + ' ' + 'pageBlockIndent'}>
            <div className='content'><h1 className={'title' + ' ' + style.title}>Реализованные проекты</h1></div>
            
            <div className={style.rowFirst}>
                <LongFurniturRow/>
            </div>
            <div className={style.row}>
                <LongFurniturRow/>
            </div>
        </div>
    );
};

export default CompletedProjects;