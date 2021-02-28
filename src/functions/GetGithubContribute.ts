import axios from 'axios';
const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Prepare axios for GitHub API
const request = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Content-Type': 'application/vnd.github.v3+json',
    Authorization: `token ${GITHUB_TOKEN}`,
  },
  responseType: 'json',
});

export const getContributions = (): void => {
  console.log(GITHUB_TOKEN);
  request.get('/users/dak2').then((res) => console.log(res));
};
