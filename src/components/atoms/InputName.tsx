import React from 'react';

const InputName: React.FC = () => {
  return (
    <form>
      <input placeholder={'GithubUserName'} style={{ outline: 'none' }}></input>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default InputName;
