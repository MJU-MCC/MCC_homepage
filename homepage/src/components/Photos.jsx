import React, { useEffect, useState } from 'react';
import '../styles/photos.scss'
import {Photo} from '../contants/SlidePhotos'
const Photos = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Photo.length);
        },5000); // 2초마다 사진 변경
        return () => clearInterval(interval);
    }, []);

    const getPhotoIndex = (index) => {
        return index % Photo.length;
    };
    return (
        <div className='photos_container'>
            <div className='show'>
                {
                    Photo.map((d,index)=>
                    <div className='index' key={index}>
                        <img src={Photo[getPhotoIndex(currentIndex + index+1)]} alt={`slide-${currentIndex}`}></img>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default Photos;