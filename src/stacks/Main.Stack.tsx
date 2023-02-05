import { SCREEN_NAMES, STACK_NAMES } from 'constants/ScreenNames';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NotificationsScreen } from 'screens/Notifications.Screen';
import { TabStack } from './Tab.Stack';

const Drawer = createDrawerNavigator();

export const MainStack = () => {
    return (
        <Drawer.Navigator
            useLegacyImplementation={false}
            screenOptions={{
                headerShown: false,
                drawerType: 'slide',
                // swipeEdgeWidth: 0,
                // unmountOnBlur: true,
            }}
            initialRouteName={STACK_NAMES.tabStack}>
            <Drawer.Screen name={STACK_NAMES.tabStack} component={TabStack} />
            <Drawer.Screen
                name={SCREEN_NAMES.notification}
                component={NotificationsScreen}
            />
        </Drawer.Navigator>
    );
};
