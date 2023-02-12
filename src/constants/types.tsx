import { ColorValue, ViewProps } from 'react-native';

//
export type AppEmptySpaceType = {
    height?: number;
    width?: number;
};
export type AppCardType = {
    headerText?: string;
    headerImage?: string;
    headerImageHeight?: number;
    footerComponent: JSX.Element;
};

export type AppSwitchType = {
    onPress: () => void;
    text: string;
    isEnabled?: boolean;
    status: boolean;
    direction: string;
    scale?: number;
};

export type AppButtonGroupType = {
    action: (() => void)[];
    size: number;
    textValue: string[];
    isEnabled: boolean[];
};

export type AppButtonType = {
    onPress: () => void;
    size: number;
    textValue: string;
    icon: string;
    iconPosition: 'left' | 'right';
    isEnabled: boolean;
};

export type AppAvatarType = {
    size: number;
    shape?: 'round' | 'rounded' | 'square';
    alt: string;
};

export type AppBadge = ViewProps & {
    textValue: string;
    size: number;
    status: 'primary' | 'success' | 'info' | 'light' | 'warning' | 'danger';
};

export type AppButtonIconComonentType = {
    size: number;
    position: 'left' | 'right';
    iconName: string;
    iconColor: ColorValue | undefined;
};
