import React from 'react';
import Img from '../assets/images/study.png'
import '../styles/study.scss'
import Link from 'react-router-dom'
const Study = () => {
    return (
        <div className='study_container'>
            <img src={Img} alr='study'></img>
            <div>
            <h1>Study 활동</h1>
            <p>
                <br/>배우고싶은 다양한 분야를<br/>
                열정있는 사람들과 Study 할수있는 기회!
            </p>
            </div>
            <a href='/study'>
                <svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vw" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
            </a>
        </div>
    );
};

export default Study;