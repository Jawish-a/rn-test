// theme
// import { remToPx } from '../../Theme/typography';

import i18next from 'i18next';
import {getThemeTypography} from '../assets/theme/typography';
import {useColorScheme} from 'react-native';

export type TypographyValueType = {
  fontSize: 36 | 32 | 30 | 26 | 22 | 18 | 15 | 13 | 12 | 10;
  fontWeight: '800' | '700' | '600' | '500' | '400' | '300';
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
};
export type TypographyType = {
  [name: string]: TypographyValueType;
};
// ----------------------------------------------------------------------

export default function useTypography() {
  const isRTL = i18next.language === 'ar';
  const isDarkMode = useColorScheme() === 'dark';
  const typography = getThemeTypography(isRTL, isDarkMode);
  return typography;
}

// ----------------------------------------------------------------------
