import {React, useState, useEffect} from 'react';
import style from './buttontemplate.module.css'

const ButtonTemplate = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <button className={style.body} style={windowWidth >= props.change ? {width: props.with} : 
                                                                            {width: props.changeWith}}>
            <h1 className={style.text} 
                style={windowWidth >= props.change ? {fontSize: props.size, fontWeight: props.weight} : 
                                                     {fontSize: props.changeSize, fontWeight: props.changeWeight}}>
                {props.text}
            </h1>
        </button>
    );
};

export default ButtonTemplate;