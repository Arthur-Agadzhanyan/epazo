import React from 'react';
import { Helmet } from 'react-helmet';

const HeadPage = ({title,description}) => {
    return (
        <Helmet>
            <title>{title} | Epazo</title>
            <meta name='description' content={`${description}`}/>       
        </Helmet>
    );
}

export default HeadPage;
