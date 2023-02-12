import { SCREEN_NAMES, STACK_NAMES } from 'constants/ScreenNames';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from 'assets/theme/colors';
import { AppIcon } from 'components/common/AppIcon';
import { SettingsScreen } from 'screens/Settings.Screen';
import { HomeStack } from './Home.Stack';

const Tab = createBottomTabNavigator();

const routeNameIcons: { [key: string]: string } = {
    HOME_STACK: 'home',
    SETTINGS_SCREEN: 'settings',
};

export const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    // You can return any component that you like here!
                    return (
                        <AppIcon
                            name={routeNameIcons[route.name]}
                            size={focused ? size * 1.1 : size}
                            color={color}
                        />
                    );
                },
                tabBarActiveTintColor: colors.theme.primary,
                tabBarInactiveTintColor: colors.gray[400],
                headerShown: false,
            })}>
            <Tab.Screen
                name={STACK_NAMES.homeStack}
                component={HomeStack}
                options={{
                    tabBarBadge: undefined,
                    tabBarAccessibilityLabel: STACK_NAMES.homeStack,
                }}
            />
            <Tab.Screen
                name={SCREEN_NAMES.settings}
                component={SettingsScreen}
                options={{
                    tabBarBadge: undefined,
                    tabBarAccessibilityLabel: STACK_NAMES.homeStack,
                }}
            />
        </Tab.Navigator>
    );
};
