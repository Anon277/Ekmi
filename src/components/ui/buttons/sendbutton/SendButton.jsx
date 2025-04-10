import React from 'react';
import ButtonTemplate from '../buttontemplate/ButtonTemplate';

const SendButton = () => {
    return (
        <div>
            <ButtonTemplate 
                    with='188px'
                    changeWith='0'

                    change='0'

                    text='отправить'
                    size='16px'
                    changeSize=''
                    weight='700'
                    changeWeight=''
                />
        </div>
    );
};

export default SendButton;