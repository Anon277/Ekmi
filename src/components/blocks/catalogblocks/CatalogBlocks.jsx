import { React, useState, useMemo } from 'react';
import style from './catalogblocks.module.css';
import CatalogBlock from '../catalogblock/CatalogBlock.jsx';
import catalogBlocksList from '../../helpers/catalogBlocksList.js';

const CatalogBlocks = ({ blocksSize, setBlocksSize, blockType, setBlockType, blockName, setBlockName }) => {
    const itemsPerPage = 16;
    const [currentPage, setCurrentPage] = useState(1);
    const [showAll, setShowAll] = useState(false); // Новое состояние для отображения всех блоков

    // Фильтруем блоки на основе введенных данных
    const filteredBlocks = useMemo(() => {
        return catalogBlocksList.filter((props) => {
            return (
                (props.type.includes(blockType) || blockType === 'All') &&
                (props.title.toLowerCase().includes(blockName.toLowerCase()) || blockName === '')
            );
        });
    }, [blockType, blockName]);

    // Рассчитываем общее количество страниц
    const totalPages = Math.ceil(filteredBlocks.length / itemsPerPage);

    // Получаем блоки для текущей страницы или все блоки
    const currentBlocks = useMemo(() => {
        if (showAll) {
            return filteredBlocks; // Возвращаем все блоки
        }
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredBlocks.slice(startIndex, startIndex + itemsPerPage);
    }, [currentPage, filteredBlocks, showAll]);

    const blocksStyle = () => {
        return {
            gridTemplateRows: 'auto',
            gridTemplateColumns: blocksSize ? '1fr 1fr 1fr 1fr' : '1fr 1fr',
            columnGap: '30px',
            rowGap: blocksSize ? '125px' : '68px',
        };
    };

    return (
        <>
            <div className={`${style.body} ${'content'}`} style={blocksStyle()}>
                {currentBlocks.map((props) => (
                    <CatalogBlock
                        img={props.img}
                        title={props.title}
                        text={props.text}
                        key={props.id}
                        blocksSize={blocksSize}
                        setBlocksSize={setBlocksSize}
                    />
                ))}
            </div>

            <div className={style.paginations}>
                <button
                    onClick={currentPage === 1 ? null : () => setCurrentPage(currentPage - 1)}
                    className={style.buttonArrow}
                >
                    <img src="./src/assets/img/arrows/paginations-arrows.svg" alt="" />
                </button>

                <div className={style.pages}>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`${style.pageNum} ${currentPage === index + 1 ? style.active : ''}`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            <p>{index + 1}</p>
                        </button>
                    ))}
                </div>

                <button
                    onClick={currentPage === totalPages ? null : () => setCurrentPage(currentPage + 1)}
                    className={style.buttonArrow}
                >
                    <img src="./src/assets/img/arrows/paginations-arrows.svg" alt="" />
                </button>
            </div>
            
            <div className={style.pageButton}>
                <button 
                    className={style.pageButtonBody}
                    onClick={() => setShowAll(!showAll)} 
                    style={showAll ? {width: '288px',} : {width: '188px',}}>
                        {showAll ? 'Показать постранично' : 'Показать все'}
            </button>
            </div>
            
        </>
    );
};

export default CatalogBlocks;