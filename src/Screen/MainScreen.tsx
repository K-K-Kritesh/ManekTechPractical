import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListingScreen from './ListingScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapScreen from './MapScreen';
import {SearchRestaurantName} from '../Actions';
import {useDispatch} from 'react-redux';
import Fonts from '../Services/Fonts';

const Tab = createBottomTabNavigator();

const getCustomHeader = (route: any) => {
  return {
    header: () => (
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontFamily: Fonts.type.Regular,
          }}>
          {route.name === 'Listing' ? 'Restaurant List' : 'Map View'}
        </Text>
      </View>
    ),
  };
};

const MainScreen = () => {
  const dispatch = useDispatch();
  const [isPortrait, setPortrait] = React.useState(true);

  React.useEffect(() => {
    dispatch<any>(SearchRestaurantName());
  }, []);

  React.useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setPortrait(true);
      } else {
        setPortrait(false);
      }
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        ...getCustomHeader(route),
        tabBarShowLabel: false,
        tabBarStyle: {
          position: isPortrait ? 'absolute' : 'relative',
          bottom: isPortrait ? 10 : 0,
          margin: isPortrait ? 20 : 0,
          borderRadius: isPortrait ? 30 : 0,
        },
      })}>
      <Tab.Screen
        name="Listing"
        component={ListingScreen}
        options={{
          tabBarIcon: route => (
            <Icon
              name="view-list"
              style={{fontSize: 25, color: route.focused ? '#27dd93' : 'gray'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: route => (
            <Icon
              name="map"
              style={{fontSize: 25, color: route.focused ? '#27dd93' : 'gray'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: '#27dd93',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
