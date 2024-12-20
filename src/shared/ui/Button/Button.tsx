import { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cl from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outline_red',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}
export const enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean; 
    children?: ReactNode;
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className, 
        children, 
        theme = ButtonTheme.OUTLINE, 
        square,
        size = ButtonSize.M,
        fullWidth,
        disabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cl.square]: square,
        [cl.disabled]: disabled,
        [cl.fullWidth]: fullWidth,
    };

    return (
        <button 
            type="button"
            className={classNames(cl.Button, mods, [className, cl[theme], cl[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});