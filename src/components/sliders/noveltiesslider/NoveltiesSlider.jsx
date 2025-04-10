import { React, useState, useRef, useEffect } from 'react';
import style from './noveltiesslider.module.css';
import noveltiesList from './../../helpers/noveltiesList.js';
import GoToCatalog from '../../ui/buttons/gotocatalog/GoToCatalog.jsx';
import SliderBlock from './sliderblock/SliderBlock.jsx';
import ArrowButton from './sliderarrow/SliderArrow.jsx';

import arrActive from '../../../../src/assets/img/arrows/novelties-arrow.svg';
import arrPassive from '../../../../src/assets/img/arrows/novelties-arrow-pass.svg';

const NoveltiesSlider = () => {
    const [mainSliderPosition, setMainPosition] = useState(0);
    const [firstSliderPosition, setFirstPosition] = useState(0);
    const [secondSliderPosition, setSecondPosition] = useState(0);
    const mainSlider = useRef();
    const firstSlider = useRef();
    const secondSlider = useRef();

    const [innerWidth, setIsNarrow] = useState(window.innerWidth);
    const handleResize = () => {
        setIsNarrow(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const trackWith = () => {
        if (innerWidth > 1100) {
            return (noveltiesList.length - 3) * 350;
        } else if (innerWidth < 1100 && innerWidth > 750) {
            return (noveltiesList.length - 2) * 350;
        } else {
            return (Math.floor(noveltiesList.length / 2) - 1) * 350;
        }
    };
    
    const prevHandler = (position, setPosition, slider) => {
        if (position !== 0) {
            setPosition(position += 350);
            slider.current.childNodes.forEach((element) => {
                element.style = `transform: translateX(${position + 'px'})`;
            });
        }
    };

    const nextHandler = (position, setPosition, slider) => {
        if (position !== -(trackWith())) {
            setPosition(position -= 350);
            slider.current.childNodes.forEach((element) => {
                element.style = `transform: translateX(${position + 'px'})`;
            });
        }
    };

    return (
        <div className={style.body}>
            {innerWidth > 750 ? 
                <div className={style.mainSlider}>
                    <ArrowButton img={mainSliderPosition !== 0 ? arrActive : arrPassive} direction="prev" onClick={() => prevHandler(mainSliderPosition, setMainPosition, mainSlider)} />
                    <div className={style.slidertrack} ref={mainSlider}>
                        {noveltiesList.map((props) => (
                            <SliderBlock key={props.id} {...props} />
                        ))}
                    </div>
                    <ArrowButton img={mainSliderPosition !== -(trackWith()) ? arrActive : arrPassive} direction="next" onClick={() => nextHandler(mainSliderPosition, setMainPosition, mainSlider)} />
                </div>
                : 
                <div className={style.mobilesSliders}>
                    <div className={style.firstSliser}>
                        <ArrowButton img={firstSliderPosition !== 0 ? arrActive : arrPassive} direction="prev" onClick={() => prevHandler(firstSliderPosition, setFirstPosition, firstSlider)} />
                        <div className={style.slidertrack} ref={firstSlider}>
                            {noveltiesList.map((props) => props.id % 2 === 0 ? <SliderBlock key={props.id} {...props} /> : null)}
                        </div>
                        <ArrowButton img={firstSliderPosition !== -(trackWith()) ? arrActive : arrPassive} direction="next" onClick={() => nextHandler(firstSliderPosition, setFirstPosition, firstSlider)} />
                    </div>
                    <div className={style.secondSliser}>
                        <ArrowButton img={secondSliderPosition !== 0 ? arrActive : arrPassive} direction="prev" onClick={() => prevHandler(secondSliderPosition, setSecondPosition, secondSlider)} />
                        <div className={style.slidertrack} ref={secondSlider}>
                            {noveltiesList.map((props) => props.id % 2 !== 0 ? <SliderBlock key={props.id} {...props} /> : null)}
                        </div>
                        <ArrowButton img={secondSliderPosition !== -(trackWith()) ? arrActive : arrPassive} direction="next" onClick={() => nextHandler(secondSliderPosition, setSecondPosition, secondSlider)} />
                    </div>
                </div>
            }
            <div className={style.button}>
                <GoToCatalog />
            </div>
        </div>
    );
};

export default NoveltiesSlider;