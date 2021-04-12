import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import {
  getGithubUser,
  getGithubEvents,
  getGithubRepos,
} from '../../functions/fetchGithubData';
import { Events, User, Repos } from '../../utils/propsType';

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
    try {
      const user = await getGithubUser(val);
      const events = await getGithubEvents(val);
      const repos = await getGithubRepos(val);
      redirectToCard(user, events, repos);
    } catch (error) {
      alert('存在しないユーザー名です。');
    }
  };

  const redirectToCard = (user: User, events: Events[], repos: Repos[]) => {
    history.push({
      pathname: '/card',
      state: { user, events, repos },
    });
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
