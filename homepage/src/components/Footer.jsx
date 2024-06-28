import React from 'react';
import '../styles/footer.scss'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='links'>
                <a href='https://www.notion.so/mjucodingclub/45-95d6016f30cf4449b35ee2f397ecc8ca?pvs=4'>Notion</a>
                <a href='https://www.instagram.com/mcc_mju/'>Instagram</a>
                <a href='https://github.com/MJU-MCC'>Github</a>
            </div>
            <div>
                <p>
                    MCC Myungji Computer Club (명지대학교 컴퓨터 동아리)<br/>
                    Copyright©2024.MCC. All rights reserved.
                </p>
            </div>

        </div>
    );
};

export default Footer;