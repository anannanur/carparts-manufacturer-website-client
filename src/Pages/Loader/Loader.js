import React from 'react';
import loader from '../../images/loading-white.gif'

const Loader = () => {
    return (
        <div className='h-full w-full flex items-center justify-center'>
            <img className='w-32' src={loader} alt="" />
        </div>
    );
};

export default Loader;