import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slideOne from '../../images/slide1.jpg';
import slideTwo from '../../images/slide2.jpg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
               <SwiperSlide>
                    <div className="image-slide-bgTwo flex flex-col items-center justify-center">
                        <h1 className="text-2xl px-2 md:px-0 md:text-4xl font-bold text-white text-center mb-8">CarParts</h1>
                        <h1 className="text-3xl px-2 md:px-0 md:text-6xl font-bold text-white text-center">Pick your needed Parts</h1>
                        <h1 className="text-3xl px-2 md:px-0 md:text-6xl font-bold text-white text-center mt-5">for your favourite car</h1>
                    </div>
                </SwiperSlide>
               <SwiperSlide>
                    <div className="image-slide-bgTwo flex flex-col items-center justify-center">
                        <h1 className="text-2xl px-2 md:px-0 md:text-4xl font-bold text-white text-center mb-8">CarParts</h1>
                        <h1 className="text-3xl px-2 md:px-0 md:text-6xl font-bold text-white text-center">Here we are</h1>
                        <h1 className="text-3xl px-2 md:px-0 md:text-6xl font-bold text-white text-center mt-5">to serve your needed car parts</h1>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}
