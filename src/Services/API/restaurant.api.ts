import {axiosInstance} from './api.config';

const getRestuarants = async () => {
  try {
    const response = await axiosInstance.get('restaurants_list');
    return {...response};
  } catch (error) {
    return {error, data: null};
  }
};

const getRestuarantsTamp = async () => {
  try {
    const response = await axiosInstance.get();
    return {...response};
  } catch (error) {
    return {error, data: null};
  }
};

export default {getRestuarants, getRestuarantsTamp};
