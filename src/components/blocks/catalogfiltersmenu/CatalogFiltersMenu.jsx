import React from 'react';
import style from './catalogfiltersmenu.module.css'
import DropdownBtnFurnitureFilter from '../../ui/buttons/dropdownbtnfurniturefilter/DropdownBtnFurnitureFilter';
import CatalogBlockSizes from '../catalogblocksizes/CatalogBlockSizes';
import CatalogSearch from '../catalogsearch/CatalogSearch';

const CatalogFiltersMenu = ({blocksSize, setBlocksSize, blockType, setBlockType, blockName, setBlockName}) => {
    return (
        <div className={`${style.body} ${'content'}`}>
            <div className={style.leftBlock}>
                <div className={style.furnitureFilter}>
                    <DropdownBtnFurnitureFilter blockType={blockType} setBlockType={setBlockType}/>
                </div>
            </div>
            <div className={style.rightBlock}>
                <div className={style.catalogBlockSizes}>
                    <CatalogBlockSizes blocksSize={blocksSize} setBlocksSize={setBlocksSize}/>
                </div>
                <div className={style.catalogSearch}>
                    <CatalogSearch blockName={blockName} setBlockName={setBlockName}/>
                </div>
            </div>
        </div>
    );
};

export default CatalogFiltersMenu;