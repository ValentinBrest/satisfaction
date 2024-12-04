import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Listbox } from '@/shared/ui/Popups';

import { Currency } from '../../model/consts/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
    dictTr?: string;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange, readonly, dictTr } = props;
    const { t } = useTranslation(dictTr ?? '');

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <Listbox
            className={classNames('', {}, [className])}
            label={`${t('ukazhite-valyutu')}:`}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="topRight"
        />
    );
});
