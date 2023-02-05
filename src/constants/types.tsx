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
    icon: JSX.Element;
    iconPosition: string;
    isEnabled: boolean;
};
