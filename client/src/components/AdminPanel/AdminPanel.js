import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import s from './admin.module.scss'

const AdminPanel = (props) => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logout = (e)=>{
        e.preventDefault()
        auth.logout()
        history.push('/')
    }    

    const sidenav= React.createRef()

    function collapse(){
        sidenav.current.className = `sidenav ${s.active} ${s.trans} `
    }

    function nocollapse(){
        sidenav.current.className = `sidenav ${s.trans}`
    }

    return (
        <>
            <nav>
                <div className={`nav-wrapper cyan darken-4 ${s.links}`}>
                    <NavLink to="/" className="brand-logo">Admin Panel</NavLink>
                    <span data-target="mobile-demo" className={`sidenav-trigger ${s.mobile_menu}`}><i onClick={collapse} style={{cursor: 'pointer'}} className="material-icons">menu</i></span>
                    <ul className="right hide-on-med-and-down">
                        <li><NavLink to="/create">Create Post</NavLink></li>
                        <li><NavLink to="/create-resources">Create Resource</NavLink></li>
                        <li><a href="/" onClick={logout}>Log Out</a></li>
                    </ul>
                </div>
            </nav>

            <ul ref={sidenav} className="sidenav" id="mobile-demo">
                <button className={s.exit_btn} onClick={nocollapse}>&times;</button>
                <li><NavLink to="/create">Create Post</NavLink></li>
                <li><NavLink to="/create-resources">Create Resource</NavLink></li>
                <li><a href="/" onClick={logout}>Log Out</a></li>
            </ul>
        </>
    );
}

//992

export default AdminPanel;
