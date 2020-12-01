import React from 'react';
import s from'./error.module.scss'

export const ErrorPage = () => {
    return (
        <div className={s.error__container}>
            <h2 className={s.error__title}>Error 404</h2>
            <hr className={s.error__line}/>
            <h3 className={s.error__subtitle}>Страница не найдена</h3>
        </div>
    );
}

