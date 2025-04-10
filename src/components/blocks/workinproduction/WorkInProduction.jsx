import {React, useRef, useState} from 'react';
import style from './workinproduction.module.css';
import video from './../../../../src/assets/videos/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4'

const WorkInProduction = () => {

    const videoRef = useRef(null); 
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      };

    return (
        <div className={style.blockIndent + ' ' + 'pageBlockIndent'}>
            <div className={style.body}>
                <div className={style.content}>
                    <div className={style.videoBlock} onClick={togglePlay}>
                        <video className={style.video} ref={videoRef} poster="../src/assets/img/backgrounds/poster.png">
    
                            <source src={video} type="video/webm" />
            
                            <source src={video} type="video/mp4" />
                        </video>
    
                       {isPlaying ? null : <button className={style.toggleButton} onClick={togglePlay}>
                            <img src="./src\assets\img\icons\toggleTriangle.png" alt="" />
                        </button>}
                    </div>
        
                    <div className={style.infoBlock}>
                        <h2 className={style.title}>Как устроена работа на производстве</h2>
        
                        <p className={style.text}>
                            Производство компании и центральный офис объединены в единую компьютерную сеть, 
                            и мастер каждого цеха получает наряды на работу и отмечает их исполнение в единой информационной среде компании.
                        </p>
                    </div>
        
                    <div className={style.decorBlock}></div>
                </div>
            </div>
        </div>
    );
};

export default WorkInProduction;