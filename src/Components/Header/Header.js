import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='flex flex-row justify-center gap-4 mt-6 mb-12 font-medium'>
            <CustomLink to="/"></CustomLink>
            <CustomLink to="/home"><span>HOME</span></CustomLink>
            <CustomLink to="/banner"><span>BANNER</span></CustomLink>
            <CustomLink to="/service"><span>SERVICES</span></CustomLink>
            <CustomLink to="/blogs"><span>BLOGS</span></CustomLink>
        </nav>
    );
};

export default Header;