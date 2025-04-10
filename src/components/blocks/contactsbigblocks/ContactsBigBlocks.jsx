import React from 'react';
import styleBlocks from '../contactsblocks/contactsblocks.module.css';
import style from './contactsbigblocks.module.css'

const ContactsBigBlocks = () => {
    return (
        <div className={style.body}>
            <div className={`${styleBlocks.block} ${style.firstBlock} ${style.block}`}>
                <div className={style.blockContent} id='Киев'>
                    <h1 className={styleBlocks.title}>
                        C. Петропавловская Борщаговка
                    </h1>
                    <h2 className={`${styleBlocks.subTitle} ${style.subTitle}`}>Киевская обл.</h2>
                    <div className={style.subBlocks}>
                        <div className={style.subBlock}>
                            <h2 className={`${styleBlocks.subTitle} ${style.subTitle}`}>
                                Адрес: Ул. Большая Окружная 4-В
                            </h2>
                            <li className={`${styleBlocks.text} ${style.text}`}>тел.: +38 (044) 502-99-70</li>
                            <li className={`${styleBlocks.text} ${style.text}`}>info@ekmi-mebli.com</li>
                        </div>

                        <div className={style.subBlock}>
                            <h2 className={`${styleBlocks.subTitle} ${style.subTitle}`}>
                                Отдел по работе с корпаративными клиентами, дилерами и экспортом 
                            </h2>
                            <li className={`${styleBlocks.text} ${style.text}`}>+3 (050) 353-36-68</li>
                            <li className={`${styleBlocks.text} ${style.text}`}>sergey_p@ekmi-mebli.com</li>
                        </div>
                    </div>

                    <div className={style.subBlock}>
                        <h2 className={`${styleBlocks.subTitle} ${style.subTitle}`}>
                            Отдел по работе с дизайнерами и архитекторами
                        </h2>
                        <li className={`${styleBlocks.text} ${style.text}`}>тел.: +38 (067) 956-58-07</li>
                    </div>
                </div>
            </div>
            <div className={`${styleBlocks.block} ${style.secondBlock} ${style.block}`}>
                <div className={style.blockContent}>
                    <h1 className={styleBlocks.title}>
                        C. Петропавловская Борщаговка
                    </h1>
                    <h2 className={`${styleBlocks.subTitle} ${style.subTitle}`}>Киевская обл.</h2>
                    <h2 className={`${styleBlocks.subTitle} ${style.subTitle}`}>
                        Адрес: Ул. Большая Окружная 4-В
                    </h2>
                    <div className={style.subBlocks}>
                        <div className={style.subBlock}>
                            <h2 className={`${styleBlocks.subTitle} ${style.subTitle}`}>
                                Фирменный салон ``Экми-мебель``
                                ТЦ «4ROOM» 2 этаж, секция №338
                            </h2>
                            <li className={`${styleBlocks.text} ${style.text}`}>Email: ekmi.araks@gmail.com</li>
                            <li className={`${styleBlocks.text} ${style.text}`}>Тел: 067-548-32-70</li>
                            <li className={`${styleBlocks.text} ${style.text}`}>Тел: 067-956-58-07 (viber)</li>
                        </div>
                        <div className={style.subBlock}>
                            <h2 className={`${styleBlocks.subTitle} ${style.subTitle}`}>Режим работы:</h2>
                            <p className={`${styleBlocks.text} ${style.text}`}>Понедельник-Воскресенье: <span>10:00-20:00</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsBigBlocks;