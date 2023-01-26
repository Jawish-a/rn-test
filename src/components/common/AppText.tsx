import {StyleSheet, Text, TextProps, useColorScheme} from 'react-native';
import React from 'react';
import {colors} from '../../assets/theme/colors';
import {renderAppColor} from '../../utils/renderAppColor';
import useTypography from '../../hooks/useTypography';
import {getThemeTypography} from '../../assets/theme/typography';

type TypographyVariant = keyof typeof getThemeTypography;

type AppTextType = {
  appTextStatus?: 'enabled' | 'disabled';
  appTextColor?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
  variant: TypographyVariant;
};

export const AppText: React.FC<TextProps & AppTextType> = ({
  appTextColor,
  // appTextStatus = 'enabled',
  children,
  variant = 'p1',
  ...otherProps
}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const typography = useTypography();

  return (
    <Text
      // selectable={true}
      // selectionColor={colors.blue[100]}
      {...otherProps}
      style={[styles.text, {...typography[variant]}, otherProps.style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.theme.black,
  },
});
