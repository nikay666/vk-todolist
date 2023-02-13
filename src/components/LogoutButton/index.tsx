import React from 'react';
import { Link } from 'react-router-dom';

import { Icon24DoorArrowRightOutline } from '@vkontakte/icons';
import { PanelHeaderButton } from '@vkontakte/vkui';

import style from './index.module.css';
import { getAuth } from 'firebase/auth';

const LogoutButton = () => {
  const auth = getAuth();

  const clickHandler = () => {
    auth.signOut()
  };

  return (
    <PanelHeaderButton aria-label='Выход' className={style.root} onClick={clickHandler}>
      <Link to="/login" className={style.link}>
        <Icon24DoorArrowRightOutline />
      </Link>
    </PanelHeaderButton>
  );
};

export default LogoutButton;
