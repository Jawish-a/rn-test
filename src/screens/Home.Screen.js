import {useNavigation} from '@react-navigation/native';

import React, {useState} from 'react';
import {View} from 'react-native';
import {AppButton} from '../components/common/AppButton';
import {AppText} from '../components/common/AppText';
import {MainLayout} from '../components/layouts/Main.Layout';
import {useTranslation} from 'react-i18next';
import {setLocalStorageLanguage} from '../utils/getLanguage';
import {AppAvatar} from '../components/common/AppAvatar';
import {AppButtonGroup} from '../components/common/AppButtonGroup';
import {AppCard} from '../components/common/AppCard';
import {AppCheckBox} from '../components/common/AppCheckBox';
import {AppTextInput} from '../components/common/AppTextInput';
import {AppRadioButton} from '../components/common/AppRadioButton';
import {AppSwitch} from '../components/common/AppToggle';

export const HomeScreen = ({}) => {
  const nav = useNavigation();
  const {t, i18n} = useTranslation();
  const [text, setText] = useState('');
  const [select, setSelect] = useState(true);

  return (
    <MainLayout title={'hola'}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <AppText>Home Screen</AppText>
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
        <AppText>Home Screen</AppText>
        <AppText variant={'label'} appTextColor={'primary'}>
          {t('common.hello')}
        </AppText>
        <AppText appTextColor={'primary'}>{t('common.hello')}</AppText>
        <AppText appTextColor={'success'}>I AM success</AppText>
        <AppText appTextColor={'info'}>I AM info</AppText>
        <AppText appTextColor={'warning'}>I AM warning</AppText>
        <AppText appTextColor={'danger'}>I AM danger</AppText>
        <AppText appTextColor={'danger'}>I AM danger</AppText>
        <AppButtonGroup
          textValue={['hi', 'hello']}
          isEnabled={[true, true]}
          size={12}
          action={[
            () => {
              console.log('hi');
            },
            () => {
              console.log('hello');
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
                // isEnabled={false}
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
          <AppText appTextColor={'danger'}>I AM danger</AppText>
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
          text="I am a switch"
          // isEnabled={false}
          status={select}
          onPress={() => setSelect(!select)}
          direction={'left'}
        />
      </View>
    </MainLayout>
  );
};
