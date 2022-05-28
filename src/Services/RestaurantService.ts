import {map, propOr} from 'ramda';
import RestarantItem from '../types';
import {SQLiteUtils} from './Database';

const GetSearchRestaurant = (
  dispatch: any,
  IsRestaurantAvailable: (isAvailable: Boolean) => void,
) => {
  SQLiteUtils.GetAllRestaurant(SQLiteUtils.db, dispatch, (len: Number) => {
    console.log(len);
    len > 0 ? IsRestaurantAvailable(true) : IsRestaurantAvailable(false);
  });
};

const InsertMultipleRestaurant = (
  restaurants: Array<RestarantItem>,
  dispatch: any,
) => {
  if (restaurants !== undefined && restaurants.length > 0) {
    SQLiteUtils.InsertMultipleRestaurant(restaurants, dispatch);
  }
};

const formatRestaurantList = (hotelList: any) => {
  return map(hotel => {
    return formatHotel(hotel);
  }, hotelList);
};

const formatHotel = (hotel: string) => {
  return {
    title: propOr('No Title', 'title', hotel),
    address: propOr('No Address', 'address', hotel),
    latitude: propOr('No lat', 'latitude', hotel),
    longitude: propOr('No lng', 'longitude', hotel),
    rating: propOr('No rating', 'rating', hotel),
    total_review: propOr('0', 'total_review', hotel),
    mobile: propOr('0', 'mobile', hotel),
    img: map(image => {
      return propOr('', 'url', image);
    }, propOr('', 'images', hotel)),
  };
};



const GetRestaurantFormat = (data: String) => {
  const restaurant: [] = propOr([], 'data', data);
  if (restaurant.length > 0) {
    return formatRestaurantList(restaurant);
  } else {
    return {};
  }
};

// Export all function and using one time declare using many times
export default {
  GetSearchRestaurant,
  GetRestaurantFormat,
  InsertMultipleRestaurant,
};
