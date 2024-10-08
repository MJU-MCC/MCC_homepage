import React from 'react';
import '../styles/intro.scss'
import com from '../assets/images/computer.png'
const Intro = () => {
    return (
        <div className='intro_container'>
            <h1>오랜 역사와 전통을 자랑하는<br/>
                    Myongji Computer Club<br/>
                    M.C.C 와 함께 하실래요?
            </h1> <br/><br/>
            <h3>
                    컴퓨터를 좋아하는 학생이라면,<br/>
                    컴퓨터와 관련된 직무를 희망하는 사람이라면,<br/>
                    누구나 즐길 수 있는 동아리입니다.  
            </h3>
            <div className='computer_img'>
                    <img src={com}></img>
            </div>
        </div>
    );
};

export default Intro;