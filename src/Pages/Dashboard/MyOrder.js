import React, {  useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import OrderCard from './OrderCard'
import { toast } from 'react-toastify';
import { useQuery } from 'react-query';
import Modal from './Modal';
import Loader from '../Loader/Loader';
const MyOrder = () => {
    const [user] = useAuthState(auth)
    const [modal, setModal] = useState({})

    const email = user?.email
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:9000/orders/${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loader></Loader>
    }

    const orderDelete = (id) => {

        fetch(`http://localhost:9000/orders/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    refetch()
                    setModal({})
                    toast.success('Order cancelled successfully')
                }
                else {
                    toast.error(`Can't Cancel the Order`)
                }
            })

    }
    return (
        <div className='px-6 md:px-0'>
            {orders?.length ? <h1 className='font-bold text-2xl sp-style text-blue-900 mt-10'>You have ordered {orders?.length} {orders?.length == 1 ? 'tool' : 'tools'} :-</h1> : <h1 className='font-bold text-2xl sp-style text-red-900 mt-10'>You Don't Have any order</h1>}
            {
                modal?._id && <Modal
                    modal={modal}
                    setModal={setModal}
                    sendEvent={orderDelete}


                ></Modal>
            }
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No.</th>
                            <th>Image</th>
                            <th>name</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>transaction id </th>
                            <th>Deliver </th>
                            <th colSpan='2'>ProCeed</th>


                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders?.map((o, index) => <OrderCard
                                key={o._id}
                                o={o}
                                index={index}
                                refetch={refetch}
                                sendEvent={orderDelete}
                                setModal={setModal}
                            ></OrderCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;