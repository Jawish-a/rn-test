import {View} from 'react-native';
import React from 'react';
import {AppEmptySpaceType} from '../../constants/Types';

const AppEmptySpace: React.FC<AppEmptySpaceType> = ({
  height = 0,
  width = 0,
}) => {
  return <View style={{height: height, width: width}} />;
};

export default AppEmptySpace;
