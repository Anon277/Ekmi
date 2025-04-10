import React from 'react';
import ButtonTemplate from '../buttontemplate/ButtonTemplate';

const RequestTel = () => {
    return (
        <ButtonTemplate
            with='210px'
            height='43px'
            changeWith='180px'
            changeHeight='37px'

            change= {525}

            text='запросить звонок'
            size='16px'
            changeSize='14px'
            weight='700'
            changeWeight='700'
        />
    );
};

export default RequestTel;