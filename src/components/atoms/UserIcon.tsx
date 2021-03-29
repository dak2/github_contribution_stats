import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import style from '../../styles/UserIcon.module.css';
import { User } from '../../utils/propsType';

type Props = {
  avatarUrl: User['avatar_url'];
  name: User['login'];
  url: User['url'];
};

const UserIcon: React.FC<Props> = (props: Props) => {
  console.log('avatar', props);
  return <BiUserCircle className={style.usercircle_icon} />;
};

export default UserIcon;
