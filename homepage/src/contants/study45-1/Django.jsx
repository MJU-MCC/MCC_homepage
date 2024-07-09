import React from 'react';
import Img from '../study45-1/image/jango.png'
import '../study45-1/style/c.scss'

const Django = ({setModalOpen}) => {
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
                <h1>Django</h1>
                <p>팀장: 이종윤</p>
                <p>스터디 7팀은 DJango 프레임워크를 공부하였습니다.<br/>
                Django를 사용하는 인스타그램을 만들어보며 게시물, 댓글, 좋아요, 해시태그 기능을 구현해 보았습니다. 또한 백엔드와 관련된 SQLD도 같이 공부하여 시험도 치뤘으며 DJango와 머신러닝, 정보보안 수업과 연관지어 만들어보며 성취도를 높여갔습니다.
                </p>
            </div>
            <div className='talk'>
                <div id='l' style={{marginBottom:"1vw"}}><p>이종윤 : 이번 스터디를 해보며 한 달 만에 백준 골드를 달성하게 되면서 코딩 실력을 키워나갈 수 있었고,</p></div>
                <div id='l' ><p>이종윤 : 조원과 같이 열심히 해보면서 결과물을 결국 만들어낼 수 있어서 좋았던 공부였습니다.</p></div>
                <div id='r' style={{marginBottom:"1vw"}}><p>이윤태 : 파이썬 기초만 알고 대책 없이 시작한 스터디였지만, 조장님의 도움으로 단기간에 폭풍 성장할 수 있었던 계기가 되었습니다.</p></div>
                <div id='r'><p>이윤태 : SQLD라는 자격증에 응시하고, Django 뿐만 아닌 다양한 지식을 얻어갈 수 있는 뜻깊은 시간이었습니다. 제 진로를 찾아가는 과정에 많은 도움이 되었습니다.</p></div>
            </div>
        </div>
    </div>
    );
};

export default Django;