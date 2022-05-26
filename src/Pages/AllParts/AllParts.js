import React from 'react';
import { useNavigate } from 'react-router-dom';
import useParts from '../Hooks/useParts';
import PartsCard from '../PartsCard/PartsCard';

const AllParts = () => {
    const [parts,setParts] = useParts();
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/parts/${id}`)
    }
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 mb-20'>
            {
               parts.map(part => <PartsCard handlePurchase={handlePurchase} part={part} key={part._id}></PartsCard>)
            }
        </div>
    );
};

export default AllParts;