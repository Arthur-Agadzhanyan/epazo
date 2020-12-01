import React, { useState, useContext, useEffect } from 'react';
import s from './style.module.scss'
import { useMessage } from '../../hooks/message';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';

 const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading,error,clearError,request} = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    useEffect(()=>{
        message(error)
        clearError()
    },[error,message,clearError])

    const changeHanlder = (event)=>{
        setForm({...form, [event.target.name]: event.target.value})
    }
    const loginHandler = async ()=>{
        try{
            const data = await request('/api/auth/login',"POST",{...form})
            auth.login(data.token,data.userId)
        }catch{}
    }

    return (
        <>
        <div className={s.wrapper}>
            <div className="row">
                <div className={`col s12 m8 l4 offset-m2 offset-l4 grey lighten-5 ${s.auth_container}`}>
                    <h2 className={s.title}>Login</h2>
                    <div className={`col s12 m8 l10 offset-m2 offset-l1 ${s.form_container}`}>
                        <div className={`input-field ${s.auth_input}`}>
                            <i className="material-icons prefix">account_circle</i>
                            <input id="email" type="email" className="validate" name='email' onChange={changeHanlder} />
                            <label className={s.label} htmlFor="email">Email</label>
                        </div>
                        <div className={`input-field ${s.auth_input}`}>
                            <i className="material-icons prefix">vpn_key</i>
                            <input id="password" type="password" className="validate" name='password' onChange={changeHanlder}/>
                            <label className={s.label} htmlFor="password">Password</label>
                        </div>
                    </div>
                    <button 
                    className={`btn waves-effect waves-light col s8  offset-s2 ${s.auth_btn}`}
                     type="submit"
                      name="action"
                      disabled={loading}
                      onClick={loginHandler}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    </>
    );
}

export default AuthPage
