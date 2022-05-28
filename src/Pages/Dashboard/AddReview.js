import React, { useState } from 'react';
import StarRating from './Review/StarRating';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const [customRating, setCustomRating] = useState(0);
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmitReview = data => {
        const userReview = {
            customRating,
            review: data.review,
            user
        }
        fetch('https://vast-journey-16295.herokuapp.com/reviews/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(res => {
                toast.success('Thanks for your feedback')
                reset()
            }
            );

    }
    return (
        <div className='text-center mt-10 md:mt-0'>
            <h1 className='text-green-600'>Please add a review</h1>
            <StarRating setCustomRating={setCustomRating}></StarRating>
            <form onSubmit={handleSubmit(onSubmitReview)}>
                <textarea className="textarea textarea-bordered w-4/5 md:w-1/2" placeholder="Your Review"
                    {...register("review", { required: true })}
                ></textarea>
                <div className='text-center'>
                    <input type="submit" className='btn mt-5 text-white btn-primary mx-auto w-32 ' />
                </div>
            </form>
        </div>
    );
};

export default AddReview;