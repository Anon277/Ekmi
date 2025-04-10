import {React, useContext} from 'react';
import ButtonTemplate from '../buttontemplate/ButtonTemplate';
import { OverlayContext } from './../../../../../src/App.jsx';

const CostCalculationButton = () => {
    
    const {overlayVisible, setOverlayVisible } = useContext(OverlayContext);

    return (
        <div onClick={() => setOverlayVisible(true)}>
            <ButtonTemplate 
    
                with='288px'
                height='50px'
                changeWith='276px'
                changeHeight='43px'
    
                change='0'
    
                text='просчет стоимости'
                size='18px'
                changeSize='16px'
                weight='800'
                changeWeight='700'
            />
        </div>
    );
};

export default CostCalculationButton;
