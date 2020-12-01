import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../../../hooks/http.hook';
import Loader from '../../../components/Loader/Loader';
import ResourceCard from '../../../components/Resorces/ResourceCard/ResourceCard';

const DetailResources = () => {
    const [resource, setResource] = useState(null);
    const resId = useParams().id
    const {request,loading} = useHttp()

    const getResource = useCallback(async ()=>{
        try{
            const data = await request(`/api/resources/${resId}`,"GET",null)
            setResource(data)
        }catch{}
    },[resId,request])

    useEffect(()=>{
        getResource()
    },[getResource])

    if(loading){
        return <Loader/>
    }

    return (
        <div>
            {!loading && resource && <ResourceCard res={resource}/>} 
        </div>
    );
}

export default DetailResources;
