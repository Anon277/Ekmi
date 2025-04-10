import CatalogFurnitur from '../../blocks/catalogfurnitur/CatalogFurnitur';
import FormQuestion from '../../blocks/formquestionblock/FormQuestionBlock';
import style from './catalog.module.css'

const Catalog = () => {

    return ( 
        <div className={style.body}>
            <CatalogFurnitur/>

            <FormQuestion/>
        </div>
    );
};

export default Catalog;