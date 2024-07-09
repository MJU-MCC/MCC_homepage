import React, { useEffect, useState } from 'react';
import '../styles/projectPage.scss'
import run from '../assets/images/run.png'
import run2 from '../assets/images/run2.png'

const Project = () => {
    const [curImage, setCurImage]=useState(run);
    useEffect(()=>{
        const images=[run,run2]
        let index=0;
        const interval=setInterval(()=>{
            index=(index+1)%images.length
            setCurImage(images[index]);
        },1000)
        return ()=>clearInterval(interval)
    },[])
    return (
        <div className='project_container'>
            <p>COMING SOON</p>
            <img src={curImage} alt='run'></img>
        </div>
    );
};

export default Project;