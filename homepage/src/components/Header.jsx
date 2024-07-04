import React from 'react';
import Logo from '../assets/images/logo.png'
import '../styles/header.scss'
import {Link} from 'react-router-dom'
const Header = () => {
    
    return (
        <div className='header_container'>
            <a href='/'><img src={Logo} alt='Logo'></img></a>
            <div>
            <Link className='navMenu' to={'/about'}>About</Link>
            <Link className='navMenu' to={'/study'}>Study</Link>
            <Link className='navMenu' to={'/project'}>Project</Link>
            </div>
            <div className='apply'>
                <p>지원하기</p>
            </div>
        </div>
    );
};

export default Header;