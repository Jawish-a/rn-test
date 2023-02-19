import { SCREEN_NAMES } from 'constants/ScreenNames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AnotherScreen } from 'screens/Another.Screen';
import { HomeScreen } from 'screens/Home.Screen';
import { TypographyExampleScreen } from 'screens/TypographyExample.Screen';

const HomeStackNavigator = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <HomeStackNavigator.Navigator
            screenOptions={{
                headerShown: false,
                // navigationBarHidden: true,
                // animation: 'slide_from_right',
                // contentStyle: {backgroundColor: 'red'},
            }}>
            <HomeStackNavigator.Screen
                name={SCREEN_NAMES.HOME_SCREEN}
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name={SCREEN_NAMES.ANOTHER_SCREEN}
                component={AnotherScreen}
            />
            <HomeStackNavigator.Screen
                name={SCREEN_NAMES.TYPOGRAPHY_EXAMPLE_SCREEN}
                component={TypographyExampleScreen}
            />
        </HomeStackNavigator.Navigator>
    );
};
