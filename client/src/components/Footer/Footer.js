import React from 'react';
import s from './footer.module.scss'
import { Link } from 'react-router-dom';

const Footer = () => {

    const scrollToTop = ()=>{
        window.scrollTo(0,0)
    }

    return (
        <div className={s.footer}>
            <section className={s.footer__top}>
                <div className={`container row`}>
                    <div className={`col m3 s6 ${s.logo}`}>
                        <p className={s.logo__title}>Epazo</p>
                        <p className={s.logo__subtitle}>Новости из мира IT</p>
                    </div>
                    <div className={`col m2 s6 ${s.menu}`}>
                        <p className={`${s.menu__title}`}>Меню</p>
                        <ul className={`${s.menu__list}`}>

                            <li className={`${s.menu__item}`}><Link to='/' className={s.menu__link} onClick={scrollToTop}>Главная</Link></li>
                            <li className={`${s.menu__item}`}><Link to='/posts' className={s.menu__link} onClick={scrollToTop}>Новости</Link></li>
                            <li className={`${s.menu__item}`}><Link to='/resources' className={s.menu__link} onClick={scrollToTop}>Ресурсы</Link></li>

                        </ul>
                    </div>
                    <div className={`col m4 s7 ${s.logo}`}>
                        <p className={`${s.menu__title}`}>Ещё</p>
                        <ul>
                            <li className={`${s.menu__item}`}><Link to='/project-support' className={s.menu__link} onClick={scrollToTop}>Поддержать проект</Link></li>
                        </ul>
                    </div>

                    <div className={`col m2 s5 ${s.icons}`}>
                        <ul className={`${s.icons__list}`}>
                            <li className={`${s.icons__item}`}><a href='https://www.facebook.com/epazo.info' target='_blank' rel = "noopener noreferrer" className={s.icons__link} onClick={scrollToTop}><i className="fab fa-facebook-f"></i></a></li>
                            <li className={`${s.icons__item}`}><a href='https://vk.com/epazo' target='_blank' rel = "noopener noreferrer" className={s.icons__link} onClick={scrollToTop}><i className="fab fa-vk"></i></a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <hr/>
            <section className={s.footer__bottom}>
                <div className='container'>
                {/* <hr/> */}
                    <div className='row'>
                        <div className='col l6 m7'>
                            <p className={s.copyright}>© 2020 Epazo. All rights reserved </p>
                        </div>
                        <div className='col l4 offset-l2 m5 offset-m0'>
                            <p className={`${s.menu__link} ${s.email}`}>epazo.sup@yandex.ua</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Footer;

// на 518px слетает футер