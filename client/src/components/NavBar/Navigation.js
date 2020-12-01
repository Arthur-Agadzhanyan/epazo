import React from 'react';
import { Link } from 'react-router-dom';
import s from './navbar.module.scss'

export const Navigation = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
        mbMenu.current.className = `sidenav ${s.mb_navbar}`
        overlay.current.style = 'display: none'
    }
    const mbMenu = React.createRef()
    const overlay = React.createRef()
    const toggleMbMenu = ()=>{
        mbMenu.current.className = `sidenav ${s.mb_navbar} ${s.active}`
        overlay.current.style = 'display: block'
    }
    const hideMbMenu = ()=>{
        mbMenu.current.className = `sidenav ${s.mb_navbar}`
        overlay.current.style = 'display: none'

    }
    return (
        <>
                <div ref={overlay} className={s.overlay} onClick={hideMbMenu}></div>

            <div className={s.title_container}>
                <button className={s.mb_button} onClick={toggleMbMenu}><i className="fas fa-bars"></i></button>
                <div>
                    <Link to='/' className={s.page_title}>Epazo</Link>
                    <Link to='/' className={s.page_subtitle}><p>Новости из мира IT</p></Link>
                </div>
                

            </div>

            <nav className={s.navbar}>
                <div className={`container ${s.container}`}>
                    <ul className={s.navbar__container}>
                        <li><Link to='/' className={s.navbar__link} onClick={scrollToTop}>Главная</Link></li>
                        <li><Link to='/posts' className={s.navbar__link} onClick={scrollToTop}>Новости</Link></li>
                        <li><Link to='/resources' className={s.navbar__link} onClick={scrollToTop}>Ресурсы</Link></li>
                    </ul>
                </div>
            </nav>
            
                <ul ref={mbMenu} className={`sidenav ${s.mb_navbar}`} id="mobile-demo">
                        <li><Link to='/' className={s.navbar__logo} onClick={scrollToTop}>Epazo</Link></li>
                        <hr/>
                        <li><Link to='/' className={s.mb_navbar__link} onClick={scrollToTop}>Главная</Link></li>
                        <li><Link to='/posts' className={s.mb_navbar__link} onClick={scrollToTop}>Новости</Link></li>
                        <li><Link to='/resources' className={s.mb_navbar__link} onClick={scrollToTop}>Ресурсы</Link></li>
                </ul>
        </>
    );
}
//