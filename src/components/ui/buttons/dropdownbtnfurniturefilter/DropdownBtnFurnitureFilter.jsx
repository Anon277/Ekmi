import React, { useState, useEffect, useRef } from 'react';
import style from './dropdownbtnfurniturefilter.module.css';

const DropdownBtnFurnitureFilter = ({blockType, setBlockType}) => {

    const [dropDawnState, setDropDawnState] = useState(0);
    const [textState, setTextState] = useState('товары');
    const dropdownRef = useRef(null); // Создаем реф для ссылки на dropdown

    const toggleMenu = () => {
        setDropDawnState(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropDawnState(0);
        }
    };

    useEffect(() => {
        // Добавляем обработчик события для кликов вне компонента
        document.addEventListener('mousedown', handleClickOutside);
        
        // Убираем обработчик события при размонтировании компонента
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    function menuStatus() {
        return dropDawnState ? {} : { display: 'none' };
    }

    const onClickFunc = (text, type) =>{
        setTextState(text);
        setBlockType(type);
    }

    return (
        <div className={style.body} ref={dropdownRef}>
            <button className={style.mainButton} onClick={toggleMenu}>
                <p className={style.mainButtonText}> Все {textState} </p>
                <img className={style.arrow} src="/src/assets/img/arrows/language-arrow-passive.svg" alt="" />
            </button>

            <div className={style.dropDawnMenu} style={menuStatus()} onClick={toggleMenu}>
                <button onClick={() => onClickFunc('Товары', 'All')} className={style.menuButton}>
                    Все товары
                    <img className={style.menuButtonArrow} src="/src/assets/img/arrows/language-arrow-passive.svg" alt="" />
                </button>
                <button onClick={() => onClickFunc('Диваны', 'Sofa')} className={style.menuButton}>Диваны</button>
                <button onClick={() => onClickFunc('Кресла', 'Armchair')} className={style.menuButton}>Кресла</button>
                <button onClick={() => onClickFunc('Стулья', 'Chair')} className={style.menuButton}>Стулья</button>
                <button onClick={() => onClickFunc('Кровати', 'Bed')} className={style.menuButton}>Кровати</button>
                <button onClick={() => onClickFunc('Матрацы', 'Mattress')} className={style.menuButton}>Матрацы</button>
                <button onClick={() => onClickFunc('Пуфы', 'Poof')} className={style.menuButton}>Пуфы</button>
                <button onClick={() => onClickFunc('Эксклюзивная мебель', 'Exclusive')} className={style.menuButton}>Эксклюзивная мебель</button>
                <button onClick={() => onClickFunc('2D-3D модели', 'All')} className={style.menuButton}>2D-3D модели</button>
            </div>
        </div>
    );
};

export default DropdownBtnFurnitureFilter;