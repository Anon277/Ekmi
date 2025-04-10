import React from 'react';
import style from './contactssmallblocks.module.css';
import styleBlocks from '../contactsblocks/contactsblocks.module.css';
import contactsBlocksList from './../../helpers/contactsBlocksList.js'


const ContactsSmallBlocks = () => {
    return (
        <div className={style.body}>
            <div className={`${"content"} ${style.content}`}>
                {contactsBlocksList.map((props) => {
                    return(
                        <div className={`${styleBlocks.block} ${style.block}`} key={props.id} id={props.title} >
                            <div className={style.blockContent} 
                            style={{
                                padding: props.padding,
                            }}>
                                <h1 className={styleBlocks.title}>{props.title}</h1>
                                <p className={`${styleBlocks.text} ${style.adress}`}>
                                    <span className={styleBlocks.subTitle}>Адресс: </span>{props.address}
                                </p>
                                <h2 className={styleBlocks.subTitle}>{props.subTitle}</h2>
                                {props.email && (
                                    <p className={styleBlocks.text}>
                                        <span className={styleBlocks.subTitle}>Почта: </span>{props.email}
                                    </p>
                                )}
                                {props.site && (
                                    <p className={styleBlocks.text}>
                                        <span className={styleBlocks.subTitle}>Сайт: </span>{props.site}
                                    </p>
                                )}
                                {props.tell && (
                                    <div className={`${styleBlocks.text} ${style.tellBlock}`}>
                                        <span className={`${styleBlocks.subTitle} ${style.tellTitle}`}>Телефон: </span>
                                        <div className={style.tells}>
                                            {props.tell.map((props, index) => {
                                                return(
                                                    <div className={style.tell} key={index + 'tell'}>{props}</div>
                                                )
                                            })}
                                        </div>  
                                    </div>
                                )}
                            </div>
                        </div>
                        )
                })}
            </div>
        </div>
    );
};

export default ContactsSmallBlocks;