import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from '../styles/all.module.scss'
import HeadPage from '../HeadPage/HeadPage';

const AllPosts = ({ posts, allPosts }) => {
const [offers] = useState(5);

    function arrayRandElement(arr) {
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }


    const scrollToStart = ()=>{
        window.scrollTo(0,0)
    }

    let arrOffer = []
        for(let i=0; i < offers; i++){
            let rand = arrayRandElement(allPosts)
            if(arrOffer.length < offers){ 
                arrOffer.push(rand)
                
            }
            let set = new Set(arrOffer)// позволяет отсортировать дубликаты
            let toArray = [...set]
            arrOffer = [...toArray]
            
        }
    

    if (!posts.length) {
        return <div className={s.error_container}>
            <h2>Что-то пошло не так</h2>
        </div>
    }

    return (
        <>
                <HeadPage title='Новости из мира ИТ' description='Все самые актуальные новости мира высоких технологий. Интересные новинки и обзоры из мира IT, Hi-Tech и технологий будущего. Цифровые технологии в жизни и бизнесе. Новости, аналитика, обзоры и прогнозы рынка IT и телекоммуникаций.'/>
            <div className={`container row ${s.content}`}>
                <div className={`col s12 l7 xl8 offset-l1 offset-xl1 offset-s0`}>
                    {posts.map(post => (
                        <div className={` ${s.post__card}`} key={post._id}>
                            <Link to={`/posts/${post._id}`} onClick={scrollToStart} className={s.post__title}>{post.title}</Link>
                            <p className={s.post__date}><strong>{new Date(post.date).toUTCString()}</strong></p>
                            <div className={`${s.card__image}`}>
                                <img src={post.imgUrl} className={s.post__image} alt={post.title}/>
                            </div>
                            <div className={`${s.card__text}`}>
                                <p className={s.post__text}>{post.description}</p>
                            </div>
                            <Link to={`/posts/${post._id}`} className={s.post__btn} onClick={scrollToStart}>Читать дальше</Link>
                        </div>

                    ))}
                </div>


                <div className={`col s12 l4 xl3 ${s.adds}`}>
                    <div className={`${s.add__container}`}>
                        <p className={s.adds__title}>Вам могут быть интересны</p>
                        <ul className={s.offer}>
                        {arrOffer.map(post => (
                        <li  className={s.offer__item} key={post._id}>
                            <Link to={`/posts/${post._id}`} className={s.offer__title} onClick={scrollToStart}>{post.title}</Link>

                        </li>

                    ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllPosts;


