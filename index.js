/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './dist/App';
import {name as appName} from './app.json';

// Disabling yellow warnings in app
LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent(appName, () => App);
