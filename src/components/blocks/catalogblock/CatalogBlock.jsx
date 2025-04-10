import React from 'react';
import style from './catalogblock.module.css';

const CatalogBlock = (props) => {
    const { blocksSize, setBlocksSize } = props; 

    const styleText = () => {
        if (blocksSize) {
            return { display: "none" };
        }
        return null; 
    }

    const styleBody = () => {
        if (blocksSize) {
            return { 
                display: "block",
                maxWidth: '270px',
                maxHight: '278px',
            };
        }
        return null; 
    }

    const styleImgCont = () => {
        if (blocksSize) {
            return { 
                height: '100%',
            };
        }
        return null; 
    }

    const styleTitle = () => {
        if (blocksSize) {
            return { 
                textAlign : 'center',
                paddingTop: '23px',
            };
        }
        return null; 
    }

    return (
        <div className={style.body} style={styleBody()}>
            <div className={style.imgContainer} style={styleImgCont()}>
                <img className={style.img} src={props.img} />
            </div>
            <div className={style.infoContainer}>
                <h1 className={style.title} style={styleTitle()}>
                    {props.title}
                </h1>
                <p className={style.text} style={styleText()}>
                    {props.text}
                </p>
            </div>
        </div>
    );
};

export default CatalogBlock;