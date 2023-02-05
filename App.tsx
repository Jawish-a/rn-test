// import 'react-native-reanimated';
import analytics from '@react-native-firebase/analytics';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense, useRef } from 'react';
// import useAppState from 'react-native-appstate-hook';
import { I18nextProvider } from 'react-i18next';
import FlashMessage from 'react-native-flash-message';
import i18n from './i18n';
import Main from './src/Main';
// import {onAppStateChange} from './src/utils/isAppActive';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LoadingScreen } from './src/screens/Loading.screen';
// import {LogBox} from 'react-native';

// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);

// const Stack = createNativeStackNavigator();

export default function App() {
    const queryClient = new QueryClient();
    // for Firebase screen tracking
    const routeNameRef = useRef<any>(null);
    const navigationRef = useRef<any>(null);

    // useAppState({
    //   onChange: onAppStateChange,
    // });

    return (
        <I18nextProvider i18n={i18n}>
            <NavigationContainer
                ref={navigationRef}
                onReady={() => {
                    routeNameRef.current =
                        navigationRef.current!.getCurrentRoute()?.name;
                }}
                onStateChange={async () => {
                    const previousRouteName = routeNameRef.current;
                    const currentRouteName =
                        navigationRef.current.getCurrentRoute().name;

                    if (previousRouteName !== currentRouteName) {
                        await analytics().logScreenView({
                            screen_name: currentRouteName,
                            screen_class: currentRouteName,
                        });
                    }
                    routeNameRef.current = currentRouteName;
                }}>
                <QueryClientProvider client={queryClient}>
                    <Suspense fallback={<LoadingScreen />}>
                        <Main />
                        <FlashMessage position={'top'} />
                    </Suspense>
                </QueryClientProvider>
            </NavigationContainer>
        </I18nextProvider>
    );
}
