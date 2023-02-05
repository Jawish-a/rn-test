import { useNavigation, useRoute } from '@react-navigation/native';
import { AppButton } from 'components/common/AppButton';
import { AppText } from 'components/common/AppText';
import { MainLayout } from 'components/layouts/Main.Layout';
import { View } from 'react-native';

export const AnotherScreen = ({}) => {
    const nav = useNavigation();
    const route = useRoute();

    return (
        <MainLayout title={route.name}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <AppText variant={'s1'}>{'I AM ANOTHER SCREEN'}</AppText>
                <AppButton onPress={() => nav.goBack()} />
                <AppText variant={'s1'}>{'Anoter Screen'}</AppText>
            </View>
        </MainLayout>
    );
};
