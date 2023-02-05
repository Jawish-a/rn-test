/**
 * @format
 */
import 'react-native-gesture-handler';
// eslint-disable-next-line import/order
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './i18n';

AppRegistry.registerComponent(appName, () => App);
