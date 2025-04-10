import {React, useEffect} from 'react';
import style from './footer.module.css'
import { Link } from 'react-router-dom';
import PersonalConsult from '../../ui/buttons/personalconsult/PersonalConsult';

const Footer = () => {
    const ScrollToTop = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    
        return null;
    };

    return (
        <div className={style.body}>
            <div className={style.title}>
                <p className={style.titletext}>
                    ekmi
                </p>
            </div>
            <div className={style.basicblock}>
                <div className={style.upperblock}>
                    <Link to="/" className={style.logoblock}>
                        <img className={style.logo} src="./src/assets/img/white-logo.png" alt="" />
                    </Link>
                    <div className={style.linksblock}>
                        <div className={style.linksblockleft}>
                            <div className={style.menublock}>
                                <Link className={style.link} to="/catalog">
                                    <p className={style.menutext}>Каталог</p>
                                </Link>
                            </div>
                            <div className={style.menublock}>
                                <Link className={style.link} to="/catalog"><p className={style.menutext}>О компании</p></Link>
                            </div>
                            <div className={style.menublock}>
                                <Link className={style.link} to="/catalog"><p className={style.menutext}>Индивидуальная мебель</p></Link>
                            </div>
                            <div className={style.menublock}>
                                <Link className={style.link} to="/forpartners"><p className={style.menutext}>Партнерам дизайнерам</p></Link>
                            </div>
                        </div>
                        <div className={style.linksblockright}>
                            <div className={style.menublock}>
                                <Link className={style.link} to="/catalog"><p className={style.menutext}>2D, 3D модели</p></Link>
                            </div>
                            <div className={style.menublock}>
                                <Link className={style.link} to="/showrooms"><p className={style.menutext}>Шоу-румы</p></Link>
                            </div>
                            <div className={style.menublock}>
                                <Link className={style.link} to="/catalog"><p className={style.menutext}>Дилерам</p></Link>
                            </div>
                            <div className={style.menublock}>
                                <Link className={style.link} to="/catalog"><p className={style.menutext}>Контакты</p></Link>
                            </div>
                            <div className={style.menublock}>
                                 <Link className={style.link} to="/catalog"><p className={style.menutext}>Конфигуратор</p></Link>
                            </div>

                        </div>
                    </div>
                    <div className={style.extrablock}>
                        <div className={style.contacts}>
                            <div className={style.massangers}>
                                <a href="https://vk.com">
                                    <img src="./src/assets/img/icons/instagram-icon.svg" alt="" />
                                </a>
                                <a href="https://vk.com">
                                    <img src="./src/assets/img/icons/facebook-icon.svg" alt="" />
                                </a>
                            </div>
                            <div className={style.tel}>
                                <a className={style.tel} href="tel:+380996384537">+38 (099)-638-45-37</a>
                            </div>
                        </div>
                        <div className={style.button}>
                            <PersonalConsult/> 
                        </div>
                    </div>
                </div>
                <div className={style.underblock}>
                    <h1 className={style.copyright}>
                        © 1993–2021 Интернет-магазин «EKMI™» — меблі
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;