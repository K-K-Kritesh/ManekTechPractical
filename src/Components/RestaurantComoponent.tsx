import {Image, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {AirbnbRating, Rating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/EvilIcons';
import Fonts from '../Services/Fonts';

type RestaurantComoponentProps = {
  hotelName: string;
  rating: number;
  image: string;
};
const RestaurantComoponent = (props: RestaurantComoponentProps) => {
  const {hotelName = '', rating = 4, image = ''} = props;
  const images = image.split(',');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.hotelContainer}>
        <Image
          style={styles.hotelImage}
          source={{
            uri: images[0],
          }}
        />
        <View style={{marginHorizontal: 20}}>
          <Text style={styles.hotelTitle}>{hotelName}</Text>
          <Rating
            startingValue={rating}
            ratingCount={5}
            imageSize={15}
            showRating={false}
            style={{alignSelf:'flex-start'}}
          />
        </View>
      </View>
      <Icon name="location" style={styles.IconContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  IconContainer: {
    fontSize: 20,
    color: 'white',
    height: 30,
    width: 30,
    backgroundColor: '#27dd93',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    alignSelf: 'center',
  },
  hotelTitle: {
    width: 150,
    marginStart: 3,
    marginBottom: 3,
    fontFamily: Fonts.type.Regular,
  },
  hotelImage: {width: 50, height: 50, borderRadius: 5},
  hotelContainer: {flexDirection: 'row', alignItems: 'center'},
});

export default React.memo(RestaurantComoponent);
