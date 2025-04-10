import {React, } from 'react';
import style from './modeldetailinfo.module.css'

const ModelDetailInfo = ({part, setPart}) => {
    const blockList = [
        {
            icon: './src/assets/img/icons/setting.svg', 
            title: 'Каркас',
            text: 'В данной модели используется искусственный лебяжий мех',
        },
        {
            icon: './src/assets/img/icons/maximize-3.svg',
            title: 'Спинка',
            text: 'В данной модели используется искусственный лебяжий мех',
        }
    ];

    const pointCords =[
        { x: 61, y: 221,},
        { x: 150, y: 297,},
        { x: 51.5, y: 300,},
        { x: 48.5, y: 390,},
        { x: 160, y: 425,},
    ];

    const lineStyle = { 
        position: 'absolute', 
        top: 120, 
        width: 'auto', 
        height: '1000px', 
        zIndex: 10 
    } ;

    if(part == 2){
        lineStyle.left = 50;
    }else{
        lineStyle.left = 180;
    }

    let partEven;
    if(part % 2 === 0){
        partEven = 1;
    }else{
        partEven = 0;
    }



    return (
        <div className={style.body}>
            <div className={style.leftBlock}>
                <div className={style.iconBlock}>
                    <img className={style.icon} src={blockList[partEven].icon} alt="" />
                </div>
            </div>

            <div className={style.rightBlock}>
                <h1 className={style.title}>{blockList[partEven].title}</h1>
                <p className={style.text}>{blockList[partEven].text}</p>
            </div>
            <svg className={style.line} style={lineStyle}>
                <line
                    x1={0}
                    y1={0}
                    x2={pointCords[part].x}
                    y2={pointCords[part].y}
                    stroke="#c9c9c9"
                    strokeWidth="1"
                    />
            </svg>
        </div>
    );
};

export default ModelDetailInfo;