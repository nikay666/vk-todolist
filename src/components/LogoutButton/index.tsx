import React from 'react';
import { Link } from 'react-router-dom';

import { Icon24DoorArrowRightOutline } from '@vkontakte/icons';
import { PanelHeaderButton } from '@vkontakte/vkui';

import style from './index.module.css';

const LogoutButton = () => {
  return (
    <PanelHeaderButton className={style.root}>
      <Link to="/login" className={style.link}>
        <Icon24DoorArrowRightOutline />
      </Link>
    </PanelHeaderButton>
  );
};

export default LogoutButton;
