import React from 'react';
import style from './home.module.css';
import HomeBanner from '../../blocks/homebanner/HomeBanner';
import Novelties from '../../blocks/novelties/Novelties';
import CustomFurnitureCard from '../../blocks/customfurniturecard/CustomFurnitureCard';
import OurStory from '../../blocks/ourstory/OurStory';
import LastPublications from '../../blocks/lastpublications/LastPublications';
import ThreeFacts from '../../blocks/threefacts/ThreeFacts';
import OurPartners from '../../blocks/ourpartners/OurPartners';
import FurnitureDecorRow from '../../blocks/furnituredecorrow/FurnitureDecorRow';
import FormQuestionBlock from '../../blocks/formquestionblock/FormQuestionBlock';

const Home = () => {
    return (
        <div className={style.body}>
            <div className={style.homebanner}>
               <HomeBanner/> 
            </div>
            <div className={style.novelties}>
                <Novelties/>
            </div>
            <div className={style.customfurniturecard}>
                <CustomFurnitureCard/>
            </div>
            <div className={style.ourstory}>
                <OurStory/>
            </div>
            <div className={style.lastpublications}>
               <LastPublications/>
            </div>
            <div className={style.formquestion}>
                <FormQuestionBlock/>
            </div>
            <div className={style.threefacts}>
                <ThreeFacts/>
            </div>
            <div className={style.ourpartners}>
                <OurPartners/>
            </div>
            <div className={style.furnituredecorrow}>
                <FurnitureDecorRow/>
            </div>
        </div>
    );
};

export default Home;