import { AppIcon } from 'components/common/AppIcon';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewProps,
    ViewStyle,
} from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';

export const ActionContainer: React.FC<
    ViewProps & TouchableOpacityProps & IconProps
> = ({ name, onPress, ...otherProps }) => {
    return (
        <TouchableOpacity onPress={onPress} key={name} style={$actionContainer}>
            {name ? (
                <AppIcon name={name} {...otherProps} />
            ) : (
                <View style={{ width: 24 }} />
            )}
        </TouchableOpacity>
    );
};

// Styles
const $actionContainer: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    height: '100%',
};
