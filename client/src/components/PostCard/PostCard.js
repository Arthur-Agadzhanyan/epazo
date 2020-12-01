import React from 'react'
import s from '../styles/post.module.scss'
import ReactHtmlParser from 'react-html-parser'
import HeadPage from '../HeadPage/HeadPage'

const PostCard = ({ post }) => {
    return (
        <>

            <div className="container">
            <HeadPage title={post.title} description={post.description}/>
                <div className={`container ${s.mb_container}`}>
                    <h2 className={s.title}>{post.title}</h2>
                    <p className={s.post__date}><strong>{new Date(post.date).toUTCString()}</strong></p>
                </div>
                <div className={`container ${s.mb_container}`}>
                    <div className='row'>
                        <img className={`${s.img}`} src={post.imgUrl}  alt={post.title}/>
                    </div>
                </div>


                <div className={`container ${s.mb_container}`}>
                    <div className={s.text}>
                        {ReactHtmlParser(post.text)}
                    </div></div>

            </div>
        </>
    );
}

export default PostCard;

