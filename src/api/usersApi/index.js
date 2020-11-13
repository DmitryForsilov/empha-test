import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com';
const apiUrl = 'http://emphasoft-test-assignment.herokuapp.com';
const baseUrl = process.env.NODE_ENV === 'development'
  ? `${proxy}/${apiUrl}`
  : apiUrl;

// test_super
// Nf<U4f<rDbtDxAPn
// '781bd9f1de084f4daa7ba2aa8a71a2eab855354e'

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
