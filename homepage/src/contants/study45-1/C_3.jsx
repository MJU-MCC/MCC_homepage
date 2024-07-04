import React from 'react';
import Img from '../study45-1/image/c_3.png'
import '../study45-1/style/c_3.scss'

const C_3 = ({setModalOpen}) => {
    const closeModal=()=>{
        setModalOpen(false);
    }
    return (
        <div className='c_3'>
        <div>
            <img src={Img} alt='img'></img>
        </div>
        <div className='ex'>
            <div>
                <button className='close' onClick={closeModal}>X</button>
            </div>
            <div className='ex1'>
                <h1>C(3)</h1>
                <p>팀장: 이주원</p>
                <p>저희 스터디는 c언어를 처음 접하는 사람들이 많아서 개념을 위주로 공부했습니다. <br/>
                문자 출력만 하던 저희가 알고리즘을 생각하고 문제를 풀면서 실력들이 많이 올라갔습니다.최근에 이차원배열관련 문제를 풀면서 성장한 저희를 되돌아 볼 수 있었습니다!
                </p>
            </div>
            <div className='talk'>
                <div id='l' style={{height:'80px'}}><p>나현오: 코딩을 처음 시작했던 저에게 유익했던 한 학기였고 발전한거 같아서 기쁩니다</p></div>
                <div id='r' style={{marginBottom:'1vw'}}><p>장우혁: 한 학기동안 진행된 C언어 스터디를 통해 학교 수업만으로는 부족했거나, 완전히 이해하지 못했던 부분들을 채워나갈 수 있어서 좋았습니다.</p></div>
                <div id='r'><p>장우혁: 그리고 무엇보다도 스터디원끼리 협업하여 같이 의견을 교환하면서 C 라는 언어에 대해 더 깊게 공부할 수 있었다는 점이 가장 도움이 된 것 같습니다.</p></div>
                <div id='l' style={{height:'80px'}}><p>이주원: C언어 스터디를 통해서 기본 수업에서 부족히던 점을 보완 할 수 있어서 좋았고그 개념에 관한 문제를 다양하게 풀 수 있는 기회가 있어서 좋았습니다</p></div>
                <div id='r' style={{height:'80px'}}><p>최인성: C언어 스터디를 통해 C언어를 기본부터 차근차근 공부해볼수 있었고 프로그래밍 실력이 향상되어 다른 언어를 배울때도 큰 도움이 될것같습니다</p></div>
                <div id='l' style={{height:'70px'}}><p>김민석: C언어에 대한 지식을 많이 쌓을수 있어서 좋았던거 같습니다</p></div>


            </div>
        </div>
    </div>
    );
};

export default C_3;