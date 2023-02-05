import { colors } from 'assets/theme/colors';
import React, { useState } from 'react';
import { Pressable, StyleSheet, TextProps, View } from 'react-native';
import AppEmptySpace from './AppEmptySpace';
import AppIcon from './AppIcon';
import { AppText } from './AppText';

type AppCheckBoxType = {
    onPress: () => any;
    text: string;
    checkBoxSize?: number;
    textStyle?: TextProps;
    isEnabled?: boolean;
    status?: boolean;
    direction?: 'right' | 'left';
    width?: number | '100%';
};

export const AppCheckBox: React.FC<AppCheckBoxType> = ({
    onPress,
    checkBoxSize = 18,
    textStyle,
    text,
    isEnabled = true,
    status = false,
    direction = 'right',
    width,
}) => {
    const [selected, setSelected] = useState(status);

    const changeState = () => {
        if (isEnabled) {
            setSelected(!selected);
            onPress();
        }
    };
    const isTextDirectionRight = direction === 'right';
    return (
        <View
            style={[
                styles.container,
                { width: width },
                { flexDirection: isTextDirectionRight ? 'row' : 'row-reverse' },
            ]}>
            <Pressable onPress={changeState}>
                <AppIcon
                    name={selected ? 'check-square' : 'square'}
                    size={checkBoxSize}
                    color={
                        !isEnabled
                            ? colors.gray[400]
                            : selected
                            ? colors.theme.primary
                            : colors.gray[600]
                    }
                />
            </Pressable>
            <AppEmptySpace width={8} />
            <Pressable onPress={changeState}>
                <AppText variant={'p1'} style={[textStyle]}>
                    {text}
                </AppText>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
