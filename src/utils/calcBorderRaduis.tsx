import { AppAvatarType } from 'constants/types';

export function calcBorderRaduis(
    shape: AppAvatarType['shape'],
    size: AppAvatarType['size'],
): number {
    if (shape === 'square') {
        return 0;
    }
    if (shape === 'rounded') {
        return size / 5;
    }
    return size / 2;
}
