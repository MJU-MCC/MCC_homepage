import React from 'react';
import Img from '../study45-1/image/c_1.png'
import '../study45-1/style/java.scss'

const C_1 = ({setModalOpen}) => {
    const closeModal=()=>{
        setModalOpen(false);
    }
    return (
        <div className='java'>
        <div>
            <img src={Img} alt='img'></img>
        </div>
        <div className='ex'>
            <div>
                <button className='close' onClick={closeModal}>X</button>
            </div>
            <div className='ex1'>
                <h1>C(1)</h1>
                <p>팀장: 김민서</p>
                <p>저희 스터디 2팀은 백준을 통해서 각자 공부하고 모르는 부분을 서로 상의하면서 c언어의 기본을 배웠습니다.<br/>
                C언어의 첫 시작인 사칙연산부터 시작해서 전부 다 배우지는 못했지만 정렬까지 서로 도우면서 같이 공부하면서 c언어에 대해서 알게 되었습니다.
                </p>
            </div>
            <div className='talk'>
                <div id='l'><p>조기백: 팀원들과 함께 c언어를 하면서 다양한 방법으로 코딩을 해서 문제를 풀 수 있어서 즐거웠습니다</p></div>
                <div id='r' style={{marginBottom:"1vw"}}><p>박정웅: 팀원들과 함께 스터디를 하며 막히는 부분을 실시간으로 질문하고 피드백 받을 수 있어 혼자서 할 때보다 더 빨리 진도를 나갈 수 있었습니다.</p></div>
                <div id='r' ><p>박정웅: 그리고 다른 팀원이 막히는 부분을 알려주는 과정에서도 내가 제대로 알고 있는지 되짚어 볼 수 있는 기회가 되어 많은 도움이 되었던 것 같습니다.</p></div>
                <div id='l' style={{height:'70px'}}><p>함동현: 한학기동안 c언어와 다양한 알고리즘에 대해 공부하면서 좋은경험을 한것같아 좋았던 기회같습니다</p></div>
                <div id='r' style={{height:'50px'}}><p>김민경: 한 학기 동안 함께 C언어 배울 수 있어서 즐거웠어요!</p></div>
                <div id='l' style={{height:'50px'}}> <p>김민서: c언어는 처음이였지만 이번에 동아리에서 서로 상의하면서 배울 수 있어서 즐거웠습니다!</p></div>
            </div>
        </div>
    </div>
    );
};

export default C_1;