import React from 'react';
import s from '../../styles/post.module.scss'
import ReactHtmlParser from 'react-html-parser'
import HeadPage from '../../HeadPage/HeadPage';

const PostCard = ({ res }) => {
    return (
        <>

            <div className="container">
                <HeadPage title={`${res.title}`} description={res.description}/>
                <div className={`container ${s.title_container}`}>
                    <h2 className={s.title}>{res.title}</h2>
                    <p className={s.post__date}><strong>{new Date(res.date).toUTCString()}</strong></p>
                </div>
                <div className='container'>
                    <div className='row'>
                        <img className={`${s.img}`} src={res.imgUrl}  alt={res.title}/>
                    </div>
                    <div className={s.text}>{ ReactHtmlParser(res.text)}</div>
                </div>

                

            </div>
        </>
    );
}

export default PostCard;