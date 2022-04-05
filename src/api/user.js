import qs from 'qs';

export default (axios, user) => ({
  getUser(data) {
    return axios.get(`${user}/?${qs.stringify(data)}`);
  },
});
