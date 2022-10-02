import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '../../assets/theme/colors';
import {AppCardType} from '../../constants/Types';
import {AppText} from './AppText';

export const AppCard: React.FC<ViewProps & AppCardType> = ({
  headerText,
  headerImage,
  headerImageHeight = 150,
  footerComponent,
  children,
}) => {
  return (
    <View style={styles.container}>
      {headerImage && (
        <FastImage
          source={{
            uri: headerImage,
          }}
          style={{
            width: '100%',
            height: headerImageHeight,
          }}
        />
      )}
      {!!headerText && (
        <View style={styles.title}>
          <AppText appTextColor={'primary'}>{headerText}</AppText>
        </View>
      )}
      <View style={styles.content}>{children}</View>
      {footerComponent && (
        <View style={styles.footerComponent}>{footerComponent}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.theme.white,
    width: '90%',
    borderWidth: 0.5,
    borderColor: colors.gray[300],
  },
  title: {
    borderBottomColor: colors.gray[300],
    borderBottomWidth: 0.5,
    padding: 16,
  },
  content: {
    padding: 16,
  },
  footerComponent: {
    borderTopColor: colors.gray[300],
    borderTopWidth: 0.5,
    padding: 16,
  },
});
