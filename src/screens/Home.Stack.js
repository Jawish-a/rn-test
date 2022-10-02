import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './Home.Screen';
import {AnotherScreen} from './Another.Screen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="AnotherScreen" component={AnotherScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
