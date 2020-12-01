import React from 'react';
// import s from './loader.module.scss'

const Loader = () => {
    return (
        // <div className={s.progress_container}>
            <div className="progress grey darken-3">
                <div className="indeterminate grey lighten-5"></div>
            </div>
        // </div>
    );
}

export default Loader;
