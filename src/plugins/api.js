import instance from './api/index';
import userApi from '../api/user';

const URL = {
  random: '/api/random',
};

export default {
  user: userApi(instance, `${URL.random}/api`),
};
