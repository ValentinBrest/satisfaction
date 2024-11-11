import { HTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cl from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
   className?: string;
   children: ReactNode;
   theme?: CardTheme;
   max?: boolean;
}

export const Card = (props: CardProps) => {
    const { className, children, theme = CardTheme.NORMAL, max, ...otherProps } = props;

    return (
        <div className={classNames(cl.Card, {[cl.max]: max }, [className, cl[theme]])} {...otherProps}>
            {children}
        </div>
    );
};