import React, { useState, useCallback, useEffect } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import Loader from '../../../components/Loader/Loader';
import AllResources from '../../../components/Resorces/AllResources/AllResources';
import Pagination from '../../../components/Pagination/Pagination';

const Resources = () => {
    const [resources, setResources] = useState([]);
    const {request,loading} = useHttp()
    const [currentPage, setCurrentPage] = useState(1);
    const [resourcesPerPage] = useState(2);// указывает сколько постов будет на 1 странице


    const indexOfLastResource = currentPage * resourcesPerPage
    const indexOfFirstResource = indexOfLastResource - resourcesPerPage
    const currentResources = resources.slice(indexOfFirstResource,indexOfLastResource)


    const paginate= (pageNumber)=> {
        window.scrollTo(0,0)
        setCurrentPage(pageNumber)
    }

    const getResources = useCallback(async()=>{
        try{
            const data = await request('/api/resources','GET',null)
            setResources(data.reverse())
        }catch{}
    },[request])

    useEffect(()=>{
        getResources()
    },[getResources])

    if(loading){
        return <Loader/>
    }

    return (
        <>
            {!loading && <AllResources res={currentResources} allRes={resources}/>}
            {!loading && resources && <Pagination perPage={resourcesPerPage} total={resources.length} paginate={paginate} currentPage={currentPage}/> }
        </>
    );
}

export default Resources;
