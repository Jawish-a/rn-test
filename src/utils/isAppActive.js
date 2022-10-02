import {focusManager} from '@tanstack/react-query';
import {AppStateStatus, Platform} from 'react-native';

export const onAppStateChange = status => {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active');
  }
};
