import { SCREEN_NAMES, STACK_NAMES } from 'constants/ScreenNames';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen } from 'screens/Settings.Screen';
import { HomeStack } from './Home.Stack';

const Tab = createBottomTabNavigator();

export const TabStack = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name={STACK_NAMES.homeStack} component={HomeStack} />
            <Tab.Screen
                name={SCREEN_NAMES.settings}
                component={SettingsScreen}
            />
        </Tab.Navigator>
    );
};
