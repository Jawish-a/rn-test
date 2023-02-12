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

// const styles = StyleSheet.create({
//   basic: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: colors.theme.primary,
//     borderWidth: 1,
//     flexDirection: 'row',
//   },
//   disabled: {
//     backgroundColor: colors.gray[300],
//     borderColor: colors.gray[400],
//     color: colors.gray[500],
//   },
// });
