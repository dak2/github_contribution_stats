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

export const getContributions = async (
  githuUserName: string,
): Promise<void> => {
  try {
    await request
      .get(`/users/${githuUserName}`)
      .then((res) => console.log(res));
  } catch (error) {
    const { status } = error.response;
    const errorMessage = error.response['data']['message'];
    console.log(`Error! HTTP Status: ${status} ${errorMessage}`);
  }
};
