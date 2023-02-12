import { AppCardType } from 'constants/types';
import { colors } from 'assets/theme/colors';
import { View, ViewProps, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import { AppText } from './AppText';

export const AppCard: React.FC<ViewProps & AppCardType> = ({
    headerText,
    headerImage,
    headerImageHeight = 150,
    footerComponent,
    children,
}) => {
    return (
        <View style={$container}>
            {headerImage && (
                <FastImage
                    source={{
                        uri: headerImage,
                    }}
                    style={{
                        width: '100%',
                        height: headerImageHeight,
                    }}
                />
            )}
            {!!headerText && (
                <View style={$title}>
                    <AppText variant={'label'} appTextColor={'primary'}>
                        {headerText}
                    </AppText>
                </View>
            )}
            <View style={$content}>{children}</View>
            {footerComponent && (
                <View style={$footerComponent}>{footerComponent}</View>
            )}
        </View>
    );
};

// Styles
const $container: ViewStyle = {
    backgroundColor: colors.theme.white,
    width: '90%',
    borderWidth: 0.5,
    borderColor: colors.gray[300],
};
const $title: ViewStyle = {
    borderBottomColor: colors.gray[300],
    borderBottomWidth: 0.5,
    padding: 16,
};
const $content: ViewStyle = {
    padding: 16,
};
const $footerComponent: ViewStyle = {
    borderTopColor: colors.gray[300],
    borderTopWidth: 0.5,
    padding: 16,
};
