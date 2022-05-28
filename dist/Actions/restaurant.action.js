"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRestaurantName = void 0;
const Services_1 = require("../Services");
const SearchRestaurantName = () => {
    return async (dispatch) => {
        Services_1.RestaurantService.GetSearchRestaurant(dispatch, async (isAvailable) => {
            if (!isAvailable) {
                const response = await Services_1.ApiHandler.getRestuarants();
                const formatedRestaurant = Services_1.RestaurantService.GetRestaurantFormat(response.data);
                Services_1.RestaurantService.InsertMultipleRestaurant(formatedRestaurant, dispatch);
            }
        });
    };
};
exports.SearchRestaurantName = SearchRestaurantName;
//# sourceMappingURL=restaurant.action.js.map