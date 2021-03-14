import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import {
  getGithubUser,
  getGithubCommits,
} from '../../functions/fetchGithubData';

interface Provider {
  name?: string;
  user?: string | Promise<void>;
  commits?: string;
}

const InputName: React.FC = () => {
  const history = useHistory();
  const [data, setData] = useState<Provider>({
    name: '',
    user: '',
    commits: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setData({ name: event.target.value });
  };

  const handleClick = (val: string | undefined) => {
    console.log('test');
    const user = getGithubUser(val);
    const commits = getGithubCommits(val);
    val
      ? localStorage.setItem('githubUserName', val)
      : localStorage.setItem('githubUserName', '');
    setData({ user: user });
    console.log('user', user);
    console.log('commits', commits);
    // setTimeout(() => history.push({
    //   pathname: '/card',
    //   state: { user },
    // }), 500)
  };

  return (
    <div>
      <input
        placeholder={'GithubUserName'}
        style={{ outline: 'none' }}
        onChange={(event) => handleChange(event)}
      ></input>
      <button onClick={() => handleClick(data.name)}>Submit</button>
    </div>
  );
};

export default withRouter(InputName);
