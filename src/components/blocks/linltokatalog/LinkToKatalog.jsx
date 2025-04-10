import React from 'react';
import style from './linltokatalog.module.css'
import { Link } from 'react-router-dom';

const LinkToKatalog = () => {
    return (
        <div className={style.body} >
            <Link className={style.text} to="/catalog">
                Каталог
            </Link> 
            <div className={style.menu}>
                <Link className={style.block} to="/catalog"><p className={style.menutext}>Диваны</p></Link>
                <Link className={style.block} to="/catalog"><p className={style.menutext}>Кресла</p></Link>
                <Link className={style.block} to="/catalog"><p className={style.menutext}>Стулья</p></Link>
                <Link className={style.block} to="/catalog"><p className={style.menutext}>Кровати</p></Link>
                <Link className={style.block} to="/catalog"><p className={style.menutext}>Матрацы</p></Link>
                <Link className={style.block} to="/catalog"><p className={style.menutext}>Пуфы</p></Link>
                <Link className={style.block} to="/catalog"><p className={style.menutext}>Эксклюзивная мебель</p></Link>
                <Link className={style.block} to="/catalog"><p className={style.menutext}>2D-3D модели</p></Link>
            </div>
    </div>
    );
};

export default LinkToKatalog;