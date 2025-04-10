import React from 'react';
import style from './model.module.css'
import ModelCard from '../../blocks/modelcard/ModelCard';
import ShowroomsTwoRows from '../../blocks/showroomstworows/ShowroomsTwoRows';
import ModelDetail from '../../blocks/modeldetail/ModelDetail';
import ThreeButtonDownload from '../../blocks/threebuttondownload/ThreeButtonDownload.jsx';
import ModelInInterior from '../../sliders/modelinInterior/ModelInInterior.jsx';
import ModelTechInfo from '../../blocks/modeltechinfo/ModelTechInfo.jsx';
import FormQuestionBlock from '../../blocks/formquestionblock/FormQuestionBlock.jsx';
import LastPublicationsSlider from '../../sliders/lastpublicationsslider/LastPublicationsSlider.jsx'
import WorkInProduction from '../../blocks/workinproduction/WorkInProduction.jsx';

const Model = () => {
    return (
        <>
            <ModelCard/>
            <ShowroomsTwoRows/>
            <ModelDetail/>
            <ThreeButtonDownload/>
            <ModelInInterior/>
            <WorkInProduction/>
            <ModelTechInfo/>
            <FormQuestionBlock/>

        </>
    );
};

export default Model;
