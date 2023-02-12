import { AppTextInputType } from 'constants/types';
import { colors } from 'assets/theme/colors';
import { useRef, useState } from 'react';
import { View, TextInput, ViewStyle, TextStyle } from 'react-native';
import { AppIcon } from './AppIcon';
import { AppText } from './AppText';

export const AppTextInput: React.FC<AppTextInputType> = ({
    value,
    setValue,
    helperText,
    error,
    icon,
    title,
    ...otherProps
}) => {
    const textInput = useRef<TextInput>(null);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={$container}>
            <View style={{ marginBottom: 4 }}>
                <AppText
                    variant={'s1'}
                    style={{
                        color: error ? colors.theme.danger : colors.theme.black,
                    }}>
                    {title ?? otherProps.placeholder}
                </AppText>
            </View>
            <TextInput
                ref={textInput}
                style={[
                    $textInput,
                    !otherProps.editable && $disabled,
                    error && $error,
                ]}
                placeholder={'hola'}
                value={value}
                onChangeText={setValue}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...otherProps}
            />
            {!!icon && (
                <AppIcon
                    name={icon}
                    size={10 * 2}
                    color={isFocused ? colors.theme.primary : colors.gray[400]}
                    style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        position: 'absolute',
                        right: 10,
                    }}
                />
            )}
            {(helperText || error) && (
                <View style={{ marginTop: 4 }}>
                    <AppText
                        variant={'s1'}
                        style={{
                            color: error
                                ? colors.theme.danger
                                : colors.theme.info,
                        }}>
                        {helperText}
                    </AppText>
                </View>
            )}
        </View>
    );
};

// Styles
const $container: ViewStyle = {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
};
const $textInput: ViewStyle = {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.gray[400],
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 0,
};
const $disabled: TextStyle = {
    backgroundColor: colors.gray[200],
    borderColor: colors.gray[300],
    color: colors.gray[400],
};
const $error: ViewStyle = {
    borderColor: colors.theme.danger,
    borderWidth: 1,
};
