import { AppTextType } from 'constants/types';
import { colors } from 'assets/theme/colors';
import { useTypography } from 'hooks/useTypography';
import { Text, TextProps, TextStyle } from 'react-native';

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
            style={[$text, { ...typo[variant] }, otherProps.style]}>
            {children}
        </Text>
    );
};

// Styles
const $text: TextStyle = {
    color: colors.theme.black,
    includeFontPadding: false,
};
