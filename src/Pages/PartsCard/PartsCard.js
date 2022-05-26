import React from 'react';

const PartsCard = ({ part, handlePurchase }) => {
    const { image, name, availableQuantity, price, details, minOrderQuantity } = part;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <p>Price: ${price}</p>
                <p>Stock: {availableQuantity}</p>
                <div className="card-actions justify-end mb-5">
                    <button className="btn btn-primary w-full text-white">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default PartsCard;