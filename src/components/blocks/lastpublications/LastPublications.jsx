import React from 'react';
import LastPublicationsSlider from '../../sliders/lastpublicationsslider/LastPublicationsSlider';
import style from './lastpublications.module.css'

const LastPublications = () => {
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className='content'>
                <h1 className={`${'title'} ${style.title}`}>
                    <span className='first-letter'>П</span>оследние публикации
                </h1>
                <LastPublicationsSlider/>
            </div>
        </div>
    );
};

export default LastPublications;