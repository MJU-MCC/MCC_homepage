import React from 'react';
import Img from '../study45-1/image/frontend.png'
import '../study45-1/style/frontend.scss'
const Frontend = ({setModalOpen}) => {
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
                <h1>Frontend+Design</h1>
                <p>팀장: 방세현</p>
                <p>저희 아샷추는 프론트엔드 스터디와 피그마를 이용한 디자인 스터디를 같이 진행하는 스터디입니다.<br/> 
                    프론트엔드 스터디에서는 웹 개발에 기본이 되는 HTML / CSS / Java Script를 중심으로 학습하면서 사용자 인터페이스(UI)에 대한 이해도를 갖추게 되었습니다.<br/> 
                    디자인 스터디를 통해서 최종적으로 PC,모바일 등 다양한 디바이스에 맞는 디자인을 제작할 수 있는 역량을 기를 수 있었습니다.
                </p>
            </div>
            <div className='talk'>
                <div id='l'><p>이주윤: 아샷추 덕분에 한학기 정말 알차게 보낼 수 있어서 행복했습니다~~😋</p></div>
                <div id='r'><p>최경봉: 아샷추는 저에게 스터디 그 이상의 존재였던 것 같습니다.😄 정말 즐거웠고 멤버들 모두에게 감사를 표합니다👏👏👏</p></div>
                <div id='l'><p>김한솔: 스터디원들과 서로 도와주고 배우면서 함께 성장한 거 같아서 뿌듯합니닷!! 💕🤩</p></div>
                <div id='r'><p>서유경: 스터디하면서 공부뿐만 아니라 좋은 추억도 많이 쌓은 것 같아서 만족스러웠습니다</p></div>
                <div id='l'> <p>유세린: 아샷추 덕분에 소중한 인연도 만들고 더 성장할 수 있었습니다 😻🫶🏻</p></div>
                
            </div>
        </div>
    </div>
    );
};

export default Frontend;