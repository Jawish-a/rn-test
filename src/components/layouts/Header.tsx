import React from 'react';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {ScreenProps} from 'react-native-screens';
import {colors} from '../../assets/theme/colors';

import {ActionContainer} from './ActionContainer';
import {MiddleTextContainer} from './MiddleTextContainer';

type HeaderType = ScreenProps & {
  title: string;
};

export const Header: React.FC<HeaderType> = ({title, ...props}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const nav = useNavigation();
  const route = useRoute();
  const isDrawerOpen = useDrawerStatus() === 'open';

  const handleOnPress = () => {
    if (!isDrawerOpen) nav.goBack();
  };
  const openDrawer = () => nav.toggleDrawer();
  return (
    <SafeAreaView
      key={route.name}
      style={[
        styles.SafeAreaView,
        {
          backgroundColor: isDarkMode ? colors.theme.dark : colors.theme.white,
          shadowColor: isDarkMode ? '#191919' : '#c4c4c4',
        },
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        animated={true}
      />
      <View style={styles.container}>
        <ActionContainer
          onPress={nav.canGoBack() ? handleOnPress : openDrawer}
          name={nav.canGoBack() && isDrawerOpen ? 'chevron-left' : 'menu'}
        />
        <MiddleTextContainer title={title} />
        <ActionContainer name={'bell'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  container: {
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flex: 1,
  },
});
