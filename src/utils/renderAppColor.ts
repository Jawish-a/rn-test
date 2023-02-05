// const isDarkMode = useColorScheme() === 'dark';

import { colors } from 'assets/theme/colors';

export const renderAppColor = (isDarkMode: boolean, color?: string) => {
    if (!!color) return { color: colors.theme[color] };
    return isDarkMode
        ? { color: colors.theme.white }
        : { color: colors.theme.black };
};
