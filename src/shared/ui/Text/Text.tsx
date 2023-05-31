import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cl from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

export enum TextSize {
    S = 'small',
    M = 'middle',
    L = 'large',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const mods: Mods = {
        [cl[theme]]: true,
        [cl[align]]: true,
        [cl[size]]: true,
    };
    
    return (
        <div className={classNames(cl.Text, mods, [className])}>
            {title && <div className={cl.title}>{title}</div>}
            {text && <div className={cl.text}>{text}</div>}
        </div>
    );
});