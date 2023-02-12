import { AppIcon } from 'components/common/AppIcon';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewProps,
} from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';

export const ActionContainer: React.FC<
    ViewProps & TouchableOpacityProps & IconProps
> = ({ name, onPress, ...otherProps }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            key={name}
            style={styles.actionContainer}>
            {name ? (
                <AppIcon name={name} {...otherProps} />
            ) : (
                <View style={{ width: 24 }} />
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    actionContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        height: '100%',
    },
});
