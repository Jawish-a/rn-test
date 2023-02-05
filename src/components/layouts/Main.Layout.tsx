import { colors } from 'assets/theme/colors';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Header } from './Header';

type MainLayoutType = {
    title: string;
    children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutType> = ({ title, children }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? colors.theme.dark : colors.theme.white,
    };

    return (
        <View style={[styles.container, backgroundStyle]}>
            <Header title={title} />
            <KeyboardAwareScrollView
                style={backgroundStyle}
                // contentContainerStyle={{ flex: 1 }}
                scrollEnabled={true}
                //
            >
                {children}
            </KeyboardAwareScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
