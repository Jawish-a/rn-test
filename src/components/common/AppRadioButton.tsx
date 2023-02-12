import { AppRadioButtonType } from 'constants/types';
import { colors } from 'assets/theme/colors';
import { useState } from 'react';
import { Pressable, View, ViewStyle } from 'react-native';
import { AppEmptySpace } from './AppEmptySpace';
import { AppIcon } from './AppIcon';
import { AppText } from './AppText';

export const AppRadioButton: React.FC<AppRadioButtonType> = ({
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
                $container,
                { width: width },
                { flexDirection: isTextDirectionRight ? 'row' : 'row-reverse' },
            ]}>
            <Pressable onPress={changeState}>
                <AppIcon
                    name={selected ? 'check-circle' : 'circle'}
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
                <AppText variant={'label'} style={[textStyle]}>
                    {text}
                </AppText>
            </Pressable>
        </View>
    );
};

// Styles
const $container: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
};
