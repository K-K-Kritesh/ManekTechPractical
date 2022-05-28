"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_sqlite_storage_1 = __importDefault(require("react-native-sqlite-storage"));
const Actions_1 = require("../../Actions");
const db = react_native_sqlite_storage_1.default.openDatabase({ name: 'Restaurant.db', location: 'default' }, () => {
    console.log('Create Success Database');
}, error => {
    console.log(error);
});
const CreateTable = (dbI) => {
    dbI.transaction((qry) => {
        qry.executeSql('CREATE TABLE IF NOT EXISTS ' +
            'Restaurant' +
            '(ID INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, address TEXT, latitude TEXT, longitude TEXT, rating TEXT, total_review TEXT, mobile TEXT, img TEXT);');
    });
};
const InsertRestaurant = async (dbI, reastaurant) => {
    await db.transaction(async (qry) => {
        await qry.executeSql(`INSERT INTO Restaurant (title, address, latitude, longitude, rating, total_review, mobile, img) VALUES ("${reastaurant.title}","${reastaurant.address}","${reastaurant.latitude}","${reastaurant.longitude}","${reastaurant.rating}","${reastaurant.total_review}","${reastaurant.mobile}","${reastaurant.img}")`, [], () => {
            console.log('Insert Row Success');
        }, error => {
            console.log(error);
        });
    });
};
const InsertMultipleRestaurant = async (Restaurants, dispatch) => {
    let RestaurantsValue = [];
    Restaurants.map(Restaurant => {
        Restaurant.title = `"${Restaurant.title}"`;
        Restaurant.address = `"${Restaurant.address}"`;
        Restaurant.latitude = `"${Restaurant.latitude}"`;
        Restaurant.longitude = `"${Restaurant.longitude}"`;
        Restaurant.rating = `"${Restaurant.rating}"`;
        Restaurant.total_review = `"${Restaurant.total_review}"`;
        Restaurant.mobile = `"${Restaurant.mobile}"`;
        Restaurant.img = `"${Restaurant.img}"`;
        RestaurantsValue.push('(' + Object.values(Restaurant) + ')');
    });
    console.log(RestaurantsValue);
    await db.transaction(async (qry) => {
        qry.executeSql(`INSERT INTO Restaurant (title, address, latitude, longitude, rating, total_review, mobile, img) VALUES ${String(RestaurantsValue)}`, [], () => {
            console.log('Insert Multiple Row Success');
            GetAllRestaurant(db, dispatch, () => { });
        }, error => {
            console.log(error);
        });
    });
};
const GetAllRestaurant = (dbI, dispatch, isRestautant) => {
    dbI.transaction((qry) => {
        qry.executeSql('SELECT * from Restaurant', [], (tx, results) => {
            var len = results.rows.length;
            const Restaurants = [];
            for (let index = 0; index < len; index++) {
                console.log(results.rows.item(index).Title);
                Restaurants.push(results.rows.item(index));
            }
            dispatch({
                type: Actions_1.ACTION_TYPES.RESTAURANT.RESTAURANT_LIST,
                payload: Restaurants,
            });
            isRestautant(Restaurants.length);
        }, (error) => {
            console.log(error);
        });
    });
};
exports.default = {
    db,
    CreateTable,
    InsertRestaurant,
    InsertMultipleRestaurant,
    GetAllRestaurant,
};
//# sourceMappingURL=Sqlite.js.map