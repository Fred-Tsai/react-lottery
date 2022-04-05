import axios from 'axios';

const instance = axios.create({
  timeout: 5000,
});

const onRequest = (config) => {
  return config;
};

const onResponse = (response) => {
  const { status } = response;
  if (status >= 200 && status <= 299) {
    return response.data;
  }
  return response;
};

const onError = (error) => {
  const { status } = error.response;
  return { errorStatus: status };
};

instance.interceptors.request.use(onRequest);
instance.interceptors.response.use(onResponse, onError);

export default instance;
