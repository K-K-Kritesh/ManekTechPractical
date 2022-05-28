import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {any, pathOr, propOr} from 'ramda';
import MapView, {Callout, Marker} from 'react-native-maps';
import {AirbnbRating} from 'react-native-ratings';
import MapViewDirections from 'react-native-maps-directions';
import {CurrentLocation} from '../Services';
import Fonts from '../Services/Fonts';

const GOOGLE_MAP_KEY = '';

type MapViewProps = {
  image: any;
  rating: number;
  title: any;
};
const MapTiView = (props: MapViewProps) => {
  const {image = '', rating = 1, title = ''} = props;
  console.log(props);

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{marginTop:-5}}>
        <Text style={{ height: 40}}>
          <Image
            style={{width: 30, height: 30, alignSelf: 'center'}}
            resizeMode="contain"
            source={require('../../assets/map_img.png')}
          />
        </Text>
      </View>
      <View
        style={{
          height: 40,
          marginHorizontal: 5,
        }}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.name}> Rating: {rating} </Text>
        
      </View>
    </View>
  );
};

const MapScreen = (props: any) => {
  const param = pathOr({}, ['route', 'params'], props);
  const [Location, setLocation] = React.useState({
    latitude: 0.0,
    longitude: 0.0,
  });
  const marref = React.useRef(null);

  

  React.useEffect(() => {
    CurrentLocation(latlng => {
      setLocation(latlng);
    });
  }, []);

  React.useState(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      if (marref.current) {
        // @ts-ignore: Object is possibly 'null'.
        marref.current.hideCallout();
      }
    });
    return unsubscribe;
  });

  const latitude = Number(propOr(0.0, 'latitude', param));
  const longitude = Number(propOr(0.0, 'longitude', param));
  const title = propOr('', 'title', param);
  const rating = Number(propOr(0, 'rating', param));
  const image = propOr('', 'img', param);
  const destination = {
    latitude: Location.latitude,
    longitude: Location.longitude,
  };
  return (
    <View style={{flex: 1}}>
      <MapView
        style={styles.map}
        region={{
          latitude: Location.latitude,
          longitude: Location.longitude,
          latitudeDelta: 5.115,
          longitudeDelta: 5.121,
        }}>
        <Marker
          ref={marref}
          coordinate={{latitude: latitude, longitude: longitude}}>
          <Image
            source={require('../../assets/shop_pin.png')}
            style={{width: 35, height: 35}}
            resizeMode="contain"
          />
          <Callout tooltip>
            <View>
              <View style={styles.bubble}>
                <MapTiView title={title} rating={rating} image={image} />
              </View>
              <View style={styles.arrowBorder} />
              <View style={styles.arrow} />
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: Location.latitude,
            longitude: Location.longitude,
          }}>
          <Image
            source={require('../../assets/location_pin.png')}
            style={{width: 35, height: 35}}
            resizeMode="contain"
          />
        </Marker>
        <MapViewDirections
          origin={{
            latitude: latitude,
            longitude: longitude,
          }}
          destination={destination}
          strokeWidth={3}
          strokeColor={'#27dd93'}
          apikey={GOOGLE_MAP_KEY}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 10,
    width: 180,
    height: 60,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 10,
    fontFamily: Fonts.type.Regular,
  },
  // Character image
  image: {
    width: 30,
    height: 30,
  },
});

export default MapScreen;
