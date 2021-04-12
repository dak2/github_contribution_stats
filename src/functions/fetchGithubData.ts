import axios from 'axios';
const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const request = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Content-Type': 'application/vnd.github.v3+json',
    Authorization: `token ${GITHUB_TOKEN}`,
  },
  responseType: 'json',
});

export const getGithubUser = async (
  githuUserName: string | undefined,
): Promise<void | any> => {
  return request.get(`/users/${githuUserName}`).then((res: any) => res.data);
};

export const getGithubEvents = async (
  githuUserName: string | undefined,
): Promise<void | any> => {
  return request
    .get(`/users/${githuUserName}/events`)
    .then((res: any) => res.data);
};

export const getGithubRepos = async (
  githuUserName: string | undefined,
): Promise<void | any> => {
  return request
    .get(`/users/${githuUserName}/repos`)
    .then((res: any) => res.data);
};
