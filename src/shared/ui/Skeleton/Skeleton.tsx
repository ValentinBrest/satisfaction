import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './Skeleton.module.scss';

export enum SkeletonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className, 
        height,
        width,
        border,
    } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div 
            className={classNames(cl.Skeleton, {}, [className])}
            style={styles}
        />
    );
});