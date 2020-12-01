import React, { useState } from 'react';
import s from '../../styles/all.module.scss'
import { Link } from 'react-router-dom';
import HeadPage from '../../HeadPage/HeadPage';


const AllResources = ({res,allRes}) => {
    const [offers] = useState(5);
    const scrollToStart = ()=>{
        window.scrollTo(0,0)
    }

    function arrayRandElement(arr) {
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    let arrOffer = []
    for(let i=0; i < offers; i++){
        let rand = arrayRandElement(allRes)
        if(arrOffer.length < offers){ 
            arrOffer.push(rand)
            
        }
        let set = new Set(arrOffer)// позволяет отсортировать дубликаты
        let toArray = [...set]
        arrOffer = [...toArray]
        
    }

    if(!res.length){
        return <div className={s.error_container}>
        <h2>Что-то пошло не так</h2>
    </div>
    }

    

    return (
        <>
            <HeadPage title={`Полезные ресурсы для разработчиков`} description='В этом разделе мы подготовили для вас подборку полезных материалов для веб разработчиков. Мы собрали для вас коллекцию самых необходимых инструментов и ресурсов, с помощью которых вы узнаете, как делать все быстрее и быть продуктивнее.'/>
            <div className={`container row ${s.content}`}>
                <div className={`col s12 l7 xl8 offset-l1 offset-xl1 offset-s0`}>
                    {res.map(resource => (
                        <div className={` ${s.post__card}`} key={resource._id}>
                            <Link to={`/resources/${resource._id}`} onClick={scrollToStart} className={s.post__title}>{resource.title}</Link>
                            <p className={s.post__date}><strong>{new Date(resource.date).toUTCString()}</strong></p>
                            <div className={`${s.card__image}`}>
                                <img src={resource.imgUrl} className={s.post__image} alt={resource.title}/>
                            </div>
                            <div className={`${s.card__text}`}>
                    <p className={s.post__text}>{resource.description}</p>
                            </div>
                            <Link to={`/resources/${resource._id}`} className={s.post__btn} onClick={scrollToStart}>Читать дальше</Link>
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

export default AllResources;
