import Axios from 'axios';
import { setToken } from '../appstore/reducers/authSlice';
import { store } from '../appstore/store/store';

const interceptor = () => {
  Axios.interceptors.request.use(
    conf => {
      conf.headers.Authorization = store.getState().auth?.token;
      return conf;
    },
    error => {
      return Promise.reject(error);
    },
  );
  Axios.interceptors.response.use(
    next => {
      console.log('200', next);
      return Promise.resolve(next);
    },
    error => {
      if (error?.message === 'Request failed with status code 401') {
        //@ts-ignore
        navigationRef.navigate('SignIn');
        store.dispatch(setToken(undefined));
        console.log('error : ', error);
      }
      return Promise.reject(error);
    },
  );
};
export default {
  interceptor,
};
