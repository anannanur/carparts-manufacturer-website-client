import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Modal from '../Modal';
import PartCard from './PartCard';
import Loader from '../../Loader/Loader';

const ManageParts = () => {
    const [modal, setModal] = useState({})
    const { data: allParts, isLoading, refetch } = useQuery('allParts', () => fetch(`https://vast-journey-16295.herokuapp.com/parts`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loader></Loader>
    }

    const partsDelete = (id) => {


        fetch(`https://vast-journey-16295.herokuapp.com/parts/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch()
                    setModal({})
                    toast.success('Product delete successfully')
                }
            })

    }

    return (
        <div>
            {allParts?.length ? <h1 className='font-bold text-2xl sp-style text-green-600 mt-10'>Here is the {allParts?.length} {allParts?.length === 1 ? 'Part' : 'Parts'}:-</h1> : <h1 className='font-bold text-2xl sp-style text-red-700 mt-10'>No part here. Add Some Parts</h1>}

            {
                modal?._id && <Modal
                    modal={modal}
                    setModal={setModal}
                    sendEvent={partsDelete}


                ></Modal>
            }
            <div className=" mt-10 mb-10">
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Stock</th>
                            <th>Minimum-Order</th>
                            <th>Details</th>
                            <th colSpan='2'>Manage</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            allParts?.map((o, index) => <PartCard
                                key={o._id}
                                o={o}
                                index={index}
                                refetch={refetch}
                                sendEvent={partsDelete}
                                setModal={setModal}
                            ></PartCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageParts;