import {React, useState} from 'react';

import CatalogFurnitureMenu from '../../blocks/catalogfurnituremenu/CatalogFurnitureMenu';
import CatalogFiltersMenu from '../../blocks/catalogfiltersmenu/CatalogFiltersMenu';
import CatalogBlocks from '../../blocks/catalogblocks/CatalogBlocks';

import style from './catalogfurnitur.module.css'

const CatalogFurnitur = () => {

    const [blocksSize, setBlocksSize] = useState(0);
    const [blockType, setBlockType] = useState('All');
    const [blockName, setBlockName] = useState('');

    return (
        <div className={`${style.body}`}>
            <CatalogFurnitureMenu blockType={blockType} 
                                  setBlockType={setBlockType}/>
                                  
            <CatalogFiltersMenu blocksSize={blocksSize} 
                                setBlocksSize={setBlocksSize} 
                                blockType={blockType} 
                                setBlockType={setBlockType}
                                blockName={blockName}
                                setBlockName={setBlockName}/>
                                
            <CatalogBlocks  blocksSize={blocksSize} 
                            setBlocksSize={setBlocksSize}
                            blockType={blockType} 
                            setBlockType={setBlockType}
                            blockName={blockName}
                            setBlockName={setBlockName}/>
        </div>
    );
};

export default CatalogFurnitur;