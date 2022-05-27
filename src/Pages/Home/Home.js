import React from 'react';
import BusinessSummary from './BusinessSummary';
import Slider from './Slider';
import { BiWorld } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import imageOne from '../../images/1.jpg';
import imageTwo from '../../images/2.jpg';
import imageThree from '../../images/3.jpg';
import { useNavigate } from 'react-router-dom';
import useParts from '../Hooks/useParts';
import PartsCard from '../PartsCard/PartsCard';
import Loader from '../Loader/Loader';
import Contact from '../Contact/Contact';
import ReviewSlider from '../Dashboard/Review/ReviewSlider';
import Accordion from './Accordion/Accordion';

const Home = () => {
    const [parts, setParts] = useParts();
    const partsCopy = [...parts];
    const reversedParts = partsCopy?.reverse();
    const navigate = useNavigate()
    const handlePurchase = id => {
        navigate(`/parts/${id}`)
    }
    if (!parts) {
        return <Loader></Loader>
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
                    reversedParts.slice(0, 6).map(part => <PartsCard handlePurchase={handlePurchase} part={part} key={part._id} ></PartsCard>)
                }
            </div>

            <div className='container mx-auto my-100'>
                <ReviewSlider></ReviewSlider>
            </div>

            {/* Accordion */}
            <h1 className='text-uppercase text-center text-primary text-4xl md:text-5xl mt-20 font-semibold custom-border-primary w-fit mx-auto pb-4 mb-5'>Frequently Asked Questions</h1>

            <div className='container mx-auto'>
                <Accordion title="What Kind Of Products Do You Supply?" content="We provide the best Car Parts in Bangladesh for carlovers. We can ensure that our products quality are higher than others in Bangladesh " />

                <Accordion
                    title="Do You Supply Products Outside Bangladesh?"
                    content="Yes. We supply outside Bangladesh for spreading our qualityful products internationally, so our first product is by far and away our own product, which we pride ourselves in. And the sourcing of the factories to make these and obviously the manufacturing are in the hands of JW Boston. So that's where the quality and the high-quality of this product is, and we are very, very proud of the quality of the material we use."/>

                <Accordion
                    title="Do You Supply in All Over Bangladesh?"
                    content="Yes we supply our products all over Bangladesh and are planning on all over the world, but the real win is that we do it for less than we could.Today we sold our screws for 7E and then sold them again for $3.What a steal and we even have more.The barber pole and welder are for the boy.It's a tote where we can put everything together so he doesn't have to go digging for anything he needs.It's been a great system for keeping him busy."
                />
            </div>
            <Contact>Contact Us</Contact>
        </div>
    );
};

export default Home;