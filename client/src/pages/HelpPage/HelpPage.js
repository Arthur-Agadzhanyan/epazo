import React from 'react';
import s from './support.module.scss'
import {Helmet} from "react-helmet"


const HelpPage = () => {
    return (
        <>
                <Helmet>
                    <title>Поддержать проект | Epazo </title>
                </Helmet>
            <div className={`container ${s.support}`}>
                <div className={s.support__content}>
                    <h2 className={` ${s.support__title}`}>Поддержать проект на Patreon</h2>
                    <div className={`container ${s.subtitle__container}`}>
                        <h5 className={` ${s.support__subtitle}`}>Поддерживая проект на Patreon, вы ежемесячно отправляете нам заранее определённую сумму — от <strong>$2</strong>. А взамен получаете ранний доступ к контенту вроде статей на сайте и эксклюзивов. В любой момент вы можете остановить отправку платежей.</h5>
                    </div>
                    <a href='https://www.patreon.com/epazo' target='_blank' rel="noopener noreferrer"  type='submit' className={s.support__btn}>Поддержать</a>
                </div>
            </div>
        </>
    );
}

export default HelpPage;
 