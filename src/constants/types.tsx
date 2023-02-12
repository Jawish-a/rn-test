import { typography } from 'assets/theme/typography';
import { DefaultTFuncReturn } from 'i18next';
import { ColorValue, TextInputProps, TextProps, ViewProps } from 'react-native';
import { ScreenProps } from 'react-native-screens';

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
    size?: number;
    textValue?: string | undefined | DefaultTFuncReturn;
    icon?: string;
    iconPosition?: 'left' | 'right';
    isEnabled?: boolean;
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

export type HeaderType = ScreenProps & {
    title: string;
};

export type ColorType = {
    [name: string]: string;
};

export type ColorCollectionType = {
    [name: string]: ColorType;
};

export type TypographyValueType = {
    fontSize: 36 | 32 | 30 | 26 | 22 | 18 | 15 | 13 | 12 | 10;
    fontFamily:
        | 'Almarai-Light'
        | 'Almarai-Bold'
        | 'Almarai-ExtraBold'
        | 'Almarai-Regular'
        | 'OpenSans-Bold'
        | 'OpenSans-BoldItalic'
        | 'OpenSans-ExtraBold'
        | 'OpenSans-ExtraBoldItalic'
        | 'OpenSans-Italic'
        | 'OpenSans-Light'
        | 'OpenSans-LightItalic'
        | 'OpenSans-Medium'
        | 'OpenSans-MediumItalic'
        | 'OpenSans-Regular'
        | 'OpenSans-SemiBold'
        | 'OpenSans-SemiBoldItalic';
    color?: string;
    lineHeight?: number;
};

export type TypographyType = {
    [name: string]: TypographyValueType;
};

export type AppCheckBoxType = {
    onPress: () => any;
    text: string;
    checkBoxSize?: number;
    textStyle?: TextProps;
    isEnabled?: boolean;
    status?: boolean;
    direction?: 'right' | 'left';
    width?: number | '100%';
};

export type TypographyVariant = keyof typeof typography;

export type AppTextType = {
    appTextStatus?: 'enabled' | 'disabled';
    appTextColor?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    variant: TypographyVariant | string;
};

export type AppTextInputType = TextInputProps & {
    value: string;
    setValue: (text: string) => void;
    helperText?: string;
    error?: boolean;
    icon?: string;
    title?: string;
};

export type AppRadioButtonType = {
    onPress: () => any;
    text: string;
    checkBoxSize?: number;
    textStyle?: TextProps;
    isEnabled?: boolean;
    status?: boolean;
    direction?: 'right' | 'left';
    width?: number | '100%';
};
