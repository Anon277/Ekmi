import React from 'react';
import style from './catalogfurnituremenu.module.css';

import image1 from '../../../../src/assets/img/side/image 5.png';
import image2 from '../../../../src/assets/img/side/image 7.png';
import image3 from '../../../../src/assets/img/side/image 6.png';
import image4 from '../../../../src/assets/img/side/image 9.png';
import image5 from '../../../../src/assets/img/side/image 10.png';
import image6 from '../../../../src/assets/img/side/image 11.png';
import image7 from '../../../../src/assets/img/side/image 12.png';

const MenuBlockList = [
    { name: 'Диваны',  type: 'Sofa' , src: image1, id: 1, },
    { name: 'Стулья',  type: 'Chair' , src: image2, id: 2, },
    { name: 'Кресла',  type: 'Armchair' , src: image3, id: 3, },
    { name: 'Кровати', type: 'Bed' , src: image4, id: 4, },
    { name: 'Матрацы', type: 'Mattress' , src: image5, id: 5, },
    { name: 'пуфы',    type: 'Poof' , src: image6, id: 6, },
    { name: 'Эксклюзивная мебель', type: 'Exclusive', src: image7, id: 7, },
];

const CatalogFurnitureMenuImgContainer = ({src, name, click, type, blockType}) =>{
    return(
            <button className={style.block} onClick={() => click(type)}>
                <div className={style.blockImg}>
                    <img className={style.img} src={src} alt="" />
                </div>
                <h1 style={blockType == type ? {color: '#FF9619'} : {}} className={style.title}> {name} </h1>
            </button>
    );
}

const CatalogFurnitureMenu = ({blockType, setBlockType}) => {
    return (
        <div className={` ${style.body} ${"content"} `}>
            {MenuBlockList.map((props) =>{
                 return (
                    <CatalogFurnitureMenuImgContainer src={props.src} type={props.type} blockType={blockType} name={props.name} key={props.id} click={setBlockType}/>
                );
            })}
        </div>
    );
};

export default CatalogFurnitureMenu;