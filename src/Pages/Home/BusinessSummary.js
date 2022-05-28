import React from 'react';
import CountUp, { useCountUp } from 'react-countup';

const BusinessSummary = ({ icon, end, title }) => {
    const countUpRef = React.useRef(null);
    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: end,
        duration: 7,

    });
    return (
        <div className="card w-96 bg-white image-full mx-auto">
            <div className="card-body bg-white">
                <h2 className="card-title md:text-7xl mx-auto text-primary">{icon}</h2>
                <div className='text-center text-5xl font-bold text-primary' ref={countUpRef}></div>
                <p className='text-center text-2xl font-bold text-primary'>{title}</p>
            </div>
        </div>


    );
};

export default BusinessSummary;