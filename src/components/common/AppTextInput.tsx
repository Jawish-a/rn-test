import {View, TextInput, TextInputProps, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {AppText} from './AppText';
import {colors} from '../../assets/theme/colors';
import {typography} from '../../assets/theme/typography';
import AppIcon from './AppIcon';

type AppTextInputType = TextInputProps & {
  value: string;
  setValue: (text: string) => void;
  helperText?: string;
  error?: boolean;
  icon?: string;
  title?: string;
};

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
    <View style={styles.container}>
      <View style={{marginBottom: 4}}>
        <AppText
          style={{
            color: error ? colors.theme.danger : colors.theme.black,
            fontSize: typography.s1.fontSize,
          }}>
          {title ?? otherProps.placeholder}
        </AppText>
      </View>
      <TextInput
        ref={textInput}
        style={[
          styles.textInput,
          !otherProps.editable && styles.disabled,
          error && styles.error,
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
            // backgroundColor: 'pink',
          }}
        />
      )}
      {(helperText || error) && (
        <View style={{marginTop: 4}}>
          <AppText
            style={{color: error ? colors.theme.danger : colors.theme.info}}>
            {helperText}
          </AppText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.gray[400],
    height: 40,
    paddingHorizontal: 16,
    borderRadius: 0,
  },
  disabled: {
    backgroundColor: colors.gray[200],
    borderColor: colors.gray[300],
    color: colors.gray[400],
  },
  error: {
    borderColor: colors.theme.danger,
    borderWidth: 1,
  },
});
