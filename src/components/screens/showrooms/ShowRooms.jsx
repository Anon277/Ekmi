import React from 'react';
import FormQuestion from '../../blocks/formquestionblock/FormQuestionBlock.jsx';
import style from './showrooms.module.css'
import ContactsMap from '../../blocks/contactsmap/ContactsMap';
import Facts from '../../blocks/facts/Facts';
import ShowroomsTwoRows from '../../blocks/showroomstworows/ShowroomsTwoRows.jsx';
import ContactsBlocks from '../../blocks/contactsblocks/ContactsBlocks.jsx';

const ShowRooms = () => {
    return (
        <div className={style.body}>
            <div className={style.contactsMap}>
                <ContactsMap/>
            </div>
            <div className={style.facts}>
                <Facts/>
            </div>
            <div className={style.rows}>
                <ShowroomsTwoRows/>
            </div>
            <div className={style.contactsBlocks}>
                <ContactsBlocks/>
            </div>
            <div className={style.form}>
                <FormQuestion/>
            </div>
        </div>
    );
};

export default ShowRooms;