import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import style from './menuburger.module.css' ;

const MenuBurger = () => {

    const[menuState, setMenuStae]=useState(0);

    return (
        <div className={style.body}>
            <button onClick={() => setMenuStae(1)} className={style.button}>
                <img className={style.icon} src="./src\assets\img\icons\menu-burger.svg" alt="" />
            </button>
            {menuState ? 
                <div className={style.menu}>
                <div className={style.top}>
                    <Link className={style.block} href="/catalog">
                        <p className={style.text}>Каталог</p>
                    </Link>
                    <button onClick={() => setMenuStae(0)} className={style.cross}>
                        <img className={style.crossimg} src="./src\assets\img\icons\cross.svg" alt="" />
                    </button>
                </div>
                <Link className={style.block} href="/catalog"><p className={style.text}>Диваны</p></Link>
                <Link className={style.block} href="/catalog"><p className={style.text}>Кресла</p></Link>
                <Link className={style.block} href="/catalog"><p className={style.text}>Стулья</p></Link>
                <Link className={style.block} href="/catalog"><p className={style.text}>Кровати</p></Link>
                <Link className={style.block} href="/catalog"><p className={style.text}>Матрацы</p></Link>
                <Link className={style.block} href="/catalog"><p className={style.text}>Пуфы</p></Link>
                <Link className={style.block} href="/catalog"><p className={style.text}>Эксклюзивная мебель</p></Link>
                <Link className={style.block} href="/catalog"><p className={style.text}>2D-3D модели</p></Link>
                <Link className={style.block} href="/catalog"><p className={style.text}>Шоу-рум</p></Link>
                <Link className={style.block} href="/catalog"><p className={style.text}>Страница партнеров дизайнеров</p></Link>
                <Link className={style.block} href="/catalog"><p className={style.text}>Дилерам</p></Link>
                <Link className={style.block} href="/catalog"><p className={style.text}>Контакты</p></Link>
            </div> : ''}
        </div>
    );
};

export default MenuBurger;