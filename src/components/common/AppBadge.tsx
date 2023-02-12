import { AppBadge } from 'constants/types';
import { colors } from 'assets/theme/colors';
import { View } from 'react-native';
import { AppText } from './AppText';

export const AppButton: React.FC<AppBadge> = ({ textValue, size, status }) => {
    return (
        <View style={{ backgroundColor: colors.theme[status] }}>
            <AppText
                variant={'label'}
                style={[
                    {
                        textTransform: 'uppercase',
                        fontSize: size,
                    },
                ]}>
                {textValue}
            </AppText>
        </View>
    );
};
