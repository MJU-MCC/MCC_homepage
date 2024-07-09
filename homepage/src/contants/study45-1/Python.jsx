import React from 'react';
import Img from '../study45-1/image/python.png'
import '../study45-1/style/c_3.scss'

const Python = ({setModalOpen}) => {
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
                <h1>Python</h1>
                <p>팀장: 최승훈</p>
                <p>저희 스터디 순대팀은 전원 출석을 목표로 파이썬에 가장 기본적인 것부터 클래스 구문까지 보는 것이 목표였습니다 !<br/>
                정~~말 아쉽게도 클래스까진 못가게되었지만 클래스에 거의 근접하는 예외처리 부분까지 한학기동안 학습할 수 있었고 아마 스터디 조 통틀어서 가장 아웃이 적게 발생한 스터디팀일거에요 ㅎㅎ<br/>
                대부분 파이썬을 아예 처음 시작하는 친구들이 많았는데 이젠 백준 문제도 조금씩 건드려볼 수 있는 실력까지 올라왔습니다 !<br/>
                다들 열심히 따라와주신 여러분들 덕분이라고 생각하고 2학기때도 파이썬 스터디가 열린다면 진도를 이어나가볼려고 해요 많관부:)
                </p>
            </div>
            <div className='talk'>
                <div id='l' style={{height:'80px'}}><p>현지: 파이썬을 배우고싶었는데 12주동안 팀원들이랑 꾸준히 스터디 해왔던것에 뿌듯해요!</p></div>
                <div id='r' style={{height:'100px'}}><p>승훈: 스터디원들을 이끌어서 목표했던 것들을 끝까지 마무리할 수 있어 너무 뿌듯했고 다들 너무 착하고 열심히해주셔서 감사합니다열심히 따라와주시느라 고생 많으셨어요 :)</p></div>
                <div id='l' style={{height:'100px'}}><p>재연: 스터디를 통해 처음 코딩을 시작한 저에게  조원들과 함께 꾸준히 배우고 문제를 해결하면서 도움을 받을 수 있어 좋았구 다 같이 성장할 수 있어 감사한 시간이였습니다.</p></div>
                <div id='r' style={{height:'60px'}}><p>소연: 스터디분들과 함께라서 공부할 수 있었습니다! 감사합니다</p></div>
            </div>
        </div>
    </div>
    );
};

export default Python;