import { Text, View, ViewStyle } from 'react-native';

export function SettingsScreen() {
    return (
        <View style={$container}>
            <Text>{'Settings!'}</Text>
        </View>
    );
}

const $container: ViewStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
};
