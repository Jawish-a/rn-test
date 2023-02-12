import { AppButtonIconComonentType, AppButtonType } from 'constants/types';
import { colors } from 'assets/theme/colors';
import {
    Pressable,
    PressableProps,
    View,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { AppIcon } from './AppIcon';
import { AppText } from './AppText';

const AppButtonIconComonent = ({
    size,
    position = 'left',
    iconName,
    iconColor,
}: AppButtonIconComonentType) => {
    return (
        <View
            style={{
                paddingLeft: position === 'right' ? size / 2 : 0,
                paddingRight: position === 'left' ? size / 2 : 0,
            }}>
            {iconName && (
                <AppIcon name={iconName} size={size * 1.3} color={iconColor} />
            )}
        </View>
    );
};

export const AppButton: React.FC<PressableProps & AppButtonType> = ({
    onPress,
    size = 12,
    textValue,
    icon,
    iconPosition = 'left',
    isEnabled = true,
    ...otherProps
}) => {
    const showLeftIcon = icon && iconPosition !== 'right';
    const showRightIcon = icon && iconPosition !== 'left' && !!iconPosition;

    return (
        <Pressable
            style={[
                $basic,
                !isEnabled && $disabled,
                {
                    paddingHorizontal: size,
                    paddingVertical: size / 2,
                },
            ]}
            {...otherProps}
            onPress={isEnabled ? onPress : null}>
            {showLeftIcon && (
                <AppButtonIconComonent
                    size={size}
                    position={iconPosition ?? 'left'}
                    iconName={icon}
                    iconColor={
                        !isEnabled ? $disabled.color : colors.theme.black
                    }
                />
            )}
            <AppText
                variant={'label'}
                style={[$label, !isEnabled && $disabled]}>
                {textValue ?? ''}
            </AppText>
            {showRightIcon && (
                <AppButtonIconComonent
                    size={size}
                    position={'right'}
                    iconName={icon}
                    iconColor={
                        !isEnabled ? $disabled.color : colors.theme.black
                    }
                />
            )}
        </Pressable>
    );
};

// Styles
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
