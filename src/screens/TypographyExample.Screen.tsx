import { useNavigation, useRoute } from '@react-navigation/native';
import { AppButton } from 'components/common/AppButton';
import { AppText } from 'components/common/AppText';
import { MainLayout } from 'components/layouts/Main.Layout';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export const TypographyExampleScreen = ({}) => {
    const nav = useNavigation();
    const route = useRoute();
    const { t } = useTranslation();

    return (
        <MainLayout title={route.name}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <AppText variant={'h1'} appTextColor={'primary'}>
                    {t('strings.h1')}
                </AppText>
                <AppText variant={'h2'} appTextColor={'success'}>
                    {t('strings.h2')}
                </AppText>
                <AppText variant={'h3'} appTextColor={'info'}>
                    {t('strings.h3')}
                </AppText>
                <AppText variant={'h4'} appTextColor={'warning'}>
                    {t('strings.h4')}
                </AppText>
                <AppText variant={'h5'} appTextColor={'danger'}>
                    {t('strings.h5')}
                </AppText>
                <AppText variant={'h6'} appTextColor={'danger'}>
                    {t('strings.h6')}
                </AppText>
                <AppText variant={'s1'} appTextColor={'danger'}>
                    {t('strings.s1')}
                </AppText>
                <AppText variant={'s2'} appTextColor={'danger'}>
                    {t('strings.s2')}
                </AppText>
                <AppText variant={'p1'} appTextColor={'danger'}>
                    {t('strings.p1')}
                </AppText>
                <AppText variant={'p2'} appTextColor={'danger'}>
                    {t('strings.p2')}
                </AppText>
                <AppText variant={'c1'} appTextColor={'danger'}>
                    {t('strings.c1')}
                </AppText>
                <AppText variant={'c2'} appTextColor={'danger'}>
                    {t('strings.c2')}
                </AppText>
                <AppText variant={'label'} appTextColor={'danger'}>
                    {t('strings.label')}
                </AppText>
                <AppText variant={'label'}>
                    {'Typography Screen Example'}
                </AppText>
                <AppButton
                    onPress={nav.goBack}
                    size={12}
                    textValue={t('common.changeLanguage')}
                    icon={'cloud-rain'}
                    iconPosition={'left'}
                />
            </View>
        </MainLayout>
    );
};
