import { HeaderType } from 'constants/types';
import { useDrawerStatus } from '@react-navigation/drawer';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { colors } from 'assets/theme/colors';
import {
    SafeAreaView,
    StatusBar,
    useColorScheme,
    View,
    ViewStyle,
} from 'react-native';
import { ActionContainer } from './ActionContainer';
import { MiddleTextContainer } from './MiddleTextContainer';

export const Header: React.FC<HeaderType> = ({ title }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const nav = useNavigation<any>();

    // ========================================================================================================
    // DO NOT REMOVE THIS LINE, IT IS USED FOR UPDATING THE STATE OF THE NAVIGATOR TO CHANGE THE LEFT ICON OF
    // HEADER TO BE BURGER MENU WHEN ITS CANT GO BACK. FOR SOME REASON IT IS REQUIRED
    // ========================================================================================================
    const routeLength = useNavigationState(state => state.routes.length);
    const canGoBack = routeLength !== 1;
    // ========================================================================================================
    const isDrawerOpen = useDrawerStatus() === 'open';

    const handleOnPress = () => {
        if (!isDrawerOpen) nav.goBack();
    };
    const openDrawer = () => nav.toggleDrawer();

    return (
        <SafeAreaView
            style={isDarkMode ? $safeAreaViewDarkMode : $safeAreaView}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                animated={true}
            />
            <View style={$container}>
                <ActionContainer
                    onPress={canGoBack ? handleOnPress : openDrawer}
                    name={canGoBack ? 'chevron-left' : 'menu'}
                />
                <MiddleTextContainer title={title} />
                <ActionContainer name={'bell'} />
            </View>
        </SafeAreaView>
    );
};

// Styles
const $safeAreaView: ViewStyle = {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    backgroundColor: colors.theme.white,
    shadowColor: colors.theme.shadow,
};
const $safeAreaViewDarkMode: ViewStyle = {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    shadowColor: colors.theme.shadowDark,
    backgroundColor: colors.theme.dark,
};

const $container: ViewStyle = {
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
};
// const $textContainer: ViewStyle = {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100%',
//     flex: 1,
// };
