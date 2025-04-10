import React from 'react';
import style from './rowpointinfoblock.module.css'

const RowPointInfoBlock = (props) => {

    return (
        <div className={style.body}>
            <div className="content">

                {props.swap ?
                    <h1 style={{paddingBottom: props.titlePadding + 'px'}} className={style.title}>
                        {props.title}
                    </h1> : undefined
                }

                <div className={style.content} style={props.swap ? {flexDirection: 'row-reverse', alignItems: 'center'} : undefined}>
                    <div className={style.info}>

                        {props.swap ? undefined : 
                            <h1 style={{paddingBottom: props.titlePadding + 'px'}} className={style.title}>
                                {props.title}
                            </h1>
                        }

                        <p  style={props.swap ? {order: 1} : {order: 2}} className={style.text}>{props.text}</p>
                    </div>
    
                    <div className={style.imgBlock}><img className={style.img} src={props.img} alt="" /></div>
                    <div style={props.swap ? {top: -109, } : null} className={style.orangeBlock}></div>
                </div>
            </div>
        </div>
    );
};

export default RowPointInfoBlock;