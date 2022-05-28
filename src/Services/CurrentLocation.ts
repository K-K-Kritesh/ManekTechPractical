import GetLocation from 'react-native-get-location';

const CurrentLocation = (C_Location: (latlng: any) => void) => {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      C_Location(location);
    })
    .catch(error => {
      const {code, message} = error;
      console.warn(code, message);
    });
};

export default CurrentLocation;
