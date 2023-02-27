import { classNames } from 'shared/lib/classNames/classNames';

import cl from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;
    return (
        <div className={classNames(cl.Text, {[cl[theme]]: theme}, [className])}>
            {title && <div className={cl.title}>{title}</div>}
            {text && <div className={cl.text}>{text}</div>}
        </div>
    );
};