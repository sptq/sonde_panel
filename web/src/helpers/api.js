import {clear} from 'redux-localstorage-simple';

const checkFor401Error = async (apiCall) => {
  return new Promise(async (resolve, reject) => {
    const request = await apiCall;

    if (request.status === 401) {
      window.location.reload();
      clear();
    }
    resolve(request);
  });
};

export const apiGet = async (url, token) => {
  try {
    const response = await checkFor401Error(
      fetch(url, {
        cache: 'no-store',
        headers: { Authorization: `Bearer ${token}` },
      }),
    );
   return  await response.json();
} catch (error) {
    console.error('Error', error);
  }
};