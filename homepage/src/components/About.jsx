import React from 'react';
import '../styles/about.scss'
const About = () => {
    return (
        <div className='about_container'>
            <div className='circle'>
                <p id='about_title'>Since</p>
                <p id='about_con'>1980</p>
            </div>
            <div className='circle'>
                <p id='about_title'>Member</p>
                <p id='about_con'>2000+</p>
            </div>
            <div className='circle'>
                <p id='about_title'>Project</p>
                <p id='about_con'>+</p>
            </div>
        </div>
    );
};

export default About;