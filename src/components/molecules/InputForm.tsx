import React from 'react';
import style from '../../styles/InputForm.module.css';
import GithubIcon from '../atoms/GithubIcon';
import InputName from '../atoms/InputName';

const InputForm: React.FC = () => {
  return (
    <div className={style.form_wrapper}>
      <div>
        <GithubIcon />
      </div>
      <div className={style.input_form}>
        <InputName />
      </div>
    </div>
  );
};

export default InputForm;
