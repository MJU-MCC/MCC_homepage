import React from 'react';
import './style/java.scss'
import Img from './image/java.jpg'

const Java = ({setModalOpen}) => {
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
                    <h1>JAVA</h1>
                    <p>팀장: 윤현선</p>
                    <p>'자바의 정석'을 기반으로 스터디를 진행하였으며, 추가적으로 모던자바와 Stream API에 대해 공부하였습니다.<br/>
                    매 주차 파트 별 내용 정리 및 예시 코드를 작성 해온 뒤 발표 형식으로 진행하였습니다.<br/> 
                    수시로 백준 문제 풀이를 하며 막연한 이론 공부가 아닌, 코드에 적 용해보는 연습을 했습니다.<br/> 
                    마지막 스터디에서는 그 동안 배운 개념들을 기반으로 각자 자유롭게 코드를 작성해온 뒤 코드 리뷰로 스터디를 마무리하였습니다.
                    </p>
                </div>
                <div className='talk'>
                    <div id='l'><p>김주연 : Java에 대해서 이해할 수 있어서 좋았습니다.😊</p></div>
                    <div id='r'><p>김연수 : 자바 스터디에서 배운 스트림을 캡스톤에서도 써먹을 수 있었습니다. 알차고 JAVA의 개념에 대해 전반적으로 훑을 수 있었 던 좋은 스터디였슴둥🤠</p></div>
                    <div id='l' style={{height:'50px'}}><p>박인영: 결국 우린 해냈다 ♥︎</p></div>
                    <div id='r' style={{height:'50px'}}><p>이주영 : 자바 조오았다~~~~~!!</p></div>
                    <div id='l' style={{height:'50px'}}> <p>한종석 : 한학기동안 열심히 공부해서 자바버렸다.👊</p></div>
                    <div id='l' style={{height:'50px', marginTop:'10px'}}> <p>윤현선 : JAVA 자봤다😛</p></div>

                    

                    
                </div>
            </div>
        </div>
    );
};

export default Java;