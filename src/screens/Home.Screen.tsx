import { SCREEN_NAMES } from 'constants/ScreenNames';
import { useNavigation } from '@react-navigation/native';

import { AppAvatar } from 'components/common/AppAvatar';
import { AppButton } from 'components/common/AppButton';
import { AppButtonGroup } from 'components/common/AppButtonGroup';
import { AppCard } from 'components/common/AppCard';
import { AppCheckBox } from 'components/common/AppCheckBox';
import { AppRadioButton } from 'components/common/AppRadioButton';
import { AppText } from 'components/common/AppText';
import { AppTextInput } from 'components/common/AppTextInput';
import { AppSwitch } from 'components/common/AppToggle';
import { MainLayout } from 'components/layouts/Main.Layout';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { getSystemLanguage, setLocalStorageLanguage } from 'utils/getLanguage';

export const HomeScreen = () => {
    const nav = useNavigation();
    const { t, i18n } = useTranslation();
    const [text, setText] = useState('');
    const [select, setSelect] = useState(true);

    return (
        <MainLayout title={'hola'}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <AppText variant={'s1'}>{'Home Screen'}</AppText>
                <AppButton
                    onPress={() => setLocalStorageLanguage('en')}
                    size={15}
                    textValue={'Change to EN'}
                    icon={'box'}
                    iconPosition={'right'}
                    isEnabled={false}
                />
                <AppButton
                    onPress={() => setLocalStorageLanguage('ar')}
                    size={15}
                    textValue={'Change to AR'}
                    icon={'cloud-rain'}
                    iconPosition={'left'}
                />
                <AppText variant={'s1'}>
                    {'Home Screen '}
                    {getSystemLanguage()}
                </AppText>

                <AppButtonGroup
                    textValue={['hi', SCREEN_NAMES.typographyExample]}
                    isEnabled={[true, true]}
                    size={12}
                    action={[
                        () => {
                            console.log('hi');
                        },
                        () => {
                            nav.navigate(SCREEN_NAMES.typographyExample);
                        },
                    ]}
                />
                <AppAvatar
                    alt={'aj'}
                    size={120}
                    shape={'round'}
                    source={{
                        uri: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                    }}
                />
                <AppCard
                    footerComponent={
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <AppButton
                                onPress={() => i18n.changeLanguage('en')}
                                size={12}
                                textValue={'Change to EN'}
                                icon={'box'}
                                iconPosition={'right'}
                            />
                            <AppButton
                                onPress={() => i18n.changeLanguage('ar')}
                                size={12}
                                textValue={'Change to AR'}
                                icon={'cloud-rain'}
                                iconPosition={'left'}
                            />
                        </View>
                    }>
                    <AppText variant={'s1'} appTextColor={'danger'}>
                        {t('I AM danger')}
                    </AppText>
                </AppCard>

                <AppCheckBox
                    onPress={() => {
                        console.log('ht');
                    }}
                    text={'I am a checkbox'}
                    isEnabled={true}
                    status={true}
                    // direction={'left'}
                    // width={200}
                />
                <AppRadioButton
                    onPress={() => {
                        console.log('ht');
                    }}
                    text={'hola'}
                    isEnabled={true}
                    status={true}
                    // direction={'left'}
                    // width={200}
                />
                <AppTextInput
                    value={text}
                    setValue={setText}
                    placeholder={'hola'}
                    // error={true}
                    helperText={'Incorrect entry.'}
                    icon={'home'}
                    title={'home'}
                    editable={false}
                />
                <AppSwitch
                    text={'I am a switch'}
                    // isEnabled={false}
                    status={select}
                    onPress={() => setSelect(!select)}
                    direction={'left'}
                />
            </View>
        </MainLayout>
    );
};
