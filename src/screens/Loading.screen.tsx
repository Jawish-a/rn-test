import { View, ActivityIndicator, ViewStyle } from 'react-native';

export const LoadingScreen = () => {
    return (
        <View style={$container}>
            <ActivityIndicator size={'large'} />
        </View>
    );
};

const $container: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
};
