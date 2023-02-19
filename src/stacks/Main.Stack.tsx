import { SCREEN_NAMES, STACK_NAMES } from 'constants/ScreenNames';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NotificationsScreen } from 'screens/Notifications.Screen';
import { TabStack } from './Tab.Stack';

const DrawerNavigator = createDrawerNavigator();

export const MainStack = () => {
    return (
        <DrawerNavigator.Navigator
            useLegacyImplementation={false}
            screenOptions={{
                headerShown: false,
                drawerType: 'slide',
                // swipeEdgeWidth: 0,
                // unmountOnBlur: true,
            }}
            initialRouteName={STACK_NAMES.TAB_STACK}>
            <DrawerNavigator.Screen
                name={STACK_NAMES.TAB_STACK}
                component={TabStack}
            />
            <DrawerNavigator.Screen
                name={SCREEN_NAMES.NOTIFICATION_SCREEN}
                component={NotificationsScreen}
            />
        </DrawerNavigator.Navigator>
    );
};
