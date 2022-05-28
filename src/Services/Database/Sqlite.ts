import SQLite from 'react-native-sqlite-storage';
import {ACTION_TYPES} from '../../Actions';
import RestarantItem from '../../types';

const db = SQLite.openDatabase(
  {name: 'Restaurant.db', location: 'default'},
  () => {
    console.log('Create Success Database');
  },
  error => {
    console.log(error);
  },
);

const CreateTable = (dbI: any) => {
  dbI.transaction((qry: any) => {
    qry.executeSql(
      'CREATE TABLE IF NOT EXISTS ' +
        'Restaurant' +
        '(ID INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, address TEXT, latitude TEXT, longitude TEXT, rating TEXT, total_review TEXT, mobile TEXT, img TEXT);',
    );
  });
};

const InsertRestaurant = async (dbI: any, reastaurant: RestarantItem) => {
  await db.transaction(async qry => {
    await qry.executeSql(
      `INSERT INTO Restaurant (title, address, latitude, longitude, rating, total_review, mobile, img) VALUES ("${reastaurant.title}","${reastaurant.address}","${reastaurant.latitude}","${reastaurant.longitude}","${reastaurant.rating}","${reastaurant.total_review}","${reastaurant.mobile}","${reastaurant.img}")`,
      [],
      () => {
        console.log('Insert Row Success');
      },
      error => {
        console.log(error);
      },
    );
  });
};

const InsertMultipleRestaurant = async (
  Restaurants: Array<RestarantItem>,
  dispatch: any,
) => {
  let RestaurantsValue: Array<String> = [];
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

  await db.transaction(async qry => {
    qry.executeSql(
      `INSERT INTO Restaurant (title, address, latitude, longitude, rating, total_review, mobile, img) VALUES ${String(
        RestaurantsValue,
      )}`,
      [],
      () => {
        console.log('Insert Multiple Row Success');
        GetAllRestaurant(db, dispatch, () => {});
      },
      error => {
        console.log(error);
      },
    );
  });
};

const GetAllRestaurant = (
  dbI: any,
  dispatch: any,
  isRestautant: (len: any) => void,
) => {
  dbI.transaction((qry: any) => {
    qry.executeSql(
      'SELECT * from Restaurant',
      [],
      (tx: any, results: any) => {
        var len = results.rows.length;
        const Restaurants: Array<RestarantItem> = [];
        for (let index = 0; index < len; index++) {
          console.log(results.rows.item(index).Title);
          Restaurants.push(results.rows.item(index));
        }
        dispatch({
          type: ACTION_TYPES.RESTAURANT.RESTAURANT_LIST,
          payload: Restaurants,
        });
        isRestautant(Restaurants.length);
      },
      (error: any) => {
        console.log(error);
      },
    );
  });
};

export default {
  db,
  CreateTable,
  InsertRestaurant,
  InsertMultipleRestaurant,
  GetAllRestaurant,
};
