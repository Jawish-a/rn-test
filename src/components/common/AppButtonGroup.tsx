import {Pressable, PressableProps, StyleSheet, View} from 'react-native';
import React from 'react';
import {AppText} from './AppText';
import {colors} from '../../assets/theme/colors';
import {typography} from '../../assets/theme/typography';
import {AppButtonGroupType} from '../../constants/Types';

export const AppButtonGroup: React.FC<AppButtonGroupType & PressableProps> = ({
  action,
  size,
  textValue,
  isEnabled = [true],
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      {textValue.map((item, i) => {
        return (
          <Pressable
            key={textValue[i]}
            style={[
              styles.basic,
              !isEnabled[i] && styles.disabled,
              {
                paddingHorizontal: size,
                paddingVertical: size / 2,
              },
            ]}
            {...otherProps}
            onPress={isEnabled[i] ? () => action[i]() : null}>
            <AppText
              style={[
                {
                  ...typography.label,
                  textTransform: 'uppercase',
                  fontSize: size,
                },
                !isEnabled[i] && styles.disabled,
              ]}>
              {textValue[i]}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  basic: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.theme.primary,
    borderWidth: 1,
    flexDirection: 'row',
  },
  disabled: {
    backgroundColor: colors.gray[300],
    borderColor: colors.gray[400],
    color: colors.gray[500],
  },
});
