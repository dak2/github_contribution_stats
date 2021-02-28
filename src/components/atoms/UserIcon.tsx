import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import style from '../../styles/UserIcon.module.css';

const UserIcon: React.FC = () => {
  return <BiUserCircle className={style.usercircle_icon} />;
};

export default UserIcon;
