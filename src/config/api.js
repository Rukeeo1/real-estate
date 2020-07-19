import axios from 'axios';

export const baseUrl =
  process.env.REACT_APP_BASE_URL || 'https://liveizy2.azurewebsites.net/api';

//   https://liveizy2.azurewebsites.net/api/register

export const sendRequest = (
  endpoint,
  data = {},
  method = 'GET',
  contentType = 'application/json',
) => {
  try {
    return axios({
      url: `${baseUrl}${endpoint}`,
      method: method,
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-type': contentType,
        Authorization: localStorage.getItem('access')
          ? `Bearer ${localStorage.getItem('access')}`
          : '',
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
