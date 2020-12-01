import React, { useState, useEffect, useCallback } from 'react';
import { useHttp } from '../../hooks/http.hook';
import Loader from '../../components/Loader/Loader';
import AllPosts from '../../components/AllPosts/AllPosts';
import Pagination from '../../components/Pagination/Pagination';

 const PostsPage = () => {
    const [posts,setPosts] = useState([])
    const {loading,request} = useHttp()
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);// указывает сколько постов будет на 1 странице


    const getPosts = useCallback(async()=>{
        try{
            const fetched = await request('/api/post','GET',null)
            setPosts(fetched.reverse())
        }catch{}
    },[request])

    useEffect(()=>{
        getPosts()
    },[getPosts])

    if(loading){
        return <Loader/>
    }

    //get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)


    const paginate= (pageNumber)=> {
        window.scrollTo(0,0)
        setCurrentPage(pageNumber)
    }
    
    return (
        <>
            {!loading && 
            
                <AllPosts posts={currentPosts} allPosts={posts}/>
                
            
            }
            {!loading && posts && <Pagination perPage={postsPerPage} total={posts.length} paginate={paginate} currentPage={currentPage}/> }
        </>
    );
}

export default PostsPage