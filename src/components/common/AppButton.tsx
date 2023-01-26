import {Pressable, PressableProps, StyleSheet, View} from 'react-native';
import React from 'react';
import {AppText} from './AppText';
import {colors} from '../../assets/theme/colors';
import AppIcon from './AppIcon';
import {AppButtonIconComonentType, AppButtonType} from '../../constants/Types';
import useTypography from '../../hooks/useTypography';

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
  size,
  textValue,
  icon,
  iconPosition,
  isEnabled = true,
  ...otherProps
}) => {
  const showLeftIcon = icon && iconPosition !== 'right';
  const showRightIcon = icon && iconPosition !== 'left' && !!iconPosition;
  const typography = useTypography();

  return (
    <Pressable
      style={[
        styles.basic,
        !isEnabled && styles.disabled,
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
          iconColor={!isEnabled ? styles.disabled.color : undefined}
        />
      )}
      <AppText
        style={[
          {
            // ...typography.label,
            textTransform: 'uppercase',
            fontSize: size,
          },
          !isEnabled && styles.disabled,
        ]}>
        {textValue}
      </AppText>
      {showRightIcon && (
        <AppButtonIconComonent
          size={size}
          position={'right'}
          iconName={icon}
          iconColor={!isEnabled ? styles.disabled.color : undefined}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  basic: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.theme.primary,
    borderWidth: 1,
    flexDirection: 'row',
  },
  disabled: {
    backgroundColor: colors.gray[300],
    borderColor: colors.gray[400],
    color: colors.gray[500],
  },
});
