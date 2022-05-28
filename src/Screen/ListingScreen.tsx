import * as React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RestaurantComoponent} from '../Components';
import {pathOr} from 'ramda';
import RestarantItem from '../types';

const ListingScreen = (props: any) => {
  const state = useSelector(states => states);
  const RestaurantList = pathOr([], ['LoginReducer', 'AllData'], state);

  return (
    <View>
      <FlatList
        data={RestaurantList as Array<RestarantItem>}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              props.navigation.navigate('Map', item);
            }}>
            <RestaurantComoponent
              hotelName={item.title}
              rating={Number(item.rating)}
              image={item.img}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ListingScreen;
