import React from 'react';
import img from '../../images/404.gif';

const NotFound = () => {
    return (
        <div style={{ background: '#14AA84' }} className='flex justify-center items-center'>

            <img src={img} alt="" />

        </div>
    );
};

export default NotFound;