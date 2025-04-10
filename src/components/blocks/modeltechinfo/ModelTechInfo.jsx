import { React, useState } from 'react';
import style from './modeltechinfo.module.css';
import { TehInfoList } from '../../helpers/tehInfoList';

const SectionButton = ({ numButton, setActiveSec, activeSec, width, secName }) => {
    return (
        <button
            className={style.section}
            onClick={() => setActiveSec(numButton)}
            style={activeSec === numButton ? { width: width + 'px', backgroundColor: 'white', borderBottom: 'none' } : { width: width + 'px' }}
        >
            <p className={style.secName}>{secName}</p>
        </button>
    );
};

const ModelTechInfo = () => {
    const [activeSec, setActiveSec] = useState(1);

    const sections = [
        { numButton: 1, width: 445, secName: 'Техническая информация' },
        { numButton: 2, width: 279, secName: 'Размеры' },
        { numButton: 3, width: 445, secName: 'Дополнительная комплектация' }
    ];

    return (
        <div className={`${style.body} pageBlockIndent`}>
            <div className={`${style.content} content`}>
                <div className={style.sections}>
                    {sections.map(section => (
                        <SectionButton
                            key={section.numButton}
                            numButton={section.numButton}
                            setActiveSec={setActiveSec}
                            activeSec={activeSec}
                            width={section.width}
                            secName={section.secName}
                        />
                    ))}
                </div>
                <div className={style.info}>
                    <div className={style.infoContent}>
                        {activeSec === 1 ? TehInfoList.map((el, index) => (
                            <div key={index} className={style.listBlock}>
                                <div className={style.nameBlock}>
                                    <div className={style.point}></div>
                                    <h1 className={style.infoTitle}>{el.title + ':'}</h1>
                                </div>
                                <div className={style.textBlock}>
                                    <p className={style.text}>{el.text}</p>
                                </div>
                            </div>
                        )) : 
                            <div className={style.ErrorBlock}><div>Упс...Ошибка !</div></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelTechInfo;
