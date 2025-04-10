import React from 'react';
import style from './contactsblocks.module.css'
import ContactsBigBlocks from '../contactsbigblocks/ContactsBigBlocks';
import ContactsSmallBlocks from '../contactssmallblocks/ContactsSmallBlocks';

const ContactsBlocks = () => {
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className="content">
                <ContactsBigBlocks/>   
                <ContactsSmallBlocks/> 
            </div>
        </div>
    );
};

export default ContactsBlocks;