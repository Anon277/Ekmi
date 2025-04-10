import React from 'react';
import ProductionCycleBlock from '../../blocks/productioncycleblock/ProductionCycleBlock';
import BrandBlock from '../../blocks/brandblock/BrandBlock';
import KeyBenefitsBlock from '../../blocks/keybenefitsblock/KeyBenefitsBlock';
import IndividualCalculationForm from '../../blocks/Individualcalculationform/IndividualCalculationForm';
import Novelties from '../../blocks/novelties/Novelties';
import ManufacturingWork from '../../blocks/manufacturingwork/ManufacturingWork';
import ThreePointInfo from '../../blocks/threepointinfo/ThreePointInfo';
import OurPartners from '../../blocks/ourpartners/OurPartners';
import FormQuestionBloc from '../../blocks/formquestionblock/FormQuestionBlock';

const CustomFurniture = () => {
    return (
        <>
            <ProductionCycleBlock/>
            <BrandBlock/> 
            <KeyBenefitsBlock/>
            <IndividualCalculationForm/>
            <Novelties/>
            <ManufacturingWork/>
            <ThreePointInfo/>
            <OurPartners/>
            <FormQuestionBloc/>
        </>
    );
};

export default CustomFurniture;