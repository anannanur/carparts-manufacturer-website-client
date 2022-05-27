import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import usePart from '../../Hooks/usePart';

const UpdatePart = () => {
    const { id } = useParams()
    const { prt } = usePart(id)

    const { register, handleSubmit, watch, formState: { errors }, trigger, reset } = useForm();


    const imageStorageKey = `4b0a4156f27bb356d5555093fcb99319`

    const handleAddProduct = async (data, e) => {
        const image = data.image[0]
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        const formData = new FormData();
        formData.append('image', image);
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    console.log(img, 'img-url');
                    const parts = {
                        name: data.name,
                        price: data.price,
                        availableQuantity: data.availableQuantity,
                        minOrderQuantity: data.minOrderQuantity,
                        details: data.details,
                        image: img
                    }
                    //send data to db
                    fetch(`http://localhost:9000/parts/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(parts)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted, 'inser');

                            if (inserted.modifiedCount > 0) {
                                toast.success(`Part Updated SuccessFully`);

                                e.target.reset()
                            }
                            else {
                                toast.error('Failed to add a part')
                            }
                        }


                        )
                }

                console.log('imgbb', result);
            })


    }
    return (
        <>
            <h1 className='mt-10 text-3xl text-center text-cyan-700 sp-style'>Update Your Product</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 m-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                    <figure><img src={prt.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{prt.name}</h2>
                        <p>{prt.details}</p>
                        <p>Price: ${prt.price}</p>
                        <p>Stock: {prt.availableQuantity}</p>
                        <p>Minimum Order: {prt.minOrderQuantity}</p>

                    </div>
                </div>

                <form className='m-5' onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="product Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {

                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="price"
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'price is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">AvailableQuantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="availableQuantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'availableQuantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">MinOrderQuantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="availableQuantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("minOrderQuantity", {
                                required: {
                                    value: true,
                                    message: 'minOrderQuantity is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <textarea
                            row={5} col={20}
                            type="number"
                            placeholder="details"
                            className="input input-bordered w-full max-w-xs"
                            {...register("details", {
                                required: {
                                    value: true,
                                    message: 'details is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full max-w-xs text-white bg-cyan-700' type="submit" value="Update" />
                </form>
            </div>
        </>

    );
};

export default UpdatePart;