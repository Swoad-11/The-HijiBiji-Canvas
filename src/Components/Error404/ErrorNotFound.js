import React from 'react';
import error from '../../images/error.jpg'

const ErrorNotFound = () => {
    return (
        <div>
            <div className='col-md-6 mx-auto'>
                <img src={error} alt="" />
            </div>
        </div>
    );
};

export default ErrorNotFound;