import {Platform} from 'react-native';
import * as permissions from 'react-native-permissions';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const CheckPermission = () => {
  permissions
    .check(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.CAMERA
        : PERMISSIONS.IOS.CAMERA,
    )
    .then(result => {
      switch (result) {
        case RESULTS.DENIED:
          RequestPermission(
            Platform.OS === 'android'
              ? PERMISSIONS.ANDROID.CAMERA
              : PERMISSIONS.IOS.CAMERA,
          );
      }
      console.log(result);
    });

  permissions
    .check(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
        : PERMISSIONS.IOS.PHOTO_LIBRARY,
    )
    .then(result => {
      switch (result) {
        case RESULTS.DENIED:
          RequestPermission(
            Platform.OS === 'android'
              ? PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
              : PERMISSIONS.IOS.PHOTO_LIBRARY,
          );
      }
      console.log(result);
    });
};

const RequestPermission = (permission: any) => {
  request(permission).then(result => {
    console.log(result);
  });
};

export default {RequestPermission, CheckPermission};
