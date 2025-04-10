import React from 'react';
import style from './catalogsearch.module.css';

const CatalogSearch = ({blockName, setBlockName}) => {

    const handleInputChange = (event) => {
        setBlockName(event.target.value);
    };

    return (
        <div className={style.body}>
            <input 
                className={style.input} 
                type="text" 
                placeholder='Поиск'
                onChange={handleInputChange}
                />
            <img className={style.icon} src="./src\assets\img\icons\magnifier.svg" alt="" />
        </div>
    );
};

export default CatalogSearch;