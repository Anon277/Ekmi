import React from 'react';
import style from './contactsmap.module.css'
import ShowroomsMap from '../showroomsmap/ShowroomsMap';

const ContactsMap = () => {
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className="content">
                <div className={`${"title"} ${style.title}`}>
                    <span className='first-letter'>К</span>онтакты
                </div>
            </div>
            <ShowroomsMap/>
        </div>
    );
};

export default ContactsMap;