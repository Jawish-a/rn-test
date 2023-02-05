import { colors } from 'assets/theme/colors';
import { typography } from 'assets/theme/typography';
import useTypography from 'hooks/useTypography';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type TypographyVariant = keyof typeof typography;

type AppTextType = {
    appTextStatus?: 'enabled' | 'disabled';
    appTextColor?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    variant: TypographyVariant | string;
};

export const AppText: React.FC<TextProps & AppTextType> = ({
    // appTextStatus = 'enabled',
    children,
    variant,
    ...otherProps
}) => {
    const typo = useTypography();

    return (
        <Text
            // selectable={true}
            // selectionColor={colors.red[300]}
            {...otherProps}
            style={[styles.text, { ...typo[variant] }, otherProps.style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        color: colors.theme.black,
        includeFontPadding: false,
    },
});
