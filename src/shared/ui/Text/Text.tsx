import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cl from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted',
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

    'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3'

const mapSizaToHEaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

export const Text = memo((props: TextProps) => {
    const { t } = useTranslation();
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const mods: Mods = {
        [cl[theme]]: true,
        [cl[align]]: true,
        [cl[size]]: true,
    };

    const HeaderTag = mapSizaToHEaderTag[size];
    
    return (
        <div className={classNames(cl.Text, mods, [className])}>
            {title && <HeaderTag data-testid={`${dataTestId}.Header`} className={cl.title}>{t(title)}</HeaderTag>}
            {text && <p data-testid={`${dataTestId}.Paragraph`} className={cl.text}>{t(text)}</p>}
        </div>
    );
});