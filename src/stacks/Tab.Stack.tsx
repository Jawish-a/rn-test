import { SCREEN_NAMES, STACK_NAMES } from 'constants/ScreenNames';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from 'assets/theme/colors';
import { AppAnimateScaleWrapper } from 'components/common/AppAnimateScaleWrapper';
import { AppIcon } from 'components/common/AppIcon';
import { SettingsScreen } from 'screens/Settings.Screen';
import { HomeStack } from './Home.Stack';

const TabStackNavigator = createBottomTabNavigator();

const routeNameIcons: { [key: string]: string } = {
    HOME_STACK: 'home',
    SETTINGS_SCREEN: 'settings',
};

export const TabStack = () => {
    return (
        <TabStackNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    // You can return any component that you like here!
                    return (
                        <AppAnimateScaleWrapper animateTrigger={focused}>
                            <AppIcon
                                name={routeNameIcons[route.name]}
                                size={size}
                                color={color}
                            />
                        </AppAnimateScaleWrapper>
                    );
                },
                tabBarActiveTintColor: colors.theme.primary,
                tabBarInactiveTintColor: colors.gray[400],
                headerShown: false,
            })}>
            <TabStackNavigator.Screen
                name={STACK_NAMES.HOME_STACK}
                component={HomeStack}
                options={{
                    tabBarBadge: undefined,
                    tabBarAccessibilityLabel: STACK_NAMES.HOME_STACK,
                }}
            />
            <TabStackNavigator.Screen
                name={SCREEN_NAMES.SETTINGS_SCREEN}
                component={SettingsScreen}
                options={{
                    tabBarBadge: undefined,
                    tabBarAccessibilityLabel: STACK_NAMES.HOME_STACK,
                }}
            />
        </TabStackNavigator.Navigator>
    );
};
