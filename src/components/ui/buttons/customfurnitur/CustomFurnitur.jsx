import React from 'react';
import { Link } from 'react-router-dom';
import ButtonTemplate from '../buttontemplate/ButtonTemplate';

const CustomFurnitur = () => {
    return (
        <Link to='/customfurniture'>
            <ButtonTemplate 
                with='267px'
                height='43px'
                changeWith='267px'
                changeHeight='43px'

                change='0'

                text='Индивидуальная мебель'
                size='16px'
                changeSize=''
                weight='700'
                changeWeight=''
            />
        </Link>
        
    );
};

export default CustomFurnitur;