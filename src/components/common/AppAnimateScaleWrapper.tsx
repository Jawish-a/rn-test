import { useRef, useState } from 'react';
import { Animated } from 'react-native';

export type AppAnimateScaleWrapperType = {
    animateTrigger: any;
    children: JSX.Element | JSX.Element[];
};

export const AppAnimateScaleWrapper: React.FC<AppAnimateScaleWrapperType> = ({
    animateTrigger,
    children,
}) => {
    const [scaleValue] = useState(new Animated.Value(1));
    const scale = useRef(scaleValue).current;

    const animate = () => {
        Animated.timing(scale, {
            toValue: 1.1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(scale, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        });
    };

    if (animateTrigger) {
        animate();
    }

    return (
        <Animated.View
            style={{
                transform: [{ scale: scale }],
            }}>
            {children}
        </Animated.View>
    );
};
