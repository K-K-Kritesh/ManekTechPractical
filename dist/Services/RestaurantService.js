"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const Database_1 = require("./Database");
const GetSearchRestaurant = (dispatch, IsRestaurantAvailable) => {
    Database_1.SQLiteUtils.GetAllRestaurant(Database_1.SQLiteUtils.db, dispatch, (len) => {
        console.log(len);
        len > 0 ? IsRestaurantAvailable(true) : IsRestaurantAvailable(false);
    });
};
const InsertMultipleRestaurant = (restaurants, dispatch) => {
    if (restaurants !== undefined && restaurants.length > 0) {
        Database_1.SQLiteUtils.InsertMultipleRestaurant(restaurants, dispatch);
    }
};
const formatRestaurantList = (hotelList) => {
    return (0, ramda_1.map)(hotel => {
        return formatHotel(hotel);
    }, hotelList);
};
const formatHotel = (hotel) => {
    return {
        title: (0, ramda_1.propOr)('No Title', 'title', hotel),
        address: (0, ramda_1.propOr)('No Address', 'address', hotel),
        latitude: (0, ramda_1.propOr)('No lat', 'latitude', hotel),
        longitude: (0, ramda_1.propOr)('No lng', 'longitude', hotel),
        rating: (0, ramda_1.propOr)('No rating', 'rating', hotel),
        total_review: (0, ramda_1.propOr)('0', 'total_review', hotel),
        mobile: (0, ramda_1.propOr)('0', 'mobile', hotel),
        img: (0, ramda_1.map)(image => {
            return (0, ramda_1.propOr)('', 'url', image);
        }, (0, ramda_1.propOr)('', 'images', hotel)),
    };
};
const GetRestaurantFormat = (data) => {
    const restaurant = (0, ramda_1.propOr)([], 'data', data);
    if (restaurant.length > 0) {
        return formatRestaurantList(restaurant);
    }
    else {
        return {};
    }
};
// Export all function and using one time declare using many times
exports.default = {
    GetSearchRestaurant,
    GetRestaurantFormat,
    InsertMultipleRestaurant,
};
//# sourceMappingURL=RestaurantService.js.map