import React from 'react';
import {TabStack} from './Tab.Stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const NotificationsScreen = ({}) => {
  const nav = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => nav.goBack()} title="Go back home" />
    </View>
  );
};

const MainStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="TabStack">
      <Drawer.Screen name="TabStack" component={TabStack} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

export default MainStack;
