import { AppText } from 'components/common/AppText';
import { View, ViewProps, ViewStyle } from 'react-native';

type MiddleTextContainerProps = {
    title?: string;
};

export const MiddleTextContainer: React.FC<
    ViewProps & MiddleTextContainerProps
> = ({ title }) => {
    return (
        <View style={$textContainer}>
            <AppText variant={'s1'} style={{ textTransform: 'uppercase' }}>
                {title}
            </AppText>
        </View>
    );
};

// Styles
const $textContainer: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flex: 1,
};
