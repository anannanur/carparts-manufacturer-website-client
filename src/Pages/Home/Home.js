import React from 'react';
import BusinessSummary from './BusinessSummary';
import Slider from './Slider';
import { BiWorld } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import imageOne from '../../images/1.jpg';
import imageTwo from '../../images/2.jpg';
import imageThree from '../../images/3.jpg';
import shape from '../../images/curveAsymmetrical.svg';
import { useNavigate } from 'react-router-dom';
import useParts from '../Hooks/useParts';
import PartsCard from '../PartsCard/PartsCard';

const Home = () => {
    const [parts,setParts] = useParts();
    const partsCopy = [...parts];
    const reversedParts = partsCopy?.reverse();
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/tools/${id}`)
    }
    return (
        <div>
            <Slider></Slider>

            <div className='bg-gradient-to-r from-primary to-secondary py-16'>
                <h1 className='text-uppercase text-center text-white text-2xl md:text-5xl font-semibold'>We are Trustworthy</h1>
                <h1 className='text-uppercase text-center text-white text-xl w-fit mx-auto mt-1 pb-4'>We can feel users Expectations</h1>
                <div className="business-summery mt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto">
                    <BusinessSummary
                        icon={<BiWorld></BiWorld>}
                        end={50}
                        title="Countries"
                        image={imageTwo}
                    />
                    <BusinessSummary
                        icon={<BsPeopleFill></BsPeopleFill>}
                        end={900}
                        title="Happy Clients"
                        image={imageOne}
                    />
                    <BusinessSummary
                        icon={<MdOutlineComputer></MdOutlineComputer>}
                        end={1200}
                        title="Successful Projects"
                        image={imageThree}
                    />
                </div>
            </div>
            {/* parts */}
            <h1 className='text-uppercase text-center text-primary text-4xl md:text-5xl mt-20 font-semibold custom-border-primary w-fit mx-auto pb-4'>Featured Parts</h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 mb-20'>
                {
                    reversedParts.slice(0, 6).map(part => <PartsCard handlePurchase={handlePurchase} part={part} ></PartsCard>)
                }
            </div>

        </div>
    );
};

export default Home;