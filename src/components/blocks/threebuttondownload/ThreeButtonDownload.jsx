import React from 'react';
import style from './threebuttondownload.module.css'
import ButtonDownload from '../../ui/buttons/buttondownload/ButtonDownload';

const ThreeButtonDownload = () => {
    return (
        <div className={`${style.body} ${'pageBlockIndent'}`}>
            <ButtonDownload title= 'Скачать PDF'/>
            <ButtonDownload title= 'Скачать каталог'/>
            <ButtonDownload title= '2D-3D модели'/>
        </div>
    );
};

export default ThreeButtonDownload;