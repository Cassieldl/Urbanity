import axios from 'axios';

const API_KEY = "AIzaSyDX6-l6Xo1v65CnZ41scxhuOhvLqkJKZxs"; 

export const loginFirebase = async (email, password) => {
  const res = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );

  return res.data.idToken;
};
