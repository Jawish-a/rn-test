import 'react-native-reanimated';
import React, {Suspense} from 'react';
// import useAppState from 'react-native-appstate-hook';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Main from './src/screens/Main';
// import {onAppStateChange} from './src/utils/isAppActive';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoadingScreen} from './src/screens/Loading.screen';
// import {LogBox} from 'react-native';

// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);

// const Stack = createNativeStackNavigator();

const App = () => {
  const queryClient = new QueryClient();

  // useAppState({
  //   onChange: onAppStateChange,
  // });

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingScreen />}>
          <Main />
        </Suspense>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
