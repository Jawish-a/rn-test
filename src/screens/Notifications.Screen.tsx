import { useNavigation } from '@react-navigation/native';
import { Button, View } from 'react-native';

export function NotificationsScreen() {
    const nav = useNavigation();

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => nav.goBack()} title={'Go back home'} />
        </View>
    );
}
