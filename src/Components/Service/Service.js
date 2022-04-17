import React from 'react';
import './Service.css'

const Service = () => {
    return (
        <div className='px-4'>
            <div className='grid grid-cols-3 gap-4'>
                <div className="card flex flex-col items-center border rounded-lg shadow-md md:flex-row md:max-w-xl border-teal-800 bg-teal-600 hover:bg-teal-700">
                    <img className="p-2 object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="Byomkesh.png" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Illustration</h5>
                        <p className="mb-3 font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
                <div className="card flex flex-col items-center border rounded-lg shadow-md md:flex-row md:max-w-xl border-teal-800 bg-teal-600 hover:bg-teal-700">
                    <img className="p-2 object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="img4.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sketch</h5>
                        <p className="mb-3 font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
                <div className="card flex flex-col items-center border rounded-lg shadow-md md:flex-row md:max-w-xl border-teal-800 bg-teal-600 hover:bg-teal-700">
                    <img className="p-2 object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="img5.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Painting</h5>
                        <p className="mb-3 font-normal text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;