import {React, useState} from 'react';
import style from './buttondownload.module.css';

const ButtonDownload = (props) => {

    const [bodyStyle, setBodyStyle] = useState(false);

    return (
        <button  onMouseEnter={() => setBodyStyle(true)} onMouseLeave={() => setBodyStyle(false)} 
                className={style.body} style={bodyStyle ? { backgroundColor: 'var(--first-letter-color)'} : null}
        >
            <h1 className={style.title} style={bodyStyle ? {color: 'white'} : null}>{props.title}</h1>

            <a href='./src\assets\img\logo.png' download></a>
            
            {props.img ? <img src={props.img}/> : null}
        </button>
    );
};

export default ButtonDownload;