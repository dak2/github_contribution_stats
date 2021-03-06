import React from 'react';
import GithubIcon from '../atoms/GithubIcon';
import InputName from '../atoms/InputName';

const InputForm: React.FC = () => {
  return (
    <div>
      <div>
        <GithubIcon />
      </div>
      <div>
        <InputName />
      </div>
    </div>
  )
};

export default InputForm;
