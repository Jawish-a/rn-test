import { colors } from 'assets/theme/colors';
import React from 'react';
import { useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { IconProps } from 'react-native-vector-icons/Icon';

const AppIcon: React.FC<IconProps> = ({ color, ...props }) => {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <Icon
            size={24}
            color={
                color
                    ? color
                    : isDarkMode
                    ? colors.theme.white
                    : colors.theme.dark
            }
            {...props}
        />
    );
};

export default AppIcon;
