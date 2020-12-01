import React, { useState, useCallback, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../hooks/http.hook';
import Loader from '../../components/Loader/Loader';
import PostCard from '../../components/PostCard/PostCard';

 const DetailPage = () => {
    const [post, setPost] = useState(null);
    const postId = useParams().id
    const {request, loading} = useHttp()

    const getPost = useCallback(async () => {
        try {
            const fetched = await request(`/api/post/${postId}`, 'GET', null)
            setPost(fetched)
        } catch{ }
    }, [postId, request])

    useEffect(()=>{
        getPost()
    },[getPost])

    if(loading){
        return <Loader/>
    }

    return (
        <>
           {!loading && post && <PostCard post={post} />} 
           
        </>
    );
}

export default DetailPage
