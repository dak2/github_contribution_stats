import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import {
  getGithubUser,
  getGithubCommits,
} from '../../functions/fetchGithubData';

interface State {
  name: string;
}

const InputName: React.FC = () => {
  const history = useHistory();
  const [data, setData] = useState<State>({
    name: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setData({ name: event.target.value });
  };

  const handleClick = async (val?: string): Promise<void> => {
    if (!val) {
      return alert('名前を入力してください');
    }
    const user = await getGithubUser(val);
    const commits = await getGithubCommits(val);
    saveLocatStorage(val);
    redirectToCard(user, commits);
  };

  const redirectToCard = (user: any, commits: any) => {
    history.push({
      pathname: '/card',
      state: { user, commits },
    });
  };

  const saveLocatStorage = (name?: string) => {
    name
      ? localStorage.setItem('githubUserName', name)
      : localStorage.setItem('githubUserName', '');
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
