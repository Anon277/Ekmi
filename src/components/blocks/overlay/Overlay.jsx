import {React, useContext, useState} from 'react';
import FormQuestion from '../formaqestion/FormQuestion';
import { OverlayContext } from '../../../../src/App.jsx';

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#181818B2', 
    backdropFilter: 'blur(3px)',
    zIndex: 9, 
};

const formStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
};

const Overlay = () => {

    const {ButtonClick, overlayVisible, overlayCard} = useContext(OverlayContext);

    return (
        <>
            <div onClick={() => ButtonClick(null, false)} style={overlayStyle}>
            </div>
            <div style={formStyle}>
                {overlayCard} 
            </div>
        </>
    );
};

export default Overlay;
