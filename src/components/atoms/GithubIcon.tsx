import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import style from '../../styles/UserIcon.module.css';

const UserIcon: React.FC = () => {
  return <AiFillGithub className={style.usercircle_icon} />;
};

export default UserIcon;
