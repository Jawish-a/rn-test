import { AppText } from 'components/common/AppText';
import { StyleSheet, View, ViewProps } from 'react-native';

type MiddleTextContainerProps = {
    title?: string;
};

export const MiddleTextContainer: React.FC<
    ViewProps & MiddleTextContainerProps
> = ({ title }) => {
    return (
        <View style={styles.textContainer}>
            <AppText variant={'label'} style={{ textTransform: 'uppercase' }}>
                {title}
            </AppText>
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
