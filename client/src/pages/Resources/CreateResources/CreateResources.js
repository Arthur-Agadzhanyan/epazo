import React, { useState, useEffect, useContext } from 'react';
import s from './create.module.scss'
import { useHttp } from '../../../hooks/http.hook';
import { AuthContext } from '../../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CreateResources = () => {
     const auth = useContext(AuthContext)
     const history = useHistory()
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [text, setText] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const {request} = useHttp() 
    useEffect(() => {
        window.M.updateTextFields()
    }, [])
    const pressHandler = async(e)=>{
        e.preventDefault()
        try{
            if(description.length >= 216){
                alert('Описание не должно быть длиннее 215 символов')
            }else{
                const data = await request('/api/resources/generate','POST',{imgUrl: image, title: title, text: text, link: link,description: description},{
                    Authorization: `Bearer ${auth.token}`
                })
                history.push(`/resources/${data.resource._id}`)
            }
        }catch{}
    }

    const changeText = ( event, editor ) => {
        const data = editor.getData();
        setText(data)
    }

    return (
        <div className={`row ${s.container}`}>
            <div className={`col l6 offset-l3 col m8 offset-m2 col s12`}>

            <form onSubmit={pressHandler}>
                    <div className={`input-field ${s.input_container}`}>
                        <label htmlFor="title">Введите Url Картинки</label>
                        <input
                            placeholder="Картинка"
                            className="validate"
                            id="image"
                            type="text"
                            value={image}
                            onChange={e => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div className={`input-field ${s.input_container}`}>
                        <label htmlFor="title">Введите Заголовок</label>
                        <input
                            placeholder="Заголовок"
                            className="validate"
                            id="title"
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className={`input-field ${s.input_container}`}>
                        <label htmlFor="description">Введите Описание</label>
                        <input
                            placeholder="Описание"
                            className="validate"
                            id="description"
                            type="text"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className={`input-field ${s.input_container}`}>
                        <label htmlFor="text" className = {s.textarea_label}>Введите Текст поста</label>
                        {/* <textarea
                        className = {s.textarea}
                            placeholder="Текст поста"
                            
                            rows="10"
                            cols="45"
                            id="text"
                            type="text"
                            value={text}
                            onChange={e => setText(e.target.value)}
                            required
                        ></textarea> */}
                        <CKEditor onChange={changeText} className={s.textarea} editor={ ClassicEditor } id='text' name='text' value={text} required/>
                        </div>
                        <div className={`input-field ${s.input_container}`}>
                        <label htmlFor="link">Введите Ссылку</label>
                        <input
                            placeholder="Ссылка"
                            className="validate"
                            id="link"
                            type="text"
                            value={link}
                            onChange={e => setLink(e.target.value)}
                        />
                    </div> 
                
                    <button type='submit' className={s.btn}>Submit</button>
                </form>
                </div>
        </div>
    );
}

export default CreateResources;
