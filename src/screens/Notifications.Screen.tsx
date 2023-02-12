import { useNavigation } from '@react-navigation/native';
import { Button, View, ViewStyle } from 'react-native';

export function NotificationsScreen() {
    const nav = useNavigation();

    return (
        <View style={$container}>
            <Button onPress={() => nav.goBack()} title={'Go back home'} />
        </View>
    );
}

const $container: ViewStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
};
