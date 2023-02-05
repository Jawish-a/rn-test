import { colors } from 'assets/theme/colors';
import useTypography from 'hooks/useTypography';
import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageProps } from 'react-native';
import { AppText } from './AppText';
// import FastImage, {FastImageProps} from 'react-native-fast-image';

const calcBorderRaduis = (
    shape: AppAvatarType['shape'],
    size: AppAvatarType['size'],
): number => {
    if (shape === 'square') {
        return 0;
    }
    if (shape === 'rounded') {
        return size / 5;
    }
    return size / 2;
};

type AppAvatarType = {
    size: number;
    shape?: 'round' | 'rounded' | 'square';
    alt: string;
};

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
                    styles.container,
                    {
                        width: size,
                        height: size,
                        borderRadius: calcBorderRaduis(shape, size),
                    },
                ]}>
                <AppText
                    variant={'p1'}
                    style={[
                        styles.text,
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

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.violet[300],
    },
    text: {
        color: colors.theme.white,
        textTransform: 'uppercase',
    },
});
