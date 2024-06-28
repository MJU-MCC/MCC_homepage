import React, { useEffect } from 'react';
import Header from './Header';
import '../styles/main.scss'
import Intro from './Intro';
import Navbar from './Navbar';
import About from './About';
import Study from './Study';
import Photos from './Photos';
const Main = () => {
    useEffect(()=>{      
    },[])
    return (
        <div>
            <Intro/>
            <About/>
            <Study/>
            <Photos/>
        </div>
    );
};

export default Main;