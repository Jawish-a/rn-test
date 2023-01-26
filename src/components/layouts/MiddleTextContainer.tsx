import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import useTypography from '../../hooks/useTypography';
import AppIcon from '../common/AppIcon';
import {AppText} from '../common/AppText';
import {ActionContainer} from './ActionContainer';

type MiddleTextContainerProps = {
  title?: string;
};

export const MiddleTextContainer: React.FC<
  ViewProps & MiddleTextContainerProps
> = ({title}) => {
  const typography = useTypography();
  return (
    <View style={styles.textContainer}>
      <AppText style={{textTransform: 'uppercase'}}>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flex: 1,
  },
});
