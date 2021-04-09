import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import {
  getGithubUser,
  getGithubEvents,
} from '../../functions/fetchGithubData';
import { Events, User } from '../../utils/propsType';

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
    const events = await getGithubEvents(val);
    redirectToCard(user, events);
  };

  const redirectToCard = (user: User, events: Events[]) => {
    history.push({
      pathname: '/card',
      state: { user, events },
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
