import {React, useState} from 'react';
import style from './header.module.css';
import { Link } from 'react-router-dom';
import Language from '../../blocks/language/Language';
import LinkToKatalog from '../../blocks/linltokatalog/LinkToKatalog';

import phoneActive from './../../../assets/img/icons/phone-active.svg' ;
import phonePassive from './../../../assets/img/icons/phone-passive.svg' ;
import MenuBurger from '../../blocks/menuburger/MenuBurger';

const Header = () => {

    const [tellState, setTellState] = useState(0);

    return (
        <div className={style.body}>
            <div className={style.catalog}>
                <LinkToKatalog/>
            </div>
            <div className={style.block}><Link className={style.text} to="/customfurniture">Индивидуальная мебель</Link></div>
            <div className={style.block}><Link className={style.text} to="/contacts">Контакты</Link></div>
            <div className={style.logo}>
                <Link to="/">
                    <img className={style.logoimg} src="./src/assets/img/logo.png" alt="" />
                </Link></div>
            <div className={style.block}><Link className={style.text} to="/fordealers">О компании</Link></div>
            <div className={style.phone} onMouseLeave={() => setTellState(0)} onMouseEnter={() => setTellState(1)}>
                <a className={style.tel} href="tel:+380996384537">
                    <p className={style.teltext}>+380 99 638  45 37</p>
                    <img className={style.telicon} src={tellState ? phoneActive : phonePassive } alt="" />
                </a>
            </div>
            <div className={style.language}>
                <Language />   
            </div>
            <div className={style.menuburger}>
                <MenuBurger/>
            </div>
        </div>
    );
}; 

export default Header;