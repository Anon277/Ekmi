import React from 'react';
import { Link } from 'react-router-dom';
import ButtonTemplate from '../buttontemplate/ButtonTemplate';

const GoToCatalog = () => {
    return (
            <Link to="/catalog" style={{width: 'fit-content', display: 'block'}}>
                <ButtonTemplate 
                    with='210px'
                    changeWith='267px'

                    change='0'

                    text='перейти в каталог'
                    size='16px'
                    changeSize=''
                    weight='700'
                    changeWeight=''
                />
            </Link>
    );
};

export default GoToCatalog;