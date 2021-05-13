import React from 'react';
import { useHistory } from 'react-router';

import AvatarUser from '../AvatarUser';
import dragonLogo from '../../assets/dragon-logo.png';

import './styles.scss';

export default function Header() {
    const history = useHistory();

    const handleClickToHome = () => {
        history.push('/home');
    }

    return (
        <div className="headerContainer animateDown">
            <div className="headerContent">
                <div className="headerStart">
                    <h1 onClick={handleClickToHome}>
                        <img src={dragonLogo} alt="dragon logo" />
                        Dragons App
                    </h1>
                    <p>Welcome, Admin!</p>
                </div>

                <div className="headerEnd">
                    <AvatarUser />
                </div>
            </div>
        </div>
    );
}