import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getGithubUser } from '../../functions/fetchGithubData';

const InputName: React.FC = () => {
  const history = useHistory();
  const [data, setData] = useState({ name: '', githubData: {} });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setData({ name: event.target.value, githubData: {} });
  };

  const getGithubData = (val: string) => {
    console.log('test');
    getGithubUser(val);
    localStorage.setItem('githubUserName', val);
    setTimeout(() => history.push('/card'), 1000);
  };

  return (
    <form>
      <input
        placeholder={'GithubUserName'}
        style={{ outline: 'none' }}
        onChange={(event) => handleChange(event)}
      ></input>
      <button type="submit" onClick={() => getGithubData(data.name)}>
        Submit
      </button>
    </form>
  );
};

export default InputName;
