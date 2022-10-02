// this function returns the current langugage used by the app platfrom
// it takes nothing and returns a string for the the locale

import {Platform, NativeModules} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {APP_LANG} from '../constants/LocalStorageKeys';
import {showMessage} from 'react-native-flash-message';

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules?.SettingsManager?.settings?.AppleLocale ||
      NativeModules?.SettingsManager?.settings?.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;

export const getSystemLanguage = () => deviceLanguage.split('_')[0];

export const getLocalStorageLanguage = async () => {
  // let userLang;
  try {
    return await AsyncStorage.getItem(APP_LANG);
  } catch (error) {
    console.log(error);
  }
};

export const setLocalStorageLanguage = async language => {
  try {
    await AsyncStorage.setItem(APP_LANG, language);
    showMessage({
      message: 'Simple message',
      type: 'info',
    });
  } catch (error) {
    console.log(error);
  }
};
