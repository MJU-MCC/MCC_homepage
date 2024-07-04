import React from 'react';
import Img from '../study45-1/image/c_2.png'
import '../study45-1/style/c.scss'
const C_2 = ({setModalOpen}) => {
    const closeModal=()=>{
        setModalOpen(false);
    }
    return (
        <div className='c'>
        <div>
            <img src={Img} alt='img'></img>
        </div>
        <div className='ex'>
            <div>
                <button className='close' onClick={closeModal}>X</button>
            </div>
            <div className='ex1'>
                <h1>C(2)</h1>
                <p>팀장: 이정우</p>
                <p>안녕하세요. MCC C언어 스터디 3팀입니다. 저희는 C언어의 기초를 확실히 익히고 상위 문법까지 익히는 것을 목표로 한 팀입니다. <br/>
                    저희는 '코딩 도장'라는 사이트를 통하여 학습했습니다. 약 12주 간의 스터디 끝에 저희는 동적 메모리까지 사용하는 능력을 배양했습니다.
                </p>
            </div>
            <div className='talk'>
                <div id='l' style={{marginBottom:"1vw"}}><p>이정우: 한 학기 동안 C언어 스터디를 하며 많은 내용을 가르쳤습니다. 여러 개념을 가르치다 보니 "당연히 할 줄 안다"라는 것이 얼마나 위험한 것인지 알게되었습니다.</p></div>
                <div id='l'><p>이정우: 또한, 그간 암기하여 사용한 문법들을 더 심층적으로 이해할 수 있게 된 계기가 되어서 좋았습니다.</p></div>
                
                <div id='r' style={{marginBottom:'1vw'}}><p>유수민: 아무것도 모른채로 이 스터디를 시작했는데 지금 끝날 시점이 되니 씨언어에 대해 배운것과 이해의 폭이 넓어져서 매우 만족한다. </p></div>
                <div id='r'><p>유수민: 학교 생활을 하면서 시작하길 가장 잘했던 활동이라고 생각한다. 이 스터디에서 배운 것이 나의 밑거름이 되길 바란다. </p></div>
                
                <div id='l' style={{height:'70px'}}><p>황재연 : 이번 스터디를 통해 씨언어에 관해 많이 알아갈 수 있는 시간이어서 좋았습니다</p></div>
            </div>
        </div>
    </div>
    );
};

export default C_2;