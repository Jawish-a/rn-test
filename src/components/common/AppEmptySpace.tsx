import { AppEmptySpaceType } from 'constants/types';
import { View } from 'react-native';

export const AppEmptySpace: React.FC<AppEmptySpaceType> = ({
    height = 0,
    width = 0,
}) => {
    return <View style={{ height: height, width: width }} />;
};
