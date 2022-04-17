import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div>
            <section>
                <div className='grid grid-cols-2 items-center text-center justify-items-start'>
                    <img className='mx-auto' src="hijibiji1.png" alt="" />
                    <div className='mr-24'>
                        <h1 className='text-6xl font-bold'>The HijiBiji Canvas</h1>
                        <p className='text-2xl'>
                            Here you will find digital illustrations, pencil sketches,canvas paintings and more!
                        </p>
                        <button className="px-4 py-2 font-semibold text-sm text-white bg-amber-600 hover:bg-amber-700 rounded-lg mt-4">
                            <Link to="/service">Our Services</Link>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;