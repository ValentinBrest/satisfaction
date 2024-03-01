import { HTMLAttributes, ReactNode } from 'react';
import { Normal } from 'entities/Article/ui/ArticleDetails/ArticleDetails.stories';
import { classNames } from 'shared/lib/classNames/classNames';

import cl from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
   className?: string;
   children: ReactNode;
   theme?: CardTheme;
}

export const Card = (props: CardProps) => {
    const { className, children, theme = CardTheme.NORMAL ,...otherProps } = props;

    return (
        <div className={classNames(cl.Card, {}, [className, cl[theme]])} {...otherProps}>
            {children}
        </div>
    );
};