import React from 'react';
import style from './ourstoru.module.css';
import StoryBlock from '../storyblock/StoryBlock';
import StoryYears from '../storyears/StoryYears';

const OurStory = () => {
    return (
        <div className={`${style.body} ${"pageBlockIndent"}`}>
            <div className="content">
                <div className={`${'title'} ${style.title}`}>
                    <span className='first-letter'>Н</span>аша история
                </div>
                <div className={style.mainBlock}>
                    <StoryBlock/>    
                </div>
                <div className={style.years}>
                    <StoryYears/>
                </div>  
            </div>
            
        </div>
    );
};

export default OurStory;