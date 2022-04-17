import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='mt-12 bg-blue-200'>
            <footer className='text-center'>
                <p className='text-2xl pt-4 font-semibold text-white'>The HijiBiji Canvas</p>
                <div className="pt-2 pb-2">
                    <a className='social px-2 text-2xl' href="https://www.facebook.com/dHJBJcanvas"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                    <a className='social px-2 text-2xl' href="https://www.instagram.com/thehijibijicanvas/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                </div>
                <p className='pb-4 text-xs text-black'>&copy; By The HijiBiji Canvas 2022</p>
            </footer>
        </div>
    );
};

export default Footer;