import { AppEmptySpaceType } from 'constants/types';
import React from 'react';
import { View } from 'react-native';

const AppEmptySpace: React.FC<AppEmptySpaceType> = ({
    height = 0,
    width = 0,
}) => {
    return <View style={{ height: height, width: width }} />;
};

export default AppEmptySpace;
