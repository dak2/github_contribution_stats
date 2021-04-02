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
  if (props) {
    return (
      <div>
        <img src={props.avatarUrl} className={style.usercircle_icon}></img>
        <p className={style.user_name}>{props.name}</p>
      </div>
    );
  } else {
    return <BiUserCircle className={style.default_usercircle_icon} />;
  }
};

export default UserIcon;
