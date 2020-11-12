import axios from 'axios';

const baseUrl = 'http://emphasoft-test-assignment.herokuapp.com';

// test_super
// Nf<U4f<rDbtDxAPn

const getAuthToken = async ({ username, password }) => {
  const response = await axios.post(`${baseUrl}/api-token-auth/`, {
    username,
    password,
  });

  return response;
};

export default {
  getAuthToken,
};
