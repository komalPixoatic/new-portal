
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';


const requestAndroidPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the LOCATION');
    } else {
      console.log('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const requestIosPermission = async () => {
  Geolocation.requestAuthorization('whenInUse')
}

const LocationPermission = async () => {
  console.log('Good Runing...')
  if (Platform.OS == 'android') {
    await requestAndroidPermission()
  }
  else {
    await requestIosPermission()
  }
}

export default LocationPermission;
