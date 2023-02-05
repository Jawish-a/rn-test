import { colors } from './colors';

export type TypographyValueType = {
    fontSize: 36 | 32 | 30 | 26 | 22 | 18 | 15 | 13 | 12 | 10;
    fontFamily:
        | 'Almarai-Light'
        | 'Almarai-Bold'
        | 'Almarai-ExtraBold'
        | 'Almarai-Regular'
        | 'OpenSans-Bold'
        | 'OpenSans-BoldItalic'
        | 'OpenSans-ExtraBold'
        | 'OpenSans-ExtraBoldItalic'
        | 'OpenSans-Italic'
        | 'OpenSans-Light'
        | 'OpenSans-LightItalic'
        | 'OpenSans-Medium'
        | 'OpenSans-MediumItalic'
        | 'OpenSans-Regular'
        | 'OpenSans-SemiBold'
        | 'OpenSans-SemiBoldItalic';
    color?: string;
    lineHeight?: number;
};
export type TypographyType = {
    [name: string]: TypographyValueType;
};

export const typography = (
    isRTL: boolean,
    isDarkMode: boolean,
): TypographyType => ({
    h1: {
        fontSize: 36,
        fontFamily: isRTL ? 'Almarai-ExtraBold' : 'OpenSans-ExtraBold',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 36,
    },
    h2: {
        fontSize: 32,
        fontFamily: isRTL ? 'Almarai-ExtraBold' : 'OpenSans-ExtraBold',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 32,
    },
    h3: {
        fontSize: 30,
        fontFamily: isRTL ? 'Almarai-ExtraBold' : 'OpenSans-ExtraBold',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 30,
    },
    h4: {
        fontSize: 26,
        fontFamily: isRTL ? 'Almarai-Bold' : 'OpenSans-Bold',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 26,
    },
    h5: {
        fontSize: 22,
        fontFamily: isRTL ? 'Almarai-Bold' : 'OpenSans-Bold',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 22,
    },
    h6: {
        fontSize: 18,
        fontFamily: isRTL ? 'Almarai-Bold' : 'OpenSans-Bold',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 18,
    },
    s1: {
        fontSize: 15,
        fontFamily: isRTL ? 'Almarai-Bold' : 'OpenSans-SemiBold',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 15,
    },
    s2: {
        fontSize: 13,
        fontFamily: isRTL ? 'Almarai-Bold' : 'OpenSans-SemiBold',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 13,
    },
    p1: {
        fontSize: 15,
        fontFamily: isRTL ? 'Almarai-Regular' : 'OpenSans-Regular',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 15,
    },
    p2: {
        fontSize: 13,
        fontFamily: isRTL ? 'Almarai-Regular' : 'OpenSans-Regular',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 13,
    },
    c1: {
        fontSize: 12,
        fontFamily: isRTL ? 'Almarai-Regular' : 'OpenSans-Regular',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 12,
    },
    c2: {
        fontSize: 12,
        fontFamily: isRTL ? 'Almarai-Regular' : 'OpenSans-Regular',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 12,
    },
    label: {
        fontSize: 10,
        fontFamily: isRTL ? 'Almarai-ExtraBold' : 'OpenSans-ExtraBold',
        color: isDarkMode ? colors.theme.white : colors.theme.dark,
        lineHeight: 10,
    },
});
