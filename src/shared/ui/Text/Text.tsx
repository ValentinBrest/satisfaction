import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

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

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;
    
    return (
        <div className={classNames(cl.Text, {[cl[theme]]: true}, [className, cl[align]])}>
            {title && <div className={cl.title}>{title}</div>}
            {text && <div className={cl.text}>{text}</div>}
        </div>
    );
});