import { AppSwitchType } from 'constants/types';
import { colors } from 'assets/theme/colors';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
    interpolate,
    interpolateColor,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import AppEmptySpace from './AppEmptySpace';
import { AppText } from './AppText';

const WIDTH = 50;
const HEIGHT = 30;

export const AppSwitch: React.FC<AppSwitchType> = ({
    onPress,
    text,
    isEnabled = true,
    status = false,
    direction = 'right',
    scale = 1,
    // ...switchProps
}) => {
    // used for determining if the text should be right or left of the switch
    const isTextDirectionRight = direction === 'right';
    // used to determine if the switch knob is pressed or not
    const isPressed = useSharedValue(false);
    // the position of the knob
    const knobStartingPosition = useSharedValue(1);

    // checks if the switch is enabled or not before changing the status
    const changeState = () => {
        isEnabled ? onPress() : null;
    };

    // returns a value based on the status of switch
    // 1 for active 0 for inactive
    // used for changing the animation of the switch
    const switchStatus = useDerivedValue(() => {
        return status ? 1 : 0;
    }, [status]);

    // used to determine the amount of the scale of the switch knob
    // based on whether the button is pressed or not
    // the knob should scale horizantaly x amount of width
    const shouldScale = useDerivedValue(() => {
        return isPressed.value ? 6 : 1;
    }, [isPressed]);

    // the animation of the background color of the switch track
    // if the switch status if active turn to success color else grey
    const animatedTrack = useAnimatedStyle(() => {
        const backgroundColors = interpolateColor(
            switchStatus.value,
            [0, 1],
            [colors.gray[300], colors.theme.success],
        );
        return {
            backgroundColor: backgroundColors,
        };
    });

    // the animation of the switch knob position and the color
    // if it is active it sould go to right else go to left
    // it should also change the color of the knob from a to b
    const animatedCircle = useAnimatedStyle(() => {
        const backgroundColors = interpolateColor(
            switchStatus.value,
            [0, 1],
            [colors.theme.light, colors.gray[100]],
        );
        return {
            backgroundColor: backgroundColors,
            position: 'relative',
            left: withTiming(
                interpolate(
                    switchStatus.value,
                    [0, 1],
                    [
                        knobStartingPosition.value,
                        WIDTH / 2 - (isPressed.value ? 10 : 5),
                    ],
                ),
                {
                    duration: 300,
                },
            ),
        };
    });

    // the animation of the switch scale
    // if the user press and holds the knob it should scale x amount horizantily
    const animatedCircleScale = useAnimatedStyle(() => {
        return {
            width: withTiming(WIDTH / 2 + shouldScale.value, {
                duration: 300,
            }),
        };
    });

    // used on the pressable gesture component to change the knob status if it is pressed or not
    const eventHandler = useAnimatedGestureHandler({
        onStart(_event, _context) {
            isPressed.value = true;
        },
        onCancel(_event, _context) {
            isPressed.value = false;
        },
        onEnd(_event, _context) {
            isPressed.value = false;
        },
        onFinish(_event, _context, _isCanceledOrFailed) {
            isPressed.value = false;
            runOnJS(changeState)();
        },
    });

    return (
        <View
            style={[
                styles.container,
                { flexDirection: isTextDirectionRight ? 'row' : 'row-reverse' },
            ]}>
            <PanGestureHandler onGestureEvent={eventHandler}>
                <Animated.View
                    style={[
                        styles.switchTrack,
                        animatedTrack,
                        { transform: [{ scale: scale }] },
                    ]}>
                    <Animated.View
                        style={[
                            styles.switchKnob,
                            animatedCircle,
                            animatedCircleScale,
                        ]}
                    />
                </Animated.View>
            </PanGestureHandler>
            <AppEmptySpace width={8} />
            <Pressable onPress={changeState}>
                <AppText variant={'p1'} style={[]}>
                    {text}
                </AppText>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    switchTrack: {
        height: HEIGHT,
        width: WIDTH,
        borderRadius: WIDTH / 2,
        justifyContent: 'center',
        paddingHorizontal: 2,
    },
    switchKnob: {
        backgroundColor: 'white',
        width: WIDTH / 2 + 1,
        height: WIDTH / 2 + 1,
        borderRadius: WIDTH / 2,
    },
});
