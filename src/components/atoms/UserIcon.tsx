import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import style from '../../styles/UserIcon.module.css';

type Props = {
  avatarUrl: string;
  name: string;
  url: string;
};

const UserIcon: React.FC<Props> = (props: Props) => {
  console.log('avatar', props);
  return <BiUserCircle className={style.usercircle_icon} />;
};

export default UserIcon;
