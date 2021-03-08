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

export const getGithubUser = async (githuUserName: string): Promise<void> => {
  try {
    return await request
      .get(`/users/${githuUserName}`)
      .then((res: any) => res.data.url);
  } catch (error) {
    const { status } = error.response;
    const errorMessage = error.response['data']['message'];
    console.log(`Error! HTTP Status: ${status} ${errorMessage}`);
  }
};

export const getGithubCommits = async (
  githuUserName: string,
): Promise<void> => {
  try {
    return await request
      .get(`/users/${githuUserName}/events`)
      .then((res: any) => res.data);
  } catch (error) {
    const { status } = error.response;
    const errorMessage = error.response['data']['message'];
    console.log(`Error! HTTP Status: ${status} ${errorMessage}`);
  }
};
