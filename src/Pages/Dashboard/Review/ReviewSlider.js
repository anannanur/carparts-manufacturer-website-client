import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import SingleReviews from "./SingleReviews";

export default function App() {
    const [reviewes, setReviewes] = useState([]);
    const reviewesCopy = [...reviewes];
    const reversedReviewes = reviewesCopy?.reverse();
    useEffect(() => {
        fetch("http://localhost:9000/reviews/")
            .then(res => res.json())
            .then(res => {
                setReviewes(res);
            });
    }, [])
    // console.log(reviewes);
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    reversedReviewes?.map(singleReview => <SwiperSlide key={singleReview._id}>
                        <SingleReviews
                            singleReview={singleReview}
                        />

                    </SwiperSlide>)
                }

            </Swiper>
        </>
    );
}
