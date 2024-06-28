import React from 'react';
import '../styles/about.scss'
const About = () => {
    return (
        <div className='about_container'>
            <div className='circle'>
                <h2>Since</h2>
                <p>1980</p>
            </div>
            <div className='circle'>
                <h2>Member</h2>
                <p>2000+</p>
            </div>
            <div className='circle'>
                <h2>Project</h2>
                <p>+</p>
            </div>
        </div>
    );
};

export default About;