import React from 'react';

import style from './manufacturingwork.module.css'

const ManufacturingWork = () => {
    return (
        <div className={style.body}>
            <div className={style.content + ' ' + 'pageBlockIndent'}>
                <img src="./src\assets\img\backgrounds\bosfore-white-а-background.png" alt="" />

                <div className={style.rightBlock}>
                    <div className={style.infoBlock}>
                        <h1 className={style.title}>
                            Как устроена работа на производстве
                        </h1>
                        <p className={style.text}>
                            Производство компании и центральный офис объединены в единую компьютерную сеть, 
                            и мастер каждого цеха получает наряды на работу и отмечает их исполнение в единой информационной среде компании.
                        </p>
                    </div>
                </div>

                <div className={style.orangeBlock}></div>
            </div>
        </div>
    );
};

export default ManufacturingWork;