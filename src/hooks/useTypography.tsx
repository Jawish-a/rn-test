// theme
// import { remToPx } from '../../Theme/typography';

import { typography } from 'assets/theme/typography';
import i18next from 'i18next';
import { useColorScheme } from 'react-native';

// ----------------------------------------------------------------------

export function useTypography() {
    const isRTL = i18next.language === 'ar';
    const isDarkMode = useColorScheme() === 'dark';
    return typography(isRTL, isDarkMode);
}

// ----------------------------------------------------------------------
