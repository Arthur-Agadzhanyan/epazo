import React, { useState } from 'react';
// import Slider from "react-slick";
import s from './main.module.scss'
import './slider.scss'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message';
import HeadPage from '../../components/HeadPage/HeadPage';
import { useHistory } from 'react-router-dom';

const MainPage = () => {
    const [form, setForm] = useState({
        name: '',
        title: '',
        text: ''
    });
    function scrollToTop(){
        
        window.scrollTo(0,0)
    }
    const history = useHistory()
    const {request} = useHttp()
    const message = useMessage()
    
    const changeHanlder = (event)=>{
        setForm({...form, [event.target.name]: event.target.value})
    }
    const changeText = ( event, editor ) => {
        const data = editor.getData();
        setForm({...form, text:data})
    }

    const sendPost = async(e)=>{
        e.preventDefault()
        try{
            if(!form.text){
                message('Вы не можете отправить пустую статью')
            }
            if(form.text.length <= 399){
                message('Минимальная длинна статьи 400 символов')
            }
            else{
                const data = await request('/api/bot/community','POST',{...form})
                message(data.message)
                setForm({
                    name: '',
                    title: '',
                    text: '' 
                })
                history.push(`/posts`)
                scrollToTop()
                
            }
            
        }catch{}
    }

    return (
        <>
                
                <HeadPage title='Главная страница' description='Все самые актуальные новости мира высоких технологий. Интересные новинки и обзоры из мира IT, Hi-Tech и технологий будущего. Цифровые технологии в жизни и бизнесе. Новости, аналитика, обзоры и прогнозы рынка IT и телекоммуникаций.'/>

            <div className={`${s.wrapper}`}>
                <section className={s.parallax}>
                    <div className={s.darked}>
                        <div className='container'>
                            <h2 className={s.news__title}>Свежие новости из мира IT</h2>
                            <p className={s.news__text}>Все самые актуальные новости мира высоких технологий. Интересные новинки и обзоры из мира IT, Hi-Tech и технологий будущего. Цифровые технологии в жизни и бизнесе. Новости, аналитика, обзоры и прогнозы рынка IT и телекоммуникаций.</p>
                        </div>
                    </div>
                </section>

                <section className={s.resources}>
                    <div className='container'>
                        <h2 className={s.resources__title}>Полезные ресурсы для разработчиков</h2>
                        <p className={s.resources__text}>
                            В разделе "Ресурсы" мы подготовили для вас подборку полезных материалов для веб разработчиков.<br/><br/>
                            Мы собрали для вас коллекцию самых необходимых инструментов и ресурсов, с помощью которых вы узнаете, как делать все быстрее и быть продуктивнее.<br/><br/>
                            Вы можете помочь нам в этом =) Публикуйте ссылки на интересные ресурсы по теме в разделе ниже, и мы разместим их на сайте!
                        </p>
                    </div>
                </section>

                <section className={`${s.parallax} ${s.community}`}>
                    <div className={s.darked}>
                        <div className={`row container ${s.community__container}`}>
                            <div className={`col s12 ${s.container}`}>
                            <h2 className={s.news__title}>Предложите свою статью</h2>
                            <form className={s.community__form} onSubmit={sendPost}>
                            
                                <input type='text' placeholder='Ваш псевдоним' className={s.community__input} value={form.name} name='name' onChange={changeHanlder} required/>
                                
                                
                                    <input type='text' placeholder='Заголовок' className={s.community__input}  value={form.title} name='title' onChange={changeHanlder} required/>
                                
                                <div className={`input-field ${s.input_container} `}>
                                    <CKEditor onChange={changeText} editor={ ClassicEditor } name='text' value={form.text } required/>
                                </div>
                                {/* <textarea placeholder='Текст вашей статьи' className={s.community__textarea}   ></textarea> */}
                                <button type='submit' className={s.community__btn}>Отправить</button>
                            </form>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default MainPage;
