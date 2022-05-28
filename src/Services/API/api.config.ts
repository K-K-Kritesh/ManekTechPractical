import Axios from 'axios';
import {configure} from 'axios-hooks';
import LRU from 'lru-cache';

const BASE_URL = 'http://205.134.254.135/~mobile/interview/public/api/';

const cache = new LRU({max: 10});
export let axiosInstance: any;

const initApiConfig = () => {
  axiosInstance = Axios.create({
    baseURL: `${BASE_URL}`,
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  configure({axios: axiosInstance, cache});
};

export default initApiConfig;
