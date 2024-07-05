import '../styles/photos.scss'
import {Photo} from '../contants/SlidePhotos'
import { useEffect, useState } from 'react';
const Photos = () => {
    const [photo,setPhoto]=useState([]);
    useEffect(()=>{
        const newPhotos=[];
        for(let i=0; i<100;i++){
            newPhotos.push(...Photo)
        }
        setPhoto(newPhotos);
    },[])
    return (
        <div className='photos_container'>
            <div className='show'>
                {
                    photo.map((src,index) => (
                        <div className='index'>
                            <img src={src} alt={`slide:${index}`} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Photos;