import React from 'react';
import style from './facts.module.css';
import ThreeFacts from  '../threefacts/ThreeFacts.jsx';

const Facts = () => {
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className="content">
                <h1 className='title'>
                    <span className='first-letter'>Ф</span>акты
                </h1>
                <ThreeFacts/>
            </div>
        </div>
    );
};

export default Facts;