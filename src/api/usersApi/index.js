import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com';
const apiUrl = 'https://emphasoft-test-assignment.herokuapp.com';
const baseUrl = process.env.NODE_ENV === 'development'
  ? `${proxy}/${apiUrl}`
  : apiUrl;

const getAuthToken = async ({ username, password }) => {
  const response = await axios.post(`${baseUrl}/api-token-auth/`, {
    username,
    password,
  });

  return response;
};

const getUsers = async ({ authorizationToken }) => {
  const response = await axios.get(`${baseUrl}/api/v1/users/`, {
    headers: {
      authorization: `token ${authorizationToken}`,
    },
  });

  return response;
};

export default {
  getAuthToken,
  getUsers,
};
