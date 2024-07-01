import React, { useState } from 'react';
import '../styles/studyPage.scss'
import Key from '../assets/images/keyboard.PNG'
import { Link } from 'react-router-dom';
import Java from '../contants/study45-1/Java';
import Frontend from '../contants/study45-1/Frontend';
import C_1 from '../contants/study45-1/C_1';
import C_2 from '../contants/study45-1/C_2';
import C_3 from '../contants/study45-1/C_3';
import Python from '../contants/study45-1/Python';
import Spring from '../contants/study45-1/Spring';
import Django from '../contants/study45-1/Django';
const StudyPage = () => {
    const [modalOpen, setModalOpen]=useState(false);
    const [selectedItem, setSelectedItem]=useState(null);
    const showModal=(item)=>{
        setSelectedItem(item);
        setModalOpen(true);
    }
    return (
        <div className='study'>
            <div className='study_activity'>
                <img src={Key} alt='logo'></img>
                <h1>Study Activity</h1>
            </div>
            <div className='title'>
                <h5>45기-1학기</h5>
            </div>
            <div className='grid_container'>
                <div className='grid_item'>
                    <p onClick={()=>showModal('JAVA')}>JAVA</p>
                    {modalOpen&&selectedItem==='JAVA'&&<Java setModalOpen={setModalOpen}/>}
                </div>
                <div className='grid_item'>
                    <p onClick={()=>showModal('Frontend')}>Frontend+Design</p>
                    {modalOpen&&selectedItem==='Frontend'&&<Frontend setModalOpen={setModalOpen}/>}
                </div>
                <div className='grid_item'>
                    <p onClick={()=>showModal('C_1')}>C(1)</p>
                    {modalOpen&&selectedItem==='C_1'&&<C_1 setModalOpen={setModalOpen}/>}
                </div>
                <div className='grid_item'>
                    <p onClick={()=>showModal('C_2')}>C(2)</p>
                    {modalOpen&&selectedItem==='C_2'&&<C_2 setModalOpen={setModalOpen}/>}
                </div>
                <div className='grid_item'>
                    <p onClick={()=>showModal('C_3')}>C(3)</p>
                    {modalOpen&&selectedItem==='C_3'&&<C_3 setModalOpen={setModalOpen}/>}
                </div>
                
                <div className='grid_item'>
                    <p onClick={()=>showModal('Python')}>Python</p>
                    {modalOpen&&selectedItem==='Python'&&<Python setModalOpen={setModalOpen}/>}
                </div>
                <div className='grid_item'>
                    <p onClick={()=>showModal('Spring')}>Spring</p>
                    {modalOpen&&selectedItem==='Spring'&&<Spring setModalOpen={setModalOpen}/>}
                </div>
                <div className='grid_item'>
                    <p onClick={()=>showModal('Django')}>Django</p>
                    {modalOpen&&selectedItem==='Django'&&<Django setModalOpen={setModalOpen}/>}
                </div>
            </div>
        </div>
    );
};

export default StudyPage;