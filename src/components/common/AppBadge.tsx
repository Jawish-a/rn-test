import {View, ViewProps} from 'react-native';
import React from 'react';
import {AppText} from './AppText';
import {colors} from '../../assets/theme/colors';
import {typography} from '../../assets/theme/typography';

type AppBadge = ViewProps & {
  textValue: string;
  size: number;
  status: 'primary' | 'success' | 'info' | 'light' | 'warning' | 'danger';
};

export const AppButton: React.FC<AppBadge> = ({textValue, size, status}) => {
  return (
    <View style={{backgroundColor: colors.theme[status]}}>
      <AppText
        style={[
          {
            ...typography.label,
            textTransform: 'uppercase',
            fontSize: size,
          },
        ]}>
        {textValue}
      </AppText>
    </View>
  );
};

// const styles = StyleSheet.create({
//   basic: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: colors.theme.primary,
//     borderWidth: 1,
//     flexDirection: 'row',
//   },
//   disabled: {
//     backgroundColor: colors.gray[300],
//     borderColor: colors.gray[400],
//     color: colors.gray[500],
//   },
// });
