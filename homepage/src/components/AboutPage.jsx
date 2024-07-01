import React, { useEffect } from 'react';
import '../styles/aboutPage.scss'
import Jiwon from '../assets/images/jiwon.PNG'
import Sh from '../assets/images/sh.PNG'
import Coco from '../assets/images/coconut.PNG'
import Iy from '../assets/images/iy.PNG'
import Seh from '../assets/images/seh.PNG'
import Hs from '../assets/images/hs.PNG'
import Yhs from '../assets/images/yhs.PNG'
import Jw from '../assets/images/jw.PNG'
const AboutPage = () => {
    return (
        <div className='abouts_container'>
            <div className='since'>
                <h2>since</h2>
                <p>M.C.C는 1980년대 1기를 시작으로,<br/>
                    현재 45기~ing 유서 깊은 동아리</p>
            </div>
            <div className='what'>
                <h2>what</h2>
                <p>기초부터 차근차근 공부하는 study<br/>
                기획부터 배포까지 경험 가능한 project<br/>
                다양한 사람들과의 communication
                </p>
            </div>
            <div className='since'>
                <h2>how</h2>
                <p>각 파트별로 모집 후,<br/>
                    M.C.C 자체 워크북을 이용해서 체계적으로 관리</p>
            </div>
            <div className='what'>
                <h2>why</h2>
                <p>유일한 명지대 컴퓨터 관련 중앙동아리!<br/>
                다양한 과에 속한 사람들과의 networking<br/>
                부담없이 내가 원하는 분야를 공부
                </p>
            </div>
            <div className='management'>
                <h1>Management</h1>
                <p>45기 운영진</p>
                <div className='flex-item'>
                    <div className='item'>
                        <img src={Hs} alt='hs'></img>
                        <p id='role'>회장</p>
                        <p id='name'>김현성</p>
                        <p id='role'>명지대학교 컴퓨터공학과</p>
                    </div>
                    <div className='item'>
                        <img src={Jiwon} alt='jiwon'></img>
                        <p id='role'>부회장</p>
                        <p id='name'>최지원</p>
                        <p id='role'>명지대학교 컴퓨터공학과</p>
                    </div>
                </div>
                <div className='grid-container'>
                    <div className='grid-item'>
                        <img src={Sh} alt='sh'></img>
                        <p id='role'>기획부</p>
                        <p id='name'>최승훈</p>
                        <p id='role'>명지대학교 전자공학과</p>
                    </div>
                    <div className='grid-item'>
                        <img src={Coco} alt='coco'></img>
                        <p id='role'>학습부</p>
                        <p id='name'>고건혁</p>
                        <p id='role'>명지대학교 컴퓨터공학과</p>
                    </div>
                    <div className='grid-item'>
                        <img src={Iy} alt='iy'></img>
                        <p id='role'>홍보부</p>
                        <p id='name'>박인영</p>
                        <p id='role'>명지대학교 정보통신공학과</p>
                    </div>
                    <div className='grid-item'>
                        <img src={Seh} alt='seh'></img>
                        <p id='role'>디자인부</p>
                        <p id='name'>방세현</p>
                        <p id='role'>명지대학교 정보통신공학과</p>
                    </div>
                    <div className='grid-item'>
                        <img src={Yhs} alt='hy'></img>
                        <p id='role'>사무부</p>
                        <p id='name'>윤현선</p>
                        <p id='role'>명지대학교 컴퓨터공학과</p>
                    </div>
                    <div className='grid-item'>
                        <img src={Jw} alt='jw'></img>
                        <p id='role'>차기회장</p>
                        <p id='name'>이정우</p>
                        <p id='role'>명지대학교 전자공학과</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutPage;