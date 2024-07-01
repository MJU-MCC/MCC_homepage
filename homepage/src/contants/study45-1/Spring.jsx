import React from 'react';
import Img from '../study45-1/image/spring.png'
import '../study45-1/style/c_3.scss'

const Spring = ({setModalOpen}) => {
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
                <h1>Spring</h1>
                <p>팀장: 신예림</p>
                <p>저희 스터디는 백엔드 입문을 위한 자바 언어 기반 스프링 스터디입니다. 스프링 부트 활용을 위한 기초 과정을 전체적으로 학습했습니다.<br/> 
                    진도를 빠르게 나가면서 이해되지 않았던 내용들은 시험 기간 동안 꾸준히 복습했습니다. <br/>
                    그 결과, 모든 팀원이 스프링 부트의 기본 동작 원리에 대해 습득한 상태입니다.
                </p>
            </div>
            <div className='talk'>
                <div id='l' style={{height:'80px'}}><p>신동걸: 이번 스터디를 통해서 처음 알게 된 내용, 다시 생각해보게 된 내용이 많이 생겨서 좋았습니다!</p></div>
                <div id='r' style={{height:'100px'}}><p>신예림: 새로운 학습 분야를 스터디원분들과 같이 공부하며 나눌 수 있어 더 알찬 학습이었다 생각합니다. 학기 중 흐트러짐 없이 계속 공부하게 된 동기가 됐다고 생각합니다</p></div>
                <div id='l' style={{height:'80px'}}><p>윤태우: 한학기동안 스터디활동을 하며 내 부족한점을 채울수 있어 너무 뜻깊은 활동이었습니다.</p></div>
                <div id='r' style={{height:'80px'}}><p>조수연: 한 학기동안 스터디하면서 정말 도움되고 즐거웠습니다. 앞으로도 저희 스터디원들 뿐만 아니라 모든 동아리원들의 발전을 기원합니다.</p></div>
            </div>
        </div>
    </div>
    );
};

export default Spring;