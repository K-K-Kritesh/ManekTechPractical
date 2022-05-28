import {ApiHandler, RestaurantService} from '../Services';
import RestarantItem from '../types';

export const SearchRestaurantName = () => {
  return async (dispatch: any) => {
    RestaurantService.GetSearchRestaurant(
      dispatch,
      async (isAvailable: Boolean) => {
        if (!isAvailable) {
          const response = await ApiHandler.getRestuarants();
          const formatedRestaurant = RestaurantService.GetRestaurantFormat(
            response.data,
          );
          RestaurantService.InsertMultipleRestaurant(
            formatedRestaurant as Array<RestarantItem>,
            dispatch,
          );
        }
      },
    );
  };
};
