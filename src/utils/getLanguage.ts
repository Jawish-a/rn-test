// this function returns the current langugage used by the app platfrom
// it takes nothing and returns a string for the the locale

import { APP_LANG } from 'constants/LocalStorageKeys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform, NativeModules } from 'react-native';
import { showMessage } from 'react-native-flash-message';

const deviceLanguage =
    Platform.OS === 'ios'
        ? NativeModules?.SettingsManager?.settings?.AppleLocale ||
          NativeModules?.SettingsManager?.settings?.AppleLanguages[0] //iOS 13
        : NativeModules?.I18nManager?.localeIdentifier;

export function getSystemLanguage() {
    return deviceLanguage?.split('_')[0];
}

console.log(NativeModules);

export async function getLocalStorageLanguage() {
    // let userLang;
    try {
        return await AsyncStorage.getItem(APP_LANG);
    } catch (error) {
        console.log(error);
    }
}

export async function setLocalStorageLanguage(language: string) {
    try {
        await AsyncStorage.setItem(APP_LANG, language);
        showMessage({
            message: 'Simple message',
            type: 'info',
        });
    } catch (error) {
        console.log(error);
    }
}
