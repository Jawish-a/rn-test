import { SCREEN_NAMES } from 'constants/ScreenNames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AnotherScreen } from 'screens/Another.Screen';
import { HomeScreen } from 'screens/Home.Screen';
import { TypographyExampleScreen } from 'screens/TypographyExample.Screen';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                // navigationBarHidden: true,
                // animation: 'slide_from_right',
                // contentStyle: {backgroundColor: 'red'},
            }}>
            <Stack.Screen name={SCREEN_NAMES.home} component={HomeScreen} />
            <Stack.Screen
                name={SCREEN_NAMES.another}
                component={AnotherScreen}
            />
            <Stack.Screen
                name={SCREEN_NAMES.typographyExample}
                component={TypographyExampleScreen}
            />
        </Stack.Navigator>
    );
};
