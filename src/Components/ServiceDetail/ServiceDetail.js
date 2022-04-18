import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center'>Service Detail: </h2>
            <p>We will provide our best effort to give you the best items for all type of services mentioned.</p>
            <div className='text-center'>
                <Link to="/checkout">
                    <button style={{ width: '18rem' }} className='btn btn-text btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;