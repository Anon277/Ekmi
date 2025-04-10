import {React, useState} from 'react';
import style from './catalogblocksizes.module.css'

const CatalogBlockSizes = ({blocksSize, setBlocksSize}) => {

    const menuImg = () => {
        if (blocksSize == 1){
            return 1 ;
        }else{
            return 0 ;
        }
    }

    return (
        <div className={style.body}>
            <button className={style.longMenu} onClick={!blocksSize ? () => setBlocksSize(!blocksSize) : null}>
                <img className={style.menuImg} src={`./src/assets/img/menu-size-long-${menuImg() ? `active` : `passive`}.svg`} alt="" />
            </button>

            <button className={style.shortMenu} onClick={blocksSize ? () => setBlocksSize(!blocksSize) : null}>
                <img className={style.menuImg} src={`./src/assets/img/menu-size-short-${!menuImg() ? `active` : `passive`}.svg`} alt="" />
            </button>
        </div>
    );
};

export default CatalogBlockSizes;