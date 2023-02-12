import { AppButtonGroupType } from 'constants/types';
import { colors } from 'assets/theme/colors';
import {
    Pressable,
    PressableProps,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native';
import { AppText } from './AppText';

export const AppButtonGroup: React.FC<AppButtonGroupType & PressableProps> = ({
    action,
    size,
    textValue,
    isEnabled = [true],
    ...otherProps
}) => {
    return (
        <View style={$container}>
            {textValue.map((_: string, i: number) => {
                return (
                    <Pressable
                        key={textValue[i]}
                        style={[
                            $basic,
                            !isEnabled[i] && $disabled,
                            {
                                paddingHorizontal: size,
                                paddingVertical: size / 2,
                            },
                        ]}
                        {...otherProps}
                        onPress={isEnabled[i] ? () => action[i]() : null}>
                        <AppText
                            variant={'label'}
                            style={[$label, !isEnabled[i] && $disabled]}>
                            {textValue[i]}
                        </AppText>
                    </Pressable>
                );
            })}
        </View>
    );
};

// Styles
const $container: ViewStyle = {
    flexDirection: 'row',
};
const $basic: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.theme.primary,
    borderWidth: 1,
    flexDirection: 'row',
};
const $label: TextStyle = {
    textTransform: 'uppercase',
};
const $disabled: TextStyle = {
    backgroundColor: colors.gray[300],
    borderColor: colors.gray[400],
    color: colors.gray[500],
};
