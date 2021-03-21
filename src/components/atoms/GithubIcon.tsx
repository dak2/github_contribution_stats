import React from 'react';
import { FiGithub } from 'react-icons/fi';
import style from '../../styles/UserIcon.module.css';

const UserIcon: React.FC = () => {
  return <FiGithub className={style.usercircle_icon} />;
};

export default UserIcon;
