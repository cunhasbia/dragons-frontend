import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { FaUserCircle, FaPowerOff } from 'react-icons/fa';

import { userLogout } from '../../store/login/action';

import './styles.scss';

export default function AvatarUser() {
  const [dropMenu, setDropMenu] = useState(false);
  
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    setDropMenu(!dropMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('userLogged');
    dispatch(userLogout());

    history.push('/');
  };

  return (
    <div className="avatarContainer">
      <span className="avatarIcon" onClick={handleClick}>
        <FaUserCircle size={38} />

        <div className={`logout ${dropMenu ? 'dropMenu' : ''}`} onClick={handleLogout}>
          <p>
            <FaPowerOff />
            <span>Log out</span>
          </p>
        </div>
      </span>
    </div>
  );
};