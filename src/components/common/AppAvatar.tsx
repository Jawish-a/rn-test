import { AppAvatarType } from 'constants/types';
import { colors } from 'assets/theme/colors';
import useTypography from 'hooks/useTypography';
import { useState } from 'react';
import { View, Image, ImageProps, ViewStyle, TextStyle } from 'react-native';
import { calcBorderRaduis } from 'utils/calcBorderRaduis';
import { AppText } from './AppText';
// import FastImage, {FastImageProps} from 'react-native-fast-image';

export const AppAvatar: React.FC<ImageProps & AppAvatarType> = ({
    source,
    size,
    alt,
    shape = 'round',
}) => {
    const [fallback, setFallback] = useState(false);
    const typography = useTypography();
    //check if the image can be loaded

    if (fallback) {
        return (
            <View
                style={[
                    $container,
                    {
                        width: size,
                        height: size,
                        borderRadius: calcBorderRaduis(shape, size),
                    },
                ]}>
                <AppText
                    variant={'p1'}
                    style={[
                        $text,
                        {
                            ...typography.s1,
                            fontSize: size / 3,
                        },
                    ]}>
                    {alt}
                </AppText>
            </View>
        );
    }
    // everything is fine and the app avatar is working fin
    return (
        <Image
            style={{
                width: size,
                height: size,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: calcBorderRaduis(shape, size),
                backgroundColor: colors.violet[300],
            }}
            source={source}
            onError={() => setFallback(true)}
        />
    );
};

// Styles
const $container: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.violet[300],
};
const $text: TextStyle = {
    color: colors.theme.white,
    textTransform: 'uppercase',
};
